import Conversation from "../models/conversation.models.js";
import Message from "../models/message.models.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params; // Receiver ID from the route parameter
        const senderId = req.user._id; // Sender ID from the authenticated user

        // Find or create a conversation between the two users
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            // If no conversation exists, create a new one
            conversation = new Conversation({
                participants: [senderId, receiverId],
            });
            await conversation.save();
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        // Save the message
        await newMessage.save();

        // Add the message to the conversation
        conversation.messages.push(newMessage._id);
        await conversation.save();

        // SOCKET.IO FUNCTIONALITY WILL GO HERE

        // Respond with the created message
        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage,
        });
    } catch (error) {
        console.error("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params; // Corrected destructuring
        const senderId = req.user._id; // Sender ID from the authenticated user

        // Find the conversation between the two users
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");

        if (!conversation) {
            return res.status(404).json({ error: "Conversation not found" });
        }


        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        // Respond with the messages in the conversation
        res.status(200).json(messages);
    } catch (error) {
        console.error("Error in getMessages controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

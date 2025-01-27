import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Message", // Capitalized 'Message' to maintain naming consistency
                default: [],
            },
        ],
    },
    { timestamps: true } // Correct placement of timestamps configuration
);

const Conversation = mongoose.model("Conversation", conversationSchema); // Fixed typo in model name

export default Conversation;

import User from '../models/user.models.js'; // Added '.js' to the import path for consistency

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        // Fetch all users except the logged-in user
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        
        // Send the filtered users as a response
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar:", error.message); // Fixed typo in "message"
        res.status(500).json({ error: "Internal Server error" });
    }
};

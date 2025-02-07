import User from '../models/user.models.js'; 

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; // Assuming user ID is available in req.user

        // Fetch all users except the logged-in user
        const allUsers = await User.find({ _id: { $ne: loggedInUserId } })
            .select("-password")
            .lean();

        res.status(200).json(allUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

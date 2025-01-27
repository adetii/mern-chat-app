import jwt from 'jsonwebtoken';
import User from '../models/user.models.js'; // Ensured correct import

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ error: "Access denied. No token provided." });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;

        // Fetch user details and exclude password
        const user = await User.findById(decoded.userId).select("-password");

        // If the user does not exist, send an error
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Attach the user to the request object
        req.user = user;

        next(); // Move to the next middleware or route handler
    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;

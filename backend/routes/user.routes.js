import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controllers.js"; // Import the controller function

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar); // Added proper spacing for readability

export default router;

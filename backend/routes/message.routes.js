import express from 'express';
import { sendMessage, getMessages } from '../controllers/message.controllers.js'; // Ensure getMessages is imported
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

// Route to get messages for a specific conversation
router.get("/:id", protectRoute, getMessages);

// Route to send a message
router.post("/send/:id", protectRoute, sendMessage);

export default router;

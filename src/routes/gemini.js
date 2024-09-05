// Initialize express router
import express from "express";
import { generateText, generateboard, generatefood, generatefistroutine } from "../controllers/geminiController.js";

// Create a new router to handle the gemini routes
const router = express.Router();

// Define the routes for the Gemini API
router.get("/generate-routine", generateText);

router.get("/generate-board", generateboard);

router.post("/generate-food", generatefood);

router.post("/generate-fist", generatefistroutine);

// Export the router
export default router;

import express from "express";
import UserController from "../controllers/userController.js";


const router = express.Router();

router.post("/create", UserController.createUser);
router.post("/login", UserController.login);

export default router;

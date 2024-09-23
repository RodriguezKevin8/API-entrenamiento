import express from "express";
import routineController from "../controllers/routineController.js";


const router = express.Router();

router.post("/first-routine", routineController.createRoutine);

router.post("/new-routine", routineController.create);


export default router;

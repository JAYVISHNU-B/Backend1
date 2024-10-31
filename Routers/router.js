import express from "express";
import { forgotPassword, loginUser, registerUser, resetPassword,} from "../controllers/Controller.js";



const router = express.Router();

router.post("/register" ,registerUser);
router.post("/login", loginUser);
router.post("/forgot-password",forgotPassword)
router.post("/reset-Password/:id/:token/:rString",resetPassword)


export default router;
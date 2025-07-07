import express from 'express';
import { getUserProfile, registerUser, loginUser } from '../controllers/userController.js' 
import { protect } from '../middleware/authMiddleware.js';


const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

//Protected Route as token will be required
userRouter.get("/profile",protect, getUserProfile)

export default userRouter;
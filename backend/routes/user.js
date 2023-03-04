import express from "express";
import { editProfile, getUser, like } from "../controller/userController.js";
const userRouter = express.Router();
userRouter.post("/editProfile", editProfile)
userRouter.get("/:email", getUser)
userRouter.post("/like", like)

export default userRouter;


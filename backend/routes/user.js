import express from "express";
import { addPhotos, dislike, editProfile, getMatchedUsers, getUser, like, userSuggestions } from "../controller/userController.js";

const userRouter = express.Router();
userRouter.post("/editProfile", editProfile)
userRouter.get("/:mobileNo", getUser)
userRouter.post("/like", like)
userRouter.post("/dislike", dislike)
userRouter.post("/addPhotos", addPhotos)
userRouter.get("/suggestedUsers/:mobileNo", userSuggestions)
userRouter.get("/getMatchedUsers/:userId", getMatchedUsers)


export default userRouter;


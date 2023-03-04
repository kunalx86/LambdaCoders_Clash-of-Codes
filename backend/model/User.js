import mongoose from "mongoose";
import GeoSchema from "./GeoSchema.js";
const userSchema = new mongoose.Schema({
    firstName: String,
    email: String,
    lastName: String,
    gender: String,
    DOB: Date,
    age: Number,
    interests: [String],
    location: GeoSchema,
    photos: [String],
    sexualOrientation: [String],
    height: Number,
    score: Number,
    bio: String,
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    },
    dislikes: [mongoose.Schema.Types.ObjectId],
    mobileNo: Number,
    ageRange: [Number],
    matches: Number,
    radius: Number,
    lookingFor: String
},
    { timestamps: true }
);
userSchema.index({ location: '2dsphere' });
const User = mongoose.model("user", userSchema);
export default User;
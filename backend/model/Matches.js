import mongoose from "mongoose";
const matchSchema = new mongoose.Schema({
    matchMaker: String,
    matched: String
}
    , { timestamps: true }
)
const Matches = mongoose.model("matches", matchSchema);
export default Matches;
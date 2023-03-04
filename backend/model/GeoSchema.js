import mongoose from "mongoose";

const GeoSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "Point",
    },
    coordinates: {
        type: [Number], //the type is an array of numbers
        index: "2dsphere"
    }
})
export default GeoSchema;
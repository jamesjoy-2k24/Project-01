import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userID: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    playerID: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    },
    review: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Review", reviewSchema)
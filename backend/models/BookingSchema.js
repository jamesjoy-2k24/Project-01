import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
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
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "declined"],
        default: "pending"
    }
});

export default mongoose.model("Booking", bookingSchema)
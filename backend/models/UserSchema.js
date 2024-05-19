import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['admin', 'sponsor', 'player'],
        default: 'user'
    },
    verified:{
        type: Boolean,
        default: false
    },
    ratings: [Number],
    token: String,
    place: String,
    company: String,
    club: String,
    sports: [String],
    photo:[String],
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("User", userSchema)
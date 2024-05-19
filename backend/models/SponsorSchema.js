import mongoose from "mongoose";

const sponsorSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
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
        default: 'sponsor'
    },
    verified:{
        type: Boolean,
        default: false
    },
    appointments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment"
        }
    ],
    token: String,
    place: String,
    company: String,
    image:[String],
    date: {
        type: Date,
        default: Date.now
    }},{timestamps: true});

export default mongoose.model("Sponsor", screenLeftponsorSchema)
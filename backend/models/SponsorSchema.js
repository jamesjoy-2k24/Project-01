import mongoose from "mongoose";

const sponsorSchema = new mongoose.Schema({
    sponsorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sponsor"
    },
    name: {
        type: String,
        required: true
    },
    nic: {
        type: String,
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
  isApproved: {
        type: String,
        enum: ["pending", "approved", "declined"],
        default: "pending"

  },
  bookings: [{
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    },
  }],
    token: String,
    place: String,
    company: String,
    image:[String],
    date: {
        type: Date,
        default: Date.now
    }},{timestamps: true});


export default mongoose.model("Sponsor", sponsorSchema)
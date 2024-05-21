import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    playerId: {
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    nic: {
        type: String,
    },
    photo: {
        type: [String]
    },
    role:{
        type: String,
        default: 'player'
    },
    place: {
        type: String
    },
    price: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },

    // Fields for player
    club: {
        type: String
    },
    sports:{
        type: [String]
    },
    position: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    experience: {
        type : Array
    },
    description: {
        type: String
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rating"
        }
    ],
    averageRating: {
        type: Number,
        default: 0
    },
    totalRatings: {
        type: Number,
        default: 0
    },
    isApproved: {
        type:String,
        enum:["pending", "approved", "declined"],
        default: "pending"
    },
    bookings: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    }
});
    
export default mongoose.model("Player", playerSchema)
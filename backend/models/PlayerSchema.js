import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
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
        required: true
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
    totalRatings: {
        type: Number,
        default: 0
    },
    totalRatingsValue: {
        type: Number,
        default: 0
    }
});
    
export default mongoose.model("Player", playerSchema)
import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  nic: {
    type: String,
  },
  photo: {
    type: [String],
  },
  role: {
    type: String,
    default: "player",
  },
  place: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  // Fields for player
  price: {
    type: Number,
  },
  club: {
    type: [String],
  },
  team: {
    type: String,
  },
  sports: {
    type: [String],
  },
  position: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  experiences: {
    type: Array,
  },
  about: {
    type: String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  rating: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
    },
  ],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "declined"],
    default: "pending",
  },
  available: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  token: String,
  appointments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment",
  },
});

export default mongoose.model("Player", playerSchema);

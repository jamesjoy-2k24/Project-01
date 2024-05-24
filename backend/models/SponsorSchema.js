import mongoose from "mongoose";

const sponsorSchema = new mongoose.Schema(
  {
    sponsorId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    nic: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "sponsor",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isApproved: {
      type: String,
      enum: ["pending", "approved", "declined"],
      default: "pending",
    },
    // reviews: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Review",
    //   },
    // ],
    // rating: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Rating",
    //   },
    // ],
    appointments: [
      {
        player: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Player",
        },
      },
    ],
    token: String,
    place: String,
    company: String,
    photo: [String],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Sponsor", sponsorSchema);

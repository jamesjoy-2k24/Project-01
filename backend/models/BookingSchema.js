import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    playerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    sponsorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sponsor",
    },
    price: {
      type: String,
      required: true,
    },
    sessionId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "declined"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// bookingSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "player",
//     select: "name",
//     error: (err) => {
//       throw new Error(
//         "Cannot read properties of undefined (reading 'id')",
//         err
//       );
//     },
//   });
//   next();
// });

export default mongoose.model("Booking", bookingSchema);

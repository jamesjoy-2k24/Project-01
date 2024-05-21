import mongoose from "mongoose";

// Define the review schema
const reviewSchema = new mongoose.Schema({
    sponsor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sponsor"    },
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
    },
    reviewText: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        default: 1,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

// Add indexes for performance
reviewSchema.index({ player: 1 });
reviewSchema.index({ sponsor: 1 });

// Middleware to auto-populate sponsor and player fields
reviewSchema.pre(/^find/, function (next) {
    this.populate({ path: "sponsor", select: "name photo" });
    this.populate({ path: "player", select: "name" });
    next();
});

// Static method to calculate average rating
reviewSchema.statics.getAverageRating = async function (playerId) {
    const stats = await this.aggregate([
        {
            $match: { player: playerId },
        },
        {
            $group: {
                _id: "$player",
                numberOfReviews: { $sum: 1 },
                averageRating: { $avg: "$rating" },
            },
        },
    ]);

    console.log(`Average rating of player ${playerId} is ${stats[0]?.averageRating}`);

    if (stats.length > 0) {
        const updatedPlayer = await this.model("Player").findByIdAndUpdate(
            playerId,
            {
                averageRating: stats[0].averageRating,
                numberOfReviews: stats[0].numberOfReviews,
            },
            { new: true, runValidators: true }
        );
        console.log(updatedPlayer);
    }
};

// Post-save hook to recalculate average rating
reviewSchema.post("save", function () {
    this.constructor.getAverageRating(this.player);
});

// Export the Review model
export default mongoose.model("Review", reviewSchema);

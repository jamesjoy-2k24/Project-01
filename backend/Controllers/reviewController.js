import Review from "../models/ReviewSchema.js";
import Player from "../models/PlayerSchema.js";

// Get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const allReviews = await Review.find();
        res.status(200).json(allReviews);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }

}

// Create Review
export const createReview = async (req, res) => {   
    if(!req.body.player) req.body.player = req.params.playerId;
    if(!req.body.sponsor) req.body.sponsor = req.params.sponsorId;
    const newReview = new Review(req.body);
    try {
        const savedReview = await newReview.save();

        await Player.findByIdAndUpdate(req.body.player, {
            $push: { reviews: savedReview._id }
        });

        res
        .status(200)
        .json(savedReview);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
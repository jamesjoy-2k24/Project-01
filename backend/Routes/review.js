import express from "express";
import {
  getAllReviews,
  createReview,
} from "../Controllers/reviewController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({ mergeParams: true });

// Routes

router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["sponsor"]), createReview);

export default router;

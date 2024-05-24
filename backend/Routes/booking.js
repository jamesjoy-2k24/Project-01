import express from "express";
import { authenticate } from "../auth/verifyToken.js";
import {
  getCheckoutSession,
  paymentSuccess,
} from "../Controllers/bookingController.js";

const router = express.Router();

router.post("/checkout-session/:playerId", authenticate, getCheckoutSession);
router.post("/payment-success", paymentSuccess);

export default router;

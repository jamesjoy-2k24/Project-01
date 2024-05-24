import Stripe from "stripe";
import Player from "../models/PlayerSchema.js";
import Sponsor from "../models/SponsorSchema.js";
import Booking from "../models/BookingSchema.js";

export const getCheckoutSession = async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId);
    const sponsor = await Sponsor.findById(req.sponsorId);

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get("host")}/players/${player._id}`,
      client_reference_id: req.params.playerId,
      line_items: [
        {
          price_data: {
            currency: "lkr",
            unit_amount: player.price * 100,
            product_data: {
              name: player.name,
              description: player.bio,
              // images: [player.photo], // Ensure this is a valid URL
            },
          },
          quantity: 1,
        },
      ],
    });

    const booking = new Booking({
      player: player._id,
      price: player.price,
      sessionId: session.id,
    });

    await booking.save();

    res.status(200).json({
      success: true,
      session,
      message: "Booking session created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const paymentSuccess = async (req, res) => {
  try {
    const { sessionId } = req.body;
    const session = await Stripe(
      process.env.STRIPE_SECRET_KEY
    ).checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") {
      res.status(200).json({ success: true, message: "Payment success" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

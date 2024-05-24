import Sponsor from "../models/SponsorSchema.js";
import Booking from "../models/BookingSchema.js";
import Player from "../models/PlayerSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

/**
 * Update a single sponsor
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Promise<void>}
 */
export const updateSponsor = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedSponsor = await Sponsor.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      updatedSponsor.password = hash;
    }

    const token = jwt.sign(
      { _id: updatedSponsor._id, role: updatedSponsor.role },
      process.env.JWT_SECRET_KEY
    );

    updatedSponsor.token = token;

    // Return the updated sponsor
    res.status(200).json(updatedSponsor);
  } catch (error) {
    // Return the error
    res.status(500).json(error);
  }
};

/**
 * Delete a single sponsor
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Promise<void>}
 */
export const deleteSponsor = async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the sponsor
    await Sponsor.findByIdAndDelete(id);

    // Return a success message
    res.status(200).json("Sponsor has been deleted");
  } catch (error) {
    // Return the error
    res.status(500).json(error);
  }
};

/**
 * Get a single sponsor
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Promise<void>}
 */
export const getSingleSponsor = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the sponsor
    const singleSponsor = await Sponsor.findById(id).select("-password");

    // Return the sponsor
    res.status(200).json(singleSponsor);
  } catch (error) {
    // Return the error
    res.status(500).json(error);
  }
};

/**
 * Get all sponsors
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Promise<void>}
 */
export const getAllSponsors = async (req, res) => {
  const { id } = req.params;
  try {
    // Find all sponsors
    const sponsors = await Sponsor.find().select("-password");

    // Return all sponsors
    res.status(200).json(sponsors);
  } catch (error) {
    // Return the error
    res.status(500).json(error);
  }
};

export const getSponsorProfile = async (req, res) => {
  const sponsorId = req.sponsorId;
  try {
    const sponsor = await Sponsor.findById(req.userId);

    if (!sponsor) {
      return res.status(404).json({
        success: false,
        message: "Sponsor not found",
        data: null,
      });
    }

    const { password, ...others } = sponsor._doc;

    res.status(200).json({
      success: true,
      message: "Sponsor profile retrieved successfully",
      data: {
        ...others,
      },
    });
  } catch (error) {
    console.error("Error retrieving sponsor profile:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    // Retrive appointments from booking
    const bookings = await Booking.find({ sponsor: req.sponsorId });

    // extract player ids from appointment booking
    const playerIds = bookings.map((el) => el.player.id);

    // retrive players using doctor ids
    const players = await Player.find({ _id: { $in: playerIds } }).select(
      "-password"
    );

    res.status(200).json({
      success: true,
      message: "My appointments retrieved successfully",
      data: players,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

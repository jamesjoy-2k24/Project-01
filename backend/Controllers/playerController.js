import Player from "../models/PlayerSchema.js";
import Booking from "../models/BookingSchema.js";

/**
 * Update a single player
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Promise<void>}
 */
export const updatePlayer = async (req, res) => {
  const { id } = req.params;

  try {
    // Find and update the player
    const updatedPlayer = await Player.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    // Return the updated player
    res.status(200).json(updatedPlayer);
  } catch (error) {
    // Return the error
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

/**
 * Delete a single player
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Promise<void>}
 */
export const deletePlayer = async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the player
    await Player.findByIdAndDelete(id);

    // Return a success message
    res.status(200).json({ message: "Player has been deleted" });
  } catch (error) {
    // Return the error
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

/**
 * Get a single player
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Promise<void>}
 */
export const getSinglePlayer = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the player
    const singlePlayer = await Player.findById(id)
      .populate("reviews")
      .select("-password");

    // Return the player
    res.status(200).json(singlePlayer);
  } catch (error) {
    // Return the error
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

/**
 * Get all players
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Promise<void>}
 */
export const getAllPlayers = async (req, res) => {
  try {
    const { query } = req.query;
    let players;

    if (query) {
      players = await Player.find(
        {
          isApproved: "approved",
          $or: [
            { name: { $regex: query, $options: "i" } },
            { club: { $regex: query, $options: "i" } },
            { sports: { $regex: query, $options: "i" } },
            { position: { $regex: query, $options: "i" } },
            { place: { $regex: query, $options: "i" } },
            { email: { $regex: query, $options: "i" } },
          ],
        },
        "-password"
      );
    } else {
      players = await Player.find({ isApproved: "approved" }, "-password");
    }

    // Return all players
    res.status(200).json(players);
  } catch (error) {
    // Return the error
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Get Player Profile
export const getPlayerProfile = async (req, res) => {
  const playerId = req.userId;

  // Debug: Log the ID to ensure it is correct
  console.log(`Received ID: ${playerId}`);

  try {
    const player = await Player.findById(playerId);

    if (!player) {
      // Player not found
      return res.status(404).json({ message: "Player not found" });
    }

    const { password, ...rest } = player._doc;
    const appointments = await Booking.find({ player: playerId });

    // Success response
    res.status(200).json({
      success: true,
      message: "Player profile retrieved successfully",
      data: { ...rest, appointments },
    });
  } catch (error) {
    // Log the error to the console
    console.error(`Error retrieving player profile: ${error.message}`);

    // Error response
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

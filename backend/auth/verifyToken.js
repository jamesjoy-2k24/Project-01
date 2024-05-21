import jwt from "jsonwebtoken";
import Player from "../models/PlayerSchema.js";
import Sponsor from "../models/SponsorSchema.js";

export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;

    console.log('Decoded token:', decoded); // Log decoded token

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    return res.status(401).json({ message: "Unauthorized" });
  }
};



export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;
  const role = req.role;

  try {
    let user;

    if (role === "sponsor") {
      user = await Sponsor.findById(userId);
    } else if (role === "player") {
      user = await Player.findById(userId);
    }

    if (!user || !roles.includes(user.role)) {
      return res.status(401).json({ message: "You are not authorized" });
    }

    console.log('User:', user); // Log the user for debugging

    next();
  } catch (error) {
    console.error('Error in role restriction:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

import express from "express";
import { updatePlayer, deletePlayer, getAllPlayers, getSinglePlayer, getPlayerProfile } from "../Controllers/playerController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router = express.Router();

// Nested Routes
router.use("/:playerId/reviews", reviewRouter);

// Routes
router.get("/:id",getSinglePlayer);
router.get("/", getAllPlayers);
router.put("/:id", authenticate, restrict(["player"]), updatePlayer);
router.delete("/:id", authenticate, restrict(["player"]), deletePlayer);
router.get('/profile/me', authenticate, restrict(["player", "admin"]), getPlayerProfile) 
export default router

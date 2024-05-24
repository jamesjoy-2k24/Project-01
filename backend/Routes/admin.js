import express from "express";
import { getSingleAdmin } from "../Controllers/adminController.js";

const router = express.Router();

// Routes
router.get("/:id", getSingleAdmin);

export default router;

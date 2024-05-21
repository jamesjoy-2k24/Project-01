import express from "express";
import { updateSponsor, deleteSponsor, getAllSponsors, getSingleSponsor, getSponsorProfile, getMyAppointments } from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

// Routes
router.get("/:id", authenticate, restrict(["sponsor"]), getSingleSponsor);
router.get("/", authenticate, restrict(["admin"]), getAllSponsors);
router.put("/:id", authenticate, restrict(["sponsor"]), updateSponsor);
router.delete("/:id", authenticate, restrict(["sponsor"]), deleteSponsor);
router.get('/profile/me', authenticate, restrict(["sponsor"]), getSponsorProfile)
router.get('/appointments/my-appointments', authenticate, restrict(["sponsor"]), getMyAppointments)

export default router
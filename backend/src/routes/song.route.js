import { Router } from "express";
import {
  getAllSongs,
  getFeaturedSongs,
  getMadeForYou,
  getTrending,
} from "../controller/song.controller.js";
import {
  authorized,
  authorizedAsAdmin,
} from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", authorized, authorizedAsAdmin, getAllSongs);

router.get("/featured", getFeaturedSongs);
router.get("/made-for-you", getMadeForYou);
router.get("/trending", getTrending);

export default router;

import { Router } from "express";
import {
  createSong,
  deleteSong,
  createAlbum,
} from "../controller/admin/admin.controller.js";
import {
  authorized,
  authorizedAsAdmin,
} from "../middleware/auth.middleware.js";
const router = Router();

router.post("/songs", authorized, authorizedAsAdmin, createSong);
router.get("/songs/:id", authorized, authorizedAsAdmin, deleteSong);
router.get("/albums", authorized, authorizedAsAdmin, createAlbum);

export default router;

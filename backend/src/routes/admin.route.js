import { Router } from "express";
import {
  createSong,
  deleteSong,
  createAlbum,
  deleteAlbum,
  checkAdmin,
} from "../controller/admin/admin.controller.js";
import {
  authorized,
  authorizedAsAdmin,
} from "../middleware/auth.middleware.js";
const router = Router();

//  slightly optimized
//we don't need to repeat the middleware for every route in admin
router.use(authorized, authorizedAsAdmin);
//check admin
router.get("/check", checkAdmin);

//
router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);
router.get("/albums", createAlbum);
router.delete("/albums", deleteAlbum);

export default router;

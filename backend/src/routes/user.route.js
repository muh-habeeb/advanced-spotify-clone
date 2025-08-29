import { Router } from "express";
import {
  authorized,
  authorizedAsAdmin,
} from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controller/user.controller.js";
const router = Router();
router.get("/", authorized, getAllUsers);

export default router;

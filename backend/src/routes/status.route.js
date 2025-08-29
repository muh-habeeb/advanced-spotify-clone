import { Router } from "express";

import { getStatus } from "../controller/status.controller.js";
import {
  authorized,
  authorizedAsAdmin,
} from "../middleware/auth.middleware.js";
const router = Router();

router.get("/", authorized, authorizedAsAdmin, getStatus);

export default router;

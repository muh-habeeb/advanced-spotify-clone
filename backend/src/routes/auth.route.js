import { Router } from "express";
import { userLogin,userRegistrationCallback  } from "../controller/auth.controller.js";

const router = Router();

router.post("/register", userRegistrationCallback)
router.get("/login",userLogin);

export default router;

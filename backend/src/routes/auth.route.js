import { Router } from "express";
import { userLogin,userRegistrationCallback  } from "../controller/auth.controller.js";

const router = Router();

router.post("/reg-callback",userRegistrationCallback)
router.get("/login",userLogin);

export default router;

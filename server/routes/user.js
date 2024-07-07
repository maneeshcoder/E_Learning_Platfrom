import express from "express";
import { register , verifyUser , loginUser, myPorfile } from "../controllers/user.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/user/register",register);
router.post("/user/verify",verifyUser);
router.post("/user/login",loginUser);
router.get("/user/me",isAuth,myPorfile);

export default router;
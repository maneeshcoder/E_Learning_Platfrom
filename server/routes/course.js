import express from "express";
import { checout, fetchLecture, fetchLectures, getAllCourses, getSingleCourse, paymentVerification } from "../controllers/course.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.get("/course/all",getAllCourses);
router.get("/course/:id",getSingleCourse);
router.get("/lectures/:id",isAuth,fetchLectures);
router.get("/lecture/:id",isAuth,fetchLecture);
router.post("/course/checkout?:id",isAuth,checout);
router.post("/verification/:id",isAuth,paymentVerification);
export default router;
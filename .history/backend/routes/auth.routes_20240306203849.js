import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", signup);

router.get("/login", lo );

router.get("/logout");

export default router;
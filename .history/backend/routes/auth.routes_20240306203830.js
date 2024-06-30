import express from "express";
import { sign } from "jsonwebtoken";
import { signup } from "../controllers/auth.controller";

const router = express.Router();

router.get("/signup", signup);

router.get("/login" );

router.get("/logout");

export default router;
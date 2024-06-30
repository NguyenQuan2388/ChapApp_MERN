import express from "express";
import { sign } from "jsonwebtoken";

const router = express.Router();

router.get("/signup", sign);

router.get("/login" );

router.get("/logout");

export default router;
import express from "express";

const router = express.Router();

router.get("/signup", );

router.get("/login", );

router.get("/logout", (req, res) => {
    res.send("Login Route");
  });

export default router;
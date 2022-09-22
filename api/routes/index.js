const express = require("express");
const passport = require("passport");
const auth = require("../controllers/auth");

const router = express.Router();
router.get("/me", auth.me);

router.post("/register", auth.register);

router.post("/login", passport.authenticate("local"), auth.logIn);

router.post("/logout", auth.logOut);

module.exports = router;

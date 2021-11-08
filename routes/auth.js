const router = require("express").Router();
const User = require("../models/User");

//*
router.post("/register", async (req, res) => {
  const user = await new User({
    username: "Zeki",
    email: "zeki@gmail.com",
    password: "123456",
  });

  await user.save();
  res.send("ok");
});

module.exports = router;

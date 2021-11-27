const router = require("express").Router();

const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");

router.get(
  "/set-cookie-token",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: "Demo-lition",
      },
    });
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;

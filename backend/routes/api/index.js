const router = require("express").Router();

const asyncHandler = require("express-async-handler");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth.js");
const { User } = require("../../db/models");

router.get("/require-auth", requireAuth, (req, res) => {
  return res.json(req.user);
});

router.get("/restore-user", restoreUser, (req, res) => {
  console.log(req);
  return res.json(req.user);
});

router.get(
  "/set-token-cookie",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: "Demo-lition",
      },
    });
    console.log(user);
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;

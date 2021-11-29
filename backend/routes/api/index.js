const router = require("express").Router();
const sessionRouter = require("./session");
const userRouter = require("./user");

router.use("/session", sessionRouter);
router.use("/user", userRouter);

module.exports = router;

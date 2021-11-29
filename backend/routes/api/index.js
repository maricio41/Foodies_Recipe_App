const router = require("express").Router();
const sessionRouter = require("./session");
const userRouter = require("./users");

router.use("/session", sessionRouter);
router.use("/users", userRouter);

module.exports = router;

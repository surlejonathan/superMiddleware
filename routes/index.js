const express = require("express");
const router = express.Router();

const middleware = require("./middleware");

router.use("/superMiddleware", middleware);

module.exports = router;

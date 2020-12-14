const express = require("express");
const router = express.Router();

router.get(
  "/",
  (req, res, next) => {
    if (req.originalUrl === "/superMiddleware") {
      console.log("Hello middleware");
      next();
    }
  },
  (req, res, next) => {
    res.send("Hello world!");
    next();
  }
);

module.exports = router;

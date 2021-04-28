// Initialize express router
const router = require("express").Router();
const phoneData = require("./phones.json");

// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to Backend Server",
  });
});

// Set PI phones response
router.get("/phones", function (req, res) {
  res.json(phoneData);
});

// Export API routes
module.exports = router;

// Initialize express router
const router = require("express").Router();
const phoneData = require("./phones.json");

// Set API phones response from mock data
router.get("/", function (req, res) {
  setTimeout(() => {
    res.json(phoneData);
  }, 2000);
});

// Export API routes
module.exports = router;

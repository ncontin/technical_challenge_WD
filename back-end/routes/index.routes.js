const router = require("express").Router();
const phones = require("../data/phones.json");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// Define the route to show all phones
router.get("/phones", (req, res) => {
  console.log(phones);
  res.json(phones);
});

// Define the route to show phone details by ID
router.get("/phones/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  const phone = phones.find((phone) => phone.id === phoneId);
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ error: "Phone not found" });
  }
});

module.exports = router;

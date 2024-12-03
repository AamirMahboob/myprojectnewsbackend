const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

// POST route to handle form submission
router.post("/createNews", formController.submitForm);
router.get("/getNews", formController.getData);
module.exports = router;

const express = require("express");
router = express.Router();

ingredientsRoute = require("../controllers/ingredientsControllers");

router.get("/", ingredientsRoute.ingredientsController);

module.exports = router;
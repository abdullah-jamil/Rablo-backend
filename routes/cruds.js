const express = require("express");
const router = express.Router();

//Import controller
const { createCrud } = require("../controllers/createCrud");
const { getCrud, getCrudById } = require("../controllers/getCrud");
const { updateCrud } = require("../controllers/updateCrud");
const { deleteCrud } = require("../controllers/deleteCrud");
const { fetchCrud } = require("../controllers/fetchCrud");
const { fetchCrudHigher } = require("../controllers/fetchCrudHigher");
const { fetchCrudLower } = require("../controllers/fetchCrudLower");

//Define API routes
router.post("/createCrud", createCrud);
router.get("/getCruds", getCrud);
router.get("/fetchCruds", fetchCrud);
router.get("/fetchCrudHigher", fetchCrudHigher);
router.get("/fetchCrudLower", fetchCrudLower);
router.get("/getCruds/:id", getCrudById);
router.put("/updateCrud/:id", updateCrud);
router.delete("/deleteCrud/:id", deleteCrud);

module.exports = router;

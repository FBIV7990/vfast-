const express = require("express");
const router = express.Router();
const employerRateService = require("../services/employerRates.service");
const authorize=require("../_helpers/authorize");
const Roles=require("../_helpers/role");

// routes

router.post("/addRates", add_rates);
router.post("/updateRates", update_rates);
router.get("/:id", getById);
router.get("/", getAll);
module.exports = router;

function add_rates(req, res, next) {
  employerRateService
    .add_rates(req)
    .then(vendor =>
     res.json(vendor)        
    )
    .catch(err => {
      next(err);
    });
}

function update_rates(req, res, next) {
  employerRateService
    .update_rates(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

function getAll(req, res, next) {
  employerRateService
    .getAll()
    .then(vendorRates =>
     res.json(vendorRates)        
    )
    .catch(err => {
      next(err);
    });
}

function getById(req, res, next) {
  employerRateService
    .getById(req.params.id)
    .then(vendorRates =>
     res.json(vendorRates)        
    )
    .catch(err => {
      next(err);
    });
}
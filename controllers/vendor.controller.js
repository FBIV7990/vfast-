const express = require("express");
const router = express.Router();
const vendorService = require("../services/vendor.service");
const authorize=require("../_helpers/authorize");
const Roles=require("../_helpers/role");

// routes

router.post("/add_rates", add_rates);
router.post("/update_rates", update_rates);
router.get("/getByState/:state", getByState);
router.get("/:id", getById);

router.get("/", getAll);
module.exports = router;

function add_rates(req, res, next) {
  vendorService
    .add_rates(req)
    .then(vendor =>
     res.json(vendor)        
    )
    .catch(err => {
      next(err);
    });
}

function update_rates(req, res, next) {
  vendorService
    .update_rates(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

function getAll(req, res, next) {
  vendorService
    .getAll()
    .then(vendorRates =>
     res.json(vendorRates)        
    )
    .catch(err => {
      next(err);
    });
}

function getById(req, res, next) {
  vendorService
    .getById(req.params.id)
    .then(vendorRates =>
     res.json(vendorRates)        
    )
    .catch(err => {
      next(err);
    });
}

function getByState(req, res, next) {
  vendorService
    .getByState(req.params.state)
    .then(vendorRates =>
     res.json(vendorRates)        
    )
    .catch(err => {
      next(err);
    });
}
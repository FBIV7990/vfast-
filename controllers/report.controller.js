const express = require("express");
const router = express.Router();
const reportService = require("../services/report.service");

// routes

router.post("/add", add);
router.post("/update", update);
router.get("/:id", getById);
router.post("/delete", remove);
router.get("/", getAll);
module.exports = router;

function add(req, res, next) {
  reportService
    .add(req)
    .then(report =>
     res.json(report)        
    )
    .catch(err => {
      next(err);
    });
}

function update(req, res, next) {
  reportService
    .update(req)
    .then(report =>
     res.json(report)        
    )
    .catch(err => {
      next(err);
    });
}



function getAll(req, res, next) {
  reportService
    .getAll()
    .then(reports =>
     res.json(reports)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////GET VERIFICATION BY ID///////////////////
function getById(req, res, next) {
  reportService
    .getById(req.params.id)
    .then(reports =>
     res.json(reports)        
    )
    .catch(err => {
      next(err);
    });
}

function remove(req, res, next) {
  reportService
    .remove(req)
    .then(reports =>
     res.json(reports)        
    )
    .catch(err => {
      next(err);
    });
}

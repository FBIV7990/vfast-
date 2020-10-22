const express = require("express");
const router = express.Router();
const leadService = require("../services/lead.service");

// routes
router.post("/add", add);
router.post("/addMany", addMany);
router.post("/updateMany", updateMany);
router.post("/update", update);
router.post("/delete", remove);
router.get("/", getAll);
router.get("/:id", getById);
module.exports = router;

function add(req, res, next) {
  leadService
    .add(req)
    .then(lead =>
     res.json(lead)        
    )
    .catch(err => {
      next(err);
    });
}
function addMany(req, res, next) {
  leadService
    .addMany(req)
    .then(lead =>
     res.json(lead)        
    )
    .catch(err => {
      next(err);
    });
}

function updateMany(req, res, next) {
  leadService
    .updateMany(req)
    .then(lead =>
     res.json(lead)        
    )
    .catch(err => {
      next(err);
    });
}
function update(req, res, next) {
  leadService
    .update(req)
    .then(lead =>
     res.json(lead)        
    )
    .catch(err => {
      next(err);
    });
}



function getAll(req, res, next) {
  leadService
    .getAll()
    .then(leads =>
     res.json(leads)        
    )
    .catch(err => {
      next(err);
    });
}

function getById(req, res, next) {
  leadService
    .getById(req.params.id)
    .then(leads =>
     res.json(leads)        
    )
    .catch(err => {
      next(err);
    });
}


function remove(req, res, next) {
  leadService
    .remove(req)
    .then(lead =>
     res.json(lead)        
    )
    .catch(err => {
      next(err);
    });
}

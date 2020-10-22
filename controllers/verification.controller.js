const express = require("express");
const router = express.Router();
const verificationService = require("../services/verification.service");
const authorize=require("../_helpers/authorize");
const Roles=require("../_helpers/role");



// routes

router.post("/add", add);
router.post("/update", update);
router.post("/delete", remove);
router.post("/initiateByLink", initiateByLink);
router.get("/:id", getById);

router.get("/", getAll);
module.exports = router;

function add(req, res, next) {
  verificationService
    .add(req)
    .then(verification =>
     res.json(verification)        
    )
    .catch(err => {
      next(err);
    });
}

function update(req, res, next) {
  // verificationService
  //   .update(req)
  //   .then(verification =>
  //    res.json(verification)        
  //   )
  //   .catch(err => {
  //     next(err);
  //   });
}



function getAll(req, res, next) {
  verificationService
    .getAll()
    .then(verifications =>
     res.json(verifications)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////GET VERIFICATION BY ID///////////////////
function getById(req, res, next) {
  verificationService
    .getById(req.params.id)
    .then(verification =>
     res.json(verification)        
    )
    .catch(err => {
      next(err);
    });
}

function initiateByLink(req, res, next) {
  verificationService
    .initVerification(req)
    .then(verification =>
     res.json(verification)        
    )
    .catch(err => {
      next(err);
    });
}

function remove(req, res, next) {
  verificationService
    .remove(req)
    .then(verifications =>
     res.json(verifications)        
    )
    .catch(err => {
      next(err);
    });
}

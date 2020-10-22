const express = require("express");
const router = express.Router();
const checkInfoService = require("../services/checkInfo.service");
const authorize=require("../_helpers/authorize");
const Roles=require("../_helpers/role");

// routes

router.post("/add", addInfo);
router.get("/", getAll);
module.exports = router;

function addInfo(req, res, next) {
  checkInfoService
    .add(req)
    .then(chkInfo =>
     res.json(chkInfo)        
    )
    .catch(err => {
      next(err);
    });
}


function getAll(req, res, next) {
  checkInfoService
    .getAll()
    .then(checkInfo =>
     res.json(checkInfo)        
    )
    .catch(err => {
      next(err);
    });
}

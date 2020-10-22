const express = require("express");
const router = express.Router();
const employeeService = require("../services/employee.service");
const authorize=require("../_helpers/authorize");
const Roles=require("../_helpers/role");

// routes

router.post("/add", add);
router.post("/addMany", addMany);
router.post("/uploadDocs", uploadDocs);
router.post("/update", update);
router.get("/:id", getById);
//router.get("/", getAll);
router.get("/getByEmployerId/:id",getByEmployerId)

module.exports = router;

//////////////////REGISTER EMPLOYEE///////////////////
function add(req, res, next) {
  employeeService
    .add(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////REGISTER EMPLOYEE///////////////////
function addMany(req, res, next) {
  employeeService
    .addMany(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////UPDATE EMPLOYEE///////////////////
function update(req, res, next) {
  employeeService
    .update(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////UPLOAD DOCS///////////////////
function uploadDocs(req, res, next) {
  employeeService
    .uploadDocs(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}


//////////////////GET ALL EMPLOYEES///////////////////
function getAll(req, res, next) {
  
  employeeService
    .getAll()
    .then(employees =>
     res.json(employees)        
    )
    .catch(err => {
      next(err);
    });
}


//////////////////GET ALL EMPLOYEES///////////////////
function getById(req, res, next) {
  employeeService
    .getById(req.params.id)
    .then(employees =>
     res.json(employees)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////GET ALL EMPLOYEES///////////////////
function getByEmployerId(req, res, next) {
  employeeService
    .getByEmployerId(req.params.id)
    .then(employees =>
     res.json(employees)        
    )
    .catch(err => {
      next(err);
    });
}
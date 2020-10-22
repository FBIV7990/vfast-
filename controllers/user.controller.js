const express = require("express");
const router = express.Router();
const userService = require("../services/user.service");
const authorize=require("../_helpers/authorize");
const Roles=require("../_helpers/role");

// routes

router.post("/register", register);
router.post("/createVerifier",authorize(Roles.ADMIN), createVerifier);
router.post("/editVerifier",authorize(Roles.ADMIN), editVerifier);
router.post("/createVendor",authorize([Roles.ADMIN,Roles.VERIFIER]), createVendor);
router.post("/editVendor",authorize([Roles.ADMIN,Roles.VERIFIER]), editVendor);
router.post("/createEmployer",authorize([Roles.ADMIN,Roles.VERIFIER]), createEmployer);
router.post('/login',login);
router.post("/setProfile", completeProfile);
router.post("/changeStatus",authorize([Roles.ADMIN,Roles.VERIFIER]), changeStatus);
// router.post("/changeRole",authorize([Roles.ADMIN,Roles.VERIFIER]), changeRole);
router.post("/changeRole", changeRole);
router.post("/active",authorize([Roles.ADMIN,Roles.VERIFIER]), activate);
router.post('/uploadImages',uploadImages);
router.get("/:id",authorize(), getById);
router.post("/delete",authorize([Roles.ADMIN,Roles.VERIFIER]), deleteUser);
//router.post("/delete", deleteUser);
router.get("/",authorize([Roles.ADMIN,Roles.VERIFIER]), getAll);
// router.post("/changePassword",authorize(Roles.ADMIN), changePassword);
router.post("/changePassword", changePassword);
router.post('/uploadImages',uploadImages);
//router.get("/:id", getById);
router.get("/", getAll);
module.exports = router;



//////////////////Login USER///////////////////
function login(req, res, next) {
  userService
    .authenticate(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////REGISTER USER///////////////////
function register(req, res, next) {
  console.log(req.body)
  userService
    .create(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////CREATE VERIFIER///////////////////
function createVerifier(req, res, next) {
  userService
    .createVerifier(req,res)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

function editVerifier(req, res, next) {
  userService
    .editVerifier(req,res)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////CREATE VENDOR///////////////////
function createVendor(req, res, next) {
  userService
    .createVendor(req,res)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

function editVendor(req, res, next) {
  userService
    .editVendor(req,res)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}
//////////////////CREATE EMPLOYER///////////////////
function createEmployer(req, res, next) {
  userService
    .createEmployer(req,res)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////COMPLETE USER PROFILE///////////////////
function completeProfile(req, res, next) {
  userService
    .completeProfile(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////CHANGE USER STATUS///////////////////
function changeStatus(req, res, next) {
  userService
    .changeStatus(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////CHANGE PASSWORD///////////////////
function changePassword(req, res, next) {
  userService
    .changePassword(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////CHANGE USER ROLE///////////////////
function changeRole(req, res, next) {
  userService
    .changeRole(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////ACTIVATE USER///////////////////
function activate(req, res, next) {
  userService
    .activate(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}


function uploadImages(req, res, next) {
 
  userService
    .updateImages(req)
    .then(msg =>
      res.json(msg)
    )
    .catch(err => {
      next(err);
    });
}

function getById(req,res,next) {
 
  const currentUser = req.user;
  //const id = parseInt(req.params.id);
  const id = req.params.id;

  // only allow admins to access other user records

  if (id !== currentUser.sub && (currentUser.role !==  'ADMIN'))
  {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  

  userService.getById(req.params.id)
    .then(user => res.json(
      user
      ))
     .catch(err => {
      console.log(err);
      next(err)});
}

function getAll(req,res,next) {

  userService.getAll(req.query)
    .then(users => res.json(
      users
      ))
     .catch(err => next(err));
}

//////////////////Delete USER///////////////////
function deleteUser(req, res, next) {
  userService
    ._delete(req)
    .then(user =>
     res.json(user)        
    )
    .catch(err => {
      next(err);
    });
}

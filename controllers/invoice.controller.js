const express = require("express");
const router = express.Router();
const invoiceService = require("../services/invoice.service");

// routes

router.post("/add", add);
router.post("/update", update);
router.get("/:id", getById);
router.post("/delete", remove);
router.get("/", getAll);
module.exports = router;

function add(req, res, next) {
  invoiceService
    .add(req)
    .then(invoice =>
     res.json(invoice)        
    )
    .catch(err => {
      next(err);
    });
}

function update(req, res, next) {
  invoiceService
    .update(req)
    .then(invoice =>
     res.json(invoice)        
    )
    .catch(err => {
      next(err);
    });
}



function getAll(req, res, next) {
  invoiceService
    .getAll()
    .then(invoices =>
     res.json(invoices)        
    )
    .catch(err => {
      next(err);
    });
}

//////////////////GET VERIFICATION BY ID///////////////////
function getById(req, res, next) {
  invoiceService
    .getById(req.params.id)
    .then(invoices =>
     res.json(invoices)        
    )
    .catch(err => {
      next(err);
    });
}

function remove(req, res, next) {
  invoiceService
    .remove(req)
    .then(invoices =>
     res.json(invoices)        
    )
    .catch(err => {
      next(err);
    });
}

var router = require('express').Router();
const jwt= require("../_helpers/jwt");

// split up route handling

//router.use(jwt());


router.use("/users", require("./user.controller"));
router.use("/employees", require("./employee.controller"));
router.use("/vendors", require("./vendor.controller"));
router.use("/employerRates", require("./employerRates.controller"));
router.use("/checkInfo", require("./checkInfo.controller"));
router.use("/verifications",require("./verification.controller"));
router.use("/leads",require("./lead.controller"));
router.use("/reports",require("./report.controller"));
router.use("/invoices",require("./invoice.controller"));
router.use("/", (req,res)=>{res.json({success:true,message: 'Hi, Welcome to VFAST'})});

// etc.

module.exports = router;
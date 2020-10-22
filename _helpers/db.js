const config = require("../config/database.config");
const mongoose = require("mongoose");

mongoose.connect( config.url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

module.exports = {
  Employee: require("../models/employee.model"),
  User: require("../models/user.model"),
  VendorRates:require("../models/vendor_rates.model"),
  EmployerRates:require("../models/employer_rates.model"),
  Verification: require("../models/verification.model"),
  CheckInfo:require("../models/checkInfo.model"),
  Lead:require("../models/lead.model"),
  Control:require("../models/control.model"),
  Report:require("../models/report.model"),
  Invoice:require("../models/invoice.model")
};

const mongoose = require("mongoose");
const leadStatus=require("../_helpers/LeadStatus")
const leadStatusArr=Object.keys(leadStatus);
const Schema=mongoose.Schema;


const LeadSchema = mongoose.Schema({
  
  employer_id: { type: Schema.Types.ObjectId, ref: "User" },
  employee_id: { type: Schema.Types.ObjectId, ref: "Employee" },

  physical_check: { type: Boolean, default: false},  
  physical_check_status:{type:String, enum:leadStatusArr},

  education_check: { type: Boolean, default: false },
  education_check_status:{type:String, enum:leadStatusArr},

  pre_employment_check: {  type:Boolean,default:false },
  pre_employment_status:{type:String, enum:leadStatusArr},

  cibil_check: { type:Boolean,default:false},
  cibil_check_status:{type:String, enum:leadStatusArr},

  judicial_check: {type:Boolean,default:false},
  judicial_check_status:{type:String, enum:leadStatusArr},

  drug_test: {type:Boolean,default:false},
  drug_test_status:{type:String, enum:leadStatusArr},

  created_on: { type: Date, default: Date.now() },
  deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model("Lead", LeadSchema);

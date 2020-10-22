const mongoose = require("mongoose");
var crypto = require("crypto");
var uniqueValidator = require("mongoose-unique-validator");
const role=require("../_helpers/role")
const status=require("../_helpers/UserStatus")
const Schema=mongoose.Schema;

const EmployeeSchema = mongoose.Schema(
  {
    employer_id:{ type:Schema.Types.ObjectId, ref: 'User' }, 
    employee_id:{ type:String }, 
    unique_id:{type:String},
    name:{type:String},
    email:{type:String},
    mobile:{type:String},
    state:{type:String},
    contact1:{type:String},
    contact2:{type:String},
    address:{type:String},
    employee_code:{type:String},
    company:{type:String},
    company_address:{type:String},
    designation:{type:String},
    working_from:{type:String},
    working_to:{type:String},
    contact_person:{type:String},
    university:{type:String},
    institute:{type:String},
    course:{type:String},
    year_of_passing:{type:String},
    college_address:{type:String},
    pan_number:{type:String},
    aadhar_number:{type:String},
    voter_id:{type:String},
    height:{type:String},
    identification_mark:{type:String},
    blood_group:{type:String}  ,
    documents:[{ 
      name:{type:String},
      type:{type:String},
      filepath:{type:String}
  }],
  deleted: { type: Boolean, default: false }
  }
);

module.exports = mongoose.model("Employee", EmployeeSchema);

const mongoose = require("mongoose");
const Schema=mongoose.Schema;


const ReportSchema = mongoose.Schema({

  report_id:{type:String,unique:true},  
  verification_id: { type: Schema.Types.ObjectId, ref: "Verification" },
  order_id:{type:String},
education_check:{type:Boolean,default:false},

education_check_info:{
  employee_name:{type:String},
  gender:{type:String},
  dob:{type:Date},
  birthplace:{type:String},
  mobile:{type:String},
  email:{type:String},
  fathername:{type:String},
  mothername:{type:String},
  language:{type:String},
  aadhar_number:{type:String},
  introduced_by:{type:String},
  height:{type:String},
  identity_mark:{type:String},

  university:{type:String},
  course:{type:String},
  institute_address:{type:String},
  year_of_passing:{type:String},
  course_duration:{type:String},
  person_met_at_home:{type:String},
  person_aadhar:{type:String}
},

employment_check:{type:Boolean,default:false},
employment_check_info:{

  employee_name:{type:String},
  gender:{type:String},
  dob:{type:Date},
  birthplace:{type:String},
  mobile:{type:String},
  email:{type:String},
  fathername:{type:String},
  mothername:{type:String},
  language:{type:String},
  aadhar_number:{type:String},
  introduced_by:{type:String},
  height:{type:String},
  identity_mark:{type:String},
 employer_name:{type:String},
 designation:{type:String},
 address:{type:String},
 date_since_employed:{type:Date},
 tenure:{type:String},
 person_met_in_org:{type:String},
 person_designation:{type:String}
},

address_check:{type:Boolean,default:false},
address_check_info:{

  reference_num:{type:String},
  employee_name:{type:String},
  address:{type:String},
  contact_person:{type:String},
  relation:{type:String},
  contact_info:{type:String},
  residental_status:{type:String},
  period_of_stay:{type:String},
  family_members:{type:String},
  marital_status:{type:String},
  age:{type:Number},
  exterior_desc_of_house:{type:String},
  exterior_desc_of_appt:{type:String},
  landmark:{type:String},
  comments:{type:String},
  candidate_sign:{type:String},
  relationship_if_not_candidate:{type:String}
 },
 
 representative_name:{type:String},
 representative_sign:{type:String},
 date_of_initiation:{type:Date},
 date_of_physical_verification:{type:Date},
 date_of_closure:{type:Date},
 latitude:{type:String},
 longitude:{type:String},
  created_on: { type: Date, default: Date.now() },
  deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model("Report", ReportSchema);

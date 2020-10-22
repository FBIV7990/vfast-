const mongoose = require("mongoose");
const Schema=mongoose.Schema;
 const verification_statuses=require('../_helpers/VerificationStatus')
const VerificationSchema = mongoose.Schema(
  {   
    verifier_id: { type:Schema.Types.ObjectId, ref: 'User'}, 
    lead_id: { type:Schema.Types.ObjectId, ref: 'Lead'}, 
    vendor_id:{ type:Schema.Types.ObjectId, ref: 'Vendor' },    
    report_id:{ type:Schema.Types.ObjectId, ref:'Report' }, 
    
    vendor_cost:{type:Number},
    employer_cost:{type:Number},
    checkname:{type:String},   
    estimated_time:{type:Number},
    actual_time:{type:Number},
    status:{type:String,enum: Object.keys(verification_statuses)},
    remark:{type:String}, 
    security_pin:{type:String}, 
    link:{type:String},
    created_on:{type:Date,default:Date.now()},
    deleted:{type:Boolean,default:false}
  }
);

module.exports = mongoose.model("Verification", VerificationSchema);

const mongoose = require("mongoose");
const Schema=mongoose.Schema;
 const invoice_status=require('../_helpers/BillStatus')
const InvoiceSchema = mongoose.Schema(
  {   
    invoice_num: { type:String}, 
    employer_id: { type:Schema.Types.ObjectId, ref: 'User'},  
    date:{type:Date,default:new Date()},
    services:[
      {
        verification_id:{ type:Schema.Types.ObjectId, ref: 'Verification' },
        service:{type:String},
        hsn_code:{type:String,default:""},
        quantity:{type:Number,default:1},
        price:{type:String},
        sgst:{type:String},
        igst:{type:String},
        cgst:{type:String},
        amount:{type:String}
      }
    ],
    total_price:{type:Number},
    discount:{type:String},   
    total_tax:{type:Number},
    total_amount:{type:Number},
    status:{type:String,enum: Object.keys(invoice_status)},
    amount_in_words:{type:String},    
    created_on:{type:Date,default:Date.now()},
    deleted:{type:Boolean,default:false}
  }
);

module.exports = mongoose.model("Invoice", InvoiceSchema);

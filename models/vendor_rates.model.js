const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var crypto = require("crypto");
var uniqueValidator = require("mongoose-unique-validator");


const VendorRatesSchema = mongoose.Schema({
  vendor: { type: Schema.Types.ObjectId, ref: "User" },
  rate_list: [
    {
      state: { type: String },
      physical_check: {
        rural: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        urban: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        turn_around_time: {type:Number,default:1},
        active:{type:Boolean,default:false}        
      },
      education_check: {
        rural: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        urban: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        turn_around_time: {type:Number,default:1},
        active:{type:Boolean,default:false}        
      },
      pre_employment_check: {
        rural: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        urban: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        turn_around_time: {type:Number,default:1},
        active:{type:Boolean,default:false} 
      },
      cibil_check: {
        rural: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        urban: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        turn_around_time: {type:Number,default:1},
        active:{type:Boolean,default:false}  
      },
      judicial_check: {
        rural: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        urban: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        turn_around_time: {type:Number,default:1},
        active:{type:Boolean,default:false} 
      },
      drug_test: {
        rural: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        urban: { min: {type:Number,default:1}, max: {type:Number,default:1} },
        turn_around_time: {type:Number,default:1},
        active:{type:Boolean,default:false} 
      }
    }
  ],
  deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model("VendorRates", VendorRatesSchema);

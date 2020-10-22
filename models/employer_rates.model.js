const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const EmployerRatesSchema = mongoose.Schema({
  employer: { type: Schema.Types.ObjectId, ref: "User" },
  pan_india_rates:{ 
    physical_check: {
    pricemin: {type:Number,default:1}, pricemax: {type:Number,default:1},
    turn_around_time: {type:Number,default:1}     
  },
  education_check: {
    pricemin: {type:Number,default:1}, pricemax: {type:Number,default:1},
    turn_around_time: {type:Number,default:1}      
  },
  pre_employment_check: {
    pricemin: {type:Number,default:1}, pricemax: {type:Number,default:1},
    turn_around_time: {type:Number,default:1}     
  },
  cibil_check: {
    pricemin: {type:Number,default:1}, pricemax: {type:Number,default:1},
    turn_around_time: {type:Number,default:1}     
  },
  judicial_check: {
    pricemin: {type:Number,default:1}, pricemax: {type:Number,default:1},
    turn_around_time: {type:Number,default:1}     
  },
  drug_test: {
    pricemin: {type:Number,default:1}, pricemax: {type:Number,default:1},
    turn_around_time: {type:Number,default:1}     
  }
},
  state_rates: [
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

module.exports = mongoose.model("EmployerRates", EmployerRatesSchema);

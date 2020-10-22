const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const CheckInfoSchema = mongoose.Schema(
  { 
    basic_info:[
      {
        key:String,
        name:String
      }
    ]
    ,
     physical_check:[
      {
        key:String,
        name:String
      }
    ]
    ,
     education_check:[ 
       {
        key:String,
        name:String
      }
    ]
      ,
      pre_employment_check:[
        { 
        key:String,
        name:String
      }
    ],
      cibil_check:[
        {  
        key:String,
        name:String    
      }],
      judicial_check:[{       
        key:String,
        name:String       
      }],
      drug_test:[{         
        key:String,
        name:String         
      }]
  }
);

module.exports = mongoose.model("CheckInfo", CheckInfoSchema);

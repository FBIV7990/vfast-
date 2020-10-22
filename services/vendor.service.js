const config = require("config.json");
const db = require("_helpers/db");
const Joi = require("@hapi/joi");

const VendorRates=db.VendorRates;

module.exports = {
  add_rates,
  update_rates,
   getById,
   getAll,
   getByState
  };

function add_rates(req) {
  const vendorRates = req.body;
  //console.log(JSON.stringify(req.body));
  const schema = Joi.object().keys({
    vendor_id: Joi.string()
      .min(24)
      .max(24)
      .required(),
    rate_list: Joi.array()
      .items({
        state: Joi.string(),
        physical_check: {
          rural: {
            min: Joi.number(),
            max: Joi.number()
          },
          urban: {
            min: Joi.number(),
            max: Joi.number()
          },
          turn_around_time: Joi.number(),
          active: Joi.boolean()
        },
        education_check: {
          rural: {
            min: Joi.number(),
            max: Joi.number()
          },
          urban: {
            min: Joi.number(),
            max: Joi.number()
          },
          turn_around_time: Joi.number(),
          active: Joi.boolean()
        },
        pre_employment_check: {
          rural: {
            min: Joi.number(),
            max: Joi.number()
          },
          urban: {
            min: Joi.number(),
            max: Joi.number()
          },
          turn_around_time: Joi.number(),
          active: Joi.boolean()
        },
        cibil_check: {
          rural: {
            min: Joi.number(),
            max: Joi.number()
          },
          urban: {
            min: Joi.number(),
            max: Joi.number()
          },
          turn_around_time: Joi.number(),
          active: Joi.boolean()
        },
        judicial_check: {
          rural: {
            min: Joi.number(),
            max: Joi.number()
          },
          urban: {
            min: Joi.number(),
            max: Joi.number()
          },
          turn_around_time: Joi.number(),
          active: Joi.boolean()
        },

        drug_test: {
          rural: {
            min: Joi.number(),
            max: Joi.number()
          },
          urban: {
            min: Joi.number(),
            max: Joi.number()
          },
          turn_around_time: Joi.number(),
          active: Joi.boolean()
        }
      })
      .required()
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(vendorRates);
    if (error) {
      reject(error);
      return;
    }

    const { vendor_id, rate_list } = vendorRates;

    VendorRates.findOne({ vendor: vendor_id })
      .then(ven_rate => {
        console.log(ven_rate)
        if (ven_rate) {
          reject({ success: false, message: "Vendor already exists!" });
        } else {
          const vendorRate = new VendorRates();
          vendorRate.vendor = vendor_id;
          vendorRate.rate_list = rate_list;
          vendorRate
            .save()
            .then(emp => {
              resolve({ success: true, message: "Vendor rates saved!" });
            })
            .catch(err => {
              console.log(err);
              reject({
                success: false,
                message: "Error in saving Vendor rates"
              });
            });
        }
      })
      .catch(err => {
        console.log(err);
        reject({ success: false, message: "Error in saving Vendor rates" });
      });
  });
}

function update_rates(req) {
  const vendorRates = req.body;
  
  const schema = Joi.object().keys({
    vendor_id: Joi.string()
      .min(24)
      .max(24)
      .required(),
    rate_list: Joi.array()
      .items({
        state: Joi.string(),
        physical_check: {
          rural: {
            min: Joi.number(),
            max: Joi.number()
          },
          urban: {
            min: Joi.number(),
            max: Joi.number()
          },
          turn_around_time: Joi.number(),
          active: Joi.boolean()
        },
        education_check: {        
            rural: {
              min: Joi.number(),
              max: Joi.number()
            },
            urban: {
              min: Joi.number(),
              max: Joi.number()
            },
            turn_around_time: Joi.number()          
        },
        pre_employment_check: {
       
            rural: {
              min: Joi.number(),
              max: Joi.number()
            },
             urban: {
              min: Joi.number(),
              max: Joi.number()
            },
            turn_around_time: Joi.number()
          
        },
        cibil_check: {
         
            rural: {
              min: Joi.number(),
              max: Joi.number()
            },
            urban: {
             min: Joi.number(),
             max: Joi.number()
           },
           turn_around_time: Joi.number()
         
        },
        judicial_check: {
         
            rural: {
              min: Joi.number(),
              max: Joi.number()
            },
            urban: {
             min: Joi.number(),
             max: Joi.number()
            },
          
           turn_around_time: Joi.number()
          },
        
        drug_test: {
         
            rural: {
              min: Joi.number(),
              max: Joi.number()
            },
            urban: {
             min: Joi.number(),
             max: Joi.number()
           },
           turn_around_time: Joi.number()
          
        }
      })
      .required()
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(vendorRates);
    if (error) {
      reject(error);
      return;
    }

    const { vendor_id,rate_list } = vendorRates;
    
    VendorRates.findOne({vendor:vendor_id}).then(vend=>{
      if(!vend)
      {
        resolve({success:false,message:'Vendor not found'})
      }
    vend.rate_list=rate_list;
    vend.save().then(ven=>{
      resolve({success:true,message:'Vendor rates updated'})
    }).catch(err=>{
      reject({success:false,message:'Error in updating Vendor rates '})
    })
    }).catch(err=>{
      console.log(err);
      resolve({success:false,message:err})
    })
  });
}

function getById(id) {
  return new Promise((resolve, reject) => {
    const schema = Joi.object().keys({
      id: Joi.string()
        .min(24)
        .max(24)
    });

    const { error, value } = schema.validate({ id });
    if (error) {
      reject(error);
      return;
    }

    VendorRates.findOne({vendor:id}).populate('vendor','profile')
      .then(venrates => {
        if (!venrates) resolve({ success: false, message: "Vendor rates not found" });
        else {    
        

          resolve({ success: true, vendor_rate: venrates });

        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getByState(state) {
  return new Promise((resolve, reject) => {
    const schema = Joi.object().keys({
      state: Joi.string()
    });

    const { error, value } = schema.validate({ state });
    if (error) {
      reject(error);
      return;
    }

    VendorRates.find({},{rate_list:{$elemMatch:{state:state}}}).populate('vendor','profile')
      .then(venrates => {
        if (!venrates) resolve({ success: false, message: "Vendor rates not found" });
        else {  
         
         
          const vendors=venrates.map(ven=>{     
           if(ven.rate_list.length>0)
           return {
            name:ven.vendor.profile.first_name+ven.vendor.profile.last_name,
            mobile:ven.vendor.mobile||"",
            email:ven.vendor.email||"",
            rates:ven.rate_list[0],
            id:ven._id
          }        
            }).filter(item=>item!=null)
     console.log(vendors)
          resolve({ success: true, vendors: vendors||[] });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    VendorRates.find({ deleted: false }).populate('vendor','profile')
      .then(vendorRates => {
        if (!vendorRates)
         resolve({ success: false, message: "No Vendors found" });
        else
         resolve({ success: true, 
          vendors: "vendorRates" });
      })
      .catch(err => {
        reject(err);
      });
  });
}
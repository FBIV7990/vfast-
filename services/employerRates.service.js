const config = require("config.json");
const db = require("_helpers/db");
const Joi = require("@hapi/joi");

const EmployerRates=db.EmployerRates;

module.exports = {
   add_rates,
   update_rates,
   getById,
   getAll
  };

function add_rates(req) {

  const schema = Joi.object().keys({
    employer_id: Joi.string()
      .min(24)
      .max(24)
      .required(),
    pan_india_rates:Joi.object().keys({
      physical_check:{
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      },
      education_check:{
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      },
      pre_employment_check:{
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      },
      cibil_check:{
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      },
      judicial_check:{
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      }      ,
      drug_test: {
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      }
    }),
    state_rates: Joi.array()
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

  const ratesParam = req.body;
  console.log(req.body);

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(ratesParam);
    if (error) {
      reject(error);
      return;
    }

    const { employer_id,pan_india_rates, state_rates } = ratesParam;

    EmployerRates.findOne({ employer: employer_id })
      .then(emp_rates => {    
        console.log(emp_rates);  
        if(emp_rates) {
          reject({ success: false, message: "Employer already exists!" });
        } 
        else {
          const employerRates = new EmployerRates();
          employerRates.employer = employer_id;
          employerRates.pan_india_rates = pan_india_rates;
          employerRates.state_rates=state_rates;       
          employerRates
            .save()
            .then(emp => {
              resolve({ success: true, message: "Employer rates saved!" });
            })
            .catch(err => {
              console.log(err);
              reject({
                success: false,
                message: "Error in saving Employer rates"
              });
            });
        }
      })
      .catch(err => {
        console.log(err);
        reject({ success: false, message: "Error in saving Employer rates" });
      });
  });
}

function update_rates(req) {
  const ratesParam = req.body;
  
  const schema = Joi.object().keys({
    employer_id: Joi.string()
      .min(24)
      .max(24)
      .required(),
    pan_india_rates:Joi.object().keys({
      physical_check:{
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      },
      education_check:{
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      },
      pre_employment_check:{
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      },
      cibil_check:{
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      },
      judicial_check:{
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      }      ,
      drug_test: {
        pricemin:Joi.number(),
        pricemax:Joi.number(),
        turn_around_time:Joi.number()
      }
    }),
    state_rates: Joi.array()
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
    const { error, value } = schema.validate(ratesParam);
    if (error) {
      reject(error);
      return;
    }

    const { employer_id,pan_india_rates, state_rates } = ratesParam;
    
    EmployerRates.findOne({ employer: employer_id })
    .then(employerRates => {    
      if (!employerRates) {
        reject({ success: false, message: "Employer not found!" });
      } else
       {       
        employerRates.pan_india_rates = pan_india_rates;
        employerRates.state_rates=state_rates;       
        employerRates
          .save()
          .then(emp => {
            resolve({ success: true, message: "Employer rates updated!" });
          })
          .catch(err => {
            console.log(err);
            reject({
              success: false,
              message: "Error in updated Employer rates"
            });
          });
      }
    })
    .catch(err => {
      console.log(err);
      reject({ success: false, message: "Error in updated Employer rates" });
    });
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

    EmployerRates.findOne({employer:id})
      .then(emprates => {
        console.log(emprates);
        if (!emprates) 
        resolve({ success: false, message: "Employer rates not found" });
        else { 
          resolve({ success: true, rates: emprates });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    EmployerRates.find({ deleted: false }).populate('employer','profile')
      .then(empRates => {
        if (!empRates)
         resolve({ success: false, message: "No Employers found" });
        else resolve({ success: true, employers: empRates });
      })
      .catch(err => {
        reject(err);
      });
  });
}
const config = require("config.json");
const db = require("_helpers/db");
const Joi = require("@hapi/joi");

const CheckInfo=db.CheckInfo;

module.exports = {
  add,
  getAll
};

function add(req) {
  const checkParam = req.body;
  console.log(req.body)
  const schema = Joi.object().keys({
      checkname:Joi.string().valid('BASIC_INFO','PHYSICAL_CHECK','EDUCATION_CHECK','PRE_EMPLOYMENT_CHECK','CIBIL_CHECK','JUDICIAL_CHECK','DRUG_TEST').required(),
      fields:Joi.array().items({
          key:Joi.string(),
         name:Joi.string()
      }).required()
  });


  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(checkParam);
    if (error) {
      reject(error);
      return;
    }
    const { checkname ,fields} = checkParam;  
    
    CheckInfo.findOne().then(checkInfo=>{
    const chkname=checkname.toLowerCase();
    if(!checkInfo)
    checkInfo=new CheckInfo();
    checkInfo[chkname]=fields;
    checkInfo.save().then(check=>{
                resolve({success:true,message:'Check info saved!'})
            }).catch(err=>{
                console.log(err)
        reject({success:false,message:'Error in saving Check info'})
            })
    }).catch(err=>{
        resolve({success:false,error:err})
    })
  });
}

function getAll(){
    return new Promise(async (resolve, reject) => {
        CheckInfo.findOne()
          .then(chkInfo => {
            if (!chkInfo) 
            resolve({ success: false, message: "Check Info not found" });
            else resolve({ success: true, checks:chkInfo });
          })
          .catch(err => {
            reject(err);
          });
      });
}


const config = require("config.json");
const db = require("_helpers/db");
const Joi = require("@hapi/joi");
const randomstring = require("randomstring");
const cryptoService=require('./crypto.service')
const status=require('../_helpers/VerificationStatus')
const emailService=require('../services/email.service')

const Verification=db.Verification;
const User=db.User;

module.exports = {
  add, 
  getAll, 
  remove,
  getById,
  initVerification,
  getByVendorId
  };

function add(req) {
  const verificationParams = req.body;
  const schema = Joi.object().keys({
    lead_id: Joi.string()
    .min(24)
    .max(24)
    .required(),   
    verifier_id: Joi.string()
        .min(24)
        .max(24)
        .required(),
    vendor_id:Joi.string().min(24).max(24).required(),        
    vendor_cost:Joi.number().required(),
    employer_cost:Joi.number().required(),
    checkname:Joi.string().required(),
    estimated_time:Joi.number(),    
    remark:Joi.string()      
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(verificationParams);
    if (error) {
      reject(error);
      return;
    }

    const { lead_id, verifier_id,vendor_id,vendor_cost,employer_cost,checkname,estimated_time,remark } = verificationParams;

    Verification.findOne({lead_id:lead_id}).then(verification=>{
      if(!verification)
      { 
        verification=new Verification();
        verification.lead_id=lead_id;     
        verification.verifier_id=verifier_id;
        verification.vendor_id=vendor_id;
        verification.vendor_cost=vendor_cost;
        verification.employer_cost=employer_cost;
        verification.checkname=checkname;
        verification.estimated_time=estimated_time;
        verification.remark=remark; 
        verification.security_pin=randomstring.generate({
          length: 6,
          charset: "numeric",
          readable: true
        }),
        verification.link="";
        verification.status=status.NEW;
      }
      else {
        verification.verifier_id=verifier_id;
        verification.vendor_id=vendor_id;
        verification.vendor_cost=vendor_cost;
        verification.employer_cost=employer_cost;
        verification.checkname=checkname;
        verification.estimated_time=estimated_time;
        verification.remark=remark; 
        verification.security_pin=randomstring.generate({
          length: 6,
          charset: "numeric",
          readable: true
        }),
        verification.link="";
        verification.status=status.NEW;      
      
      }

      verification.save().then(verification=>{
        resolve({success:true,message:'Verification saved'});
         const enc=cryptoService.encrypt(verification._id);       
         const link="http://localhost:3000/newverification/"+enc.iv+"."+enc.encryptedData;

emailService.sendVerificationLink("pradeep@mac9.in",link,verification.security_pin);

       

           }).catch(err=>{
        console.log(err);
             resolve({success:false,error:err})
           })
    }).catch(err=>{
      reject(err);
    })

  });
}


function getAll() {
  return new Promise((resolve, reject) => {
    Verification.find({ deleted: false },{security_pin:0,employer_cost:0}).populate('employer_id','profile').populate('employee_id')
      .then(verifications => {
        if (!verifications)
         resolve({ success: false, message: "No verifications found" });
        else resolve({ success: true, verifications: verifications });
      })
      .catch(err => {
        reject(err);
      });
  });
}

function remove(req){
  const verificationParams = req.body;
  const schema = Joi.object().keys({
    verification_id: Joi.string()
    .min(24)
    .max(24)
    .required()
  });
  return new Promise((resolve, reject) => {
    const schema = Joi.object().keys({
      verification_id: Joi.string()
        .min(24)
        .max(24)
    });

    const { error, value } = schema.validate(verificationParams);
    if (error) {
      reject(error);
      return;
    }
    const {verification_id}=verificationParams;
    Verification.findById(verification_id)
      .then(verification => {
        if (!verification) 
        resolve({ success: false, message: "Verification not found" });
        else {   
               verification.deleted=true;
               verification.save().then(verif=>{
                 resolve({success:true,message:'Verification deleted'});
               }).catch(err=>{
                resolve({success:false,message:'Error in deletion'});
               })       
        }
      })
      .catch(err => {
        reject(err);
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
    Verification.findById(id)
      .then(verification => {
        if (!verification) resolve({ success: false, message: "Verification not found" });
        else {        
            resolve({ success: true, verification:verification});
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getByVendorId(id) {
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
    Verification.find({vendor_id:id})
      .then(verifications => {
        if (!verifications) resolve({ success: false, message: "Verifications not found" });
        else {        
            resolve({ success: true, verifications:verifications});
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}


function initVerification(req) {
  return new Promise((resolve, reject) => {
    try{

      console.log(req.body)

      const verificationParams = req.body;
      const schema = Joi.object().keys({
        data: Joi.string().required(),
        pin:Joi.string().required()
      });
      const { error, value } = schema.validate(verificationParams);
        if (error) {
          reject(error);
          return;
        }
     
        const {data,pin}=verificationParams;
      if(data!=""&&data.includes('.'))
       { 
       const id=data.split('.')
       const newdata={
          iv:id[0],
          encryptedData:id[1]
        }     
        //Here the decryppted data will be the verification id
       const decryptedData=cryptoService.decrypt(newdata);     
       
       Verification.findById(decryptedData).then(verification=>{

       if(!verification)
       resolve({success:false,message:'Invalid data'});

        if(verification.security_pin==pin)
        {
         User.findById(verification.vendor_id).then(vendor=>{
           if(!vendor)
              {
                resolve({success:false,message:'Vendor not found'});         
                return;  
              }

              resolve({success:true,
                message:'Security code verified',
                id: vendor.id,
                role:vendor.account.role,
                token: vendor.account.token
              });
         })
        }
        else resolve({success:false,message:'Invalid data'});
       }).catch(err=>{
         reject(err)
       })



      }
    }catch(err)
    {console.log(err)
      reject(err);
    }

   
    // Verification.findById(id)
    //   .then(verification => {
    //     if (!verification) resolve({ success: false, message: "Verification not found" });
    //     else {        
    //         resolve({ success: true, verification:verification});
    //     }
    //   })
    //   .catch(err => {
    //     reject(err);
    //   });
  });
}
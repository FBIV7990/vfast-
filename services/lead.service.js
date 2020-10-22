const config = require("config.json");
const db = require("_helpers/db");
const Joi = require("@hapi/joi");
const leadStatus=require("../_helpers/LeadStatus")

const Lead=db.Lead;

module.exports = {
  add,
  addMany,
  update,
  updateMany,
   getById,
   getAll,
  remove};

function add(req) {
  const leadParams = req.body;
  const schema = Joi.object().keys({
    employer_id: Joi.string()
      .min(24)
      .max(24)
      .required(),
     employee_id: Joi.string()
      .min(24)
      .max(24)
      .required(),
      physical_check:Joi.boolean().required(),
      education_check:Joi.boolean().required(),
      pre_employment_check:Joi.boolean().required(),
      cibil_check:Joi.boolean().required(),
      judicial_check:Joi.boolean().required(),
      drug_test:Joi.boolean().required()
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(leadParams);
    if (error) {
      reject(error);
      return;
    }

    const { employer_id,employee_id,physical_check,education_check,pre_employment_check,cibil_check,judicial_check,drug_test } = leadParams;

    Lead.findOne({ employer_id:employer_id,employee_id:employee_id })
      .then(lead => {
        console.log(lead)
        if (lead) {
          reject({ success: false, message: "Lead already exists!" });
        } else {
          const lead = new Lead();
         lead.employer_id=employer_id;
         lead.employee_id=employee_id;
       
         if(physical_check)
       {  
         lead.physical_check=physical_check;         
         lead.physical_check_status=leadStatus.NEW;
        }

         if(education_check)
        {
           lead.education_check=education_check;
          lead.education_check_status=leadStatus.NEW;
        }

       if(pre_employment_check)
        {  
         lead.pre_employment_check=pre_employment_check;
         lead.pre_employment_check_status=leadStatus.NEW;
        }
        if(cibil_check)
        {
         lead.cibil_check=cibil_check;
         lead.cibil_check_status=leadStatus.NEW;
        }
        if(judicial_check)
        { 
          lead.judicial_check=judicial_check;
          lead.judicial_check_status=leadStatus.NEW;
        }
        if(drug_test)
        { 
          lead.drug_test=drug_test;
          lead.drug_test_status=leadStatus.NEW;;
        }
          lead
            .save()
            .then(res => {
              resolve({ success: true, message: "Lead saved!" });
            })
            .catch(err => {
              console.log(err);
              reject({
                success: false,
                message: "Error in saving Lead"
              });
            });
        }
      })
      .catch(err => {
        console.log(err);
        reject({ success: false, message: "Error in saving Leads" });
      });
  });
}

function addMany(req) {
  const leads = req.body;
  const schema = Joi.array().items(Joi.object().keys({
    employer_id: Joi.string()
      .min(24)
      .max(24)
      .required(),
     employee_id: Joi.string()
      .min(24)
      .max(24)
      .required(),
      physical_check:Joi.boolean().required(),
      education_check:Joi.boolean().required(),
      pre_employment_check:Joi.boolean().required(),
      cibil_check:Joi.boolean().required(),
      judicial_check:Joi.boolean().required(),
      drug_test:Joi.boolean().required()
  }));

  return new Promise(async (resolve, reject) => {
    const { error, value } = schema.validate(leads);
    if (error) {
      reject(error);
      return;
    }

   let requests=  leads.map( element => {
   return new Promise((resolve,reject)=>{ 
   return Lead.findOne({employee_id:element.employee_id,employer_id:element.employer_id}).then(lead=>{
        if(!lead)
        {
          lead=new Lead(element);    

        } 
        else 
        {      
          Object.assign(lead,element);   
        }  
        
        if(lead.physical_check)
        {                 
          lead.physical_check_status=leadStatus.NEW;
        } 
          if(lead.education_check)
         {           
           lead.education_check_status=leadStatus.NEW;
         } 
         if(lead.pre_employment_check)
         {        
          lead.pre_employment_check_status=leadStatus.NEW;
         }
         if(lead.cibil_check)
         {         
          lead.cibil_check_status=leadStatus.NEW;
         }
         if(lead.judicial_check)
         {          
           lead.judicial_check_status=leadStatus.NEW;
         }
         if(lead.drug_test)
         {          
           lead.drug_test_status=leadStatus.NEW;;
         }
        lead.save().then(res=>{
          console.log("Bulk leads saved")
        }).catch(err=>{
          console.log(err)
        });          
        resolve({success:true,lead})  
                         
      }      
      )     
    })  
  }) 
  Promise.all(requests).then((result) => resolve({success:true,result})).catch(err=>resolve({success:false,err}));
  });

}

function updateMany(req) {
  const leads = req.body;
  const schema = Joi.array().items(Joi.object().keys({
    employer_id: Joi.string()
      .min(24)
      .max(24)
      .required(),
     employee_id: Joi.string()
      .min(24)
      .max(24)
      .required(),
      physical_check:Joi.boolean().required(),
      education_check:Joi.boolean().required(),
      pre_employment_check:Joi.boolean().required(),
      cibil_check:Joi.boolean().required(),
      judicial_check:Joi.boolean().required(),
      drug_test:Joi.boolean().required()
  }));

  return new Promise(async (resolve, reject) => {
    const { error, value } = schema.validate(leads);
    if (error) {
      reject(error);
      return;
    }
  let requests=  leads.map( element => {
   return new Promise((resolve,reject)=>{ 
   return Lead.findOne({employee_id:element.employee_id,employer_id:element.employer_id}).then(lead=>{
        if(lead)
        {         
            Object.assign(lead,element);
                          
            lead.physical_check_status=lead.physical_check?leadStatus.NEW:leadStatus.CANCELLED;         
                     
             lead.education_check_status=lead.education_check?leadStatus.NEW:leadStatus.CANCELLED;           
               
            lead.pre_employment_check_status=lead.pre_employment_check?leadStatus.NEW:leadStatus.CANCELLED;          
                
            lead.cibil_check_status=lead.cibil_check?leadStatus.NEW:leadStatus.CANCELLED;           
                    
            lead.judicial_check_status=lead.judicial_check?leadStatus.NEW:leadStatus.CANCELLED;           
                   
            lead.drug_test_status=lead.drug_test?leadStatus.NEW:leadStatus.CANCELLED;
           
          lead.save().then(res=>{
            console.log("Result saved : "+res)
          }).catch(err=>{
            console.log(err)
          });
          resolve({success:true,lead})          
        } 
        else {                   
              resolve({success:false,lead})         
        }       
      })     
    })  
  }) 
  Promise.all(requests).then((result) => resolve({success:true,result})).catch(err=>{
    resolve({success:false,error:err})
  });
  });
}

function update(req) {
  const leadParams = req.body;
  const schema = Joi.object().keys({
   id: Joi.string()
      .min(24)
      .max(24)
      .required(),    
      physical_check:Joi.boolean().required(),
      education_check:Joi.boolean().required(),
      pre_employment_check:Joi.boolean().required(),
      cibil_check:Joi.boolean().required(),
      judicial_check:Joi.boolean().required(),
      drug_test:Joi.boolean().required()
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(leadParams);
    if (error) {
      reject(error);
      return;
    }

    const { id,physical_check,education_check,pre_employment_check,cibil_check,judicial_check,drug_test } = leadParams;

    Lead.findById(id)
      .then(lead => {
        console.log(lead)
        if (!lead) {
          reject({ success: false, message: "Lead not found!" });
          return;
        }
         else {         
         lead.physical_check=physical_check;
         lead.education_check=education_check;
         lead.pre_employment_check=pre_employment_check;
         lead.cibil_check=cibil_check;
         lead.judicial_check=judicial_check;
         lead.drug_test=drug_test;
         lead.physical_check_status=lead.physical_check?leadStatus.NEW:leadStatus.CANCELLED;         
                     
         lead.education_check_status=lead.education_check?leadStatus.NEW:leadStatus.CANCELLED;           
           
        lead.pre_employment_check_status=lead.pre_employment_check?leadStatus.NEW:leadStatus.CANCELLED;          
            
        lead.cibil_check_status=lead.cibil_check?leadStatus.NEW:leadStatus.CANCELLED;           
                
        lead.judicial_check_status=lead.judicial_check?leadStatus.NEW:leadStatus.CANCELLED;           
               
        lead.drug_test_status=lead.drug_test?leadStatus.NEW:leadStatus.CANCELLED;

          lead
            .save()
            .then(res => {
              resolve({ success: true, message: "Lead updated!" });
            })
            .catch(err => {
              console.log(err);
              reject({
                success: false,
                message: "Error in updating Lead"
              });
            });
        }
      })
      .catch(err => {
        console.log(err);
        reject({ success: false, message: "Error in saving Leads" });
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

    Lead.findById(id).populate('employer_id','profile').populate('employee_id')
      .then(lead => {
        if (!lead) resolve({ success: false, message: "Lead not found" });
        else { 
          resolve({ success: true, lead: lead });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    Lead.find().populate('employer_id','profile').populate('employee_id').then(leads => {
        if (!leads)
         resolve({ success: false, message: "No Leads found" });
        else resolve({ success: true, leads: leads });
      })
      .catch(err => {
        reject(err);
      });
  });
}

function remove(req) {
  return new Promise( (resolve, reject) => {
    const schema = Joi.object().keys({
      id: Joi.string()
        .min(24)
        .max(24)    
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      reject(error);
      return;
    }
const {id}=req.body;
     Lead.findById(id)
      .then(lead => {
        if (!lead)
         resolve({ success: false, message: "Lead not found" });        
         lead.deleted=true;
         lead.save().then(()=>{
            resolve({ success: true, message:'Lead deleted' });
         }).catch(err=>{
           reject({success:false,error:err})
         })
        
      })
      .catch(err => {
        reject(err);
      });
  });
}
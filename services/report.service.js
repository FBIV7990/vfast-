const config = require("config.json");
const db = require("_helpers/db");
const Joi = require("@hapi/joi");
const helper = require("../_helpers/helper");
var multer = require("multer");
const Status=require('../_helpers/UserStatus')

const Report=db.Report;
const Control=db.Control;
const Verification=db.Verification;

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, "./documents");
  },
  filename: function(req, file, callback) {
    callback(
      null,
      file.fieldname + "_" + Date.now() + "." + file.mimetype.substring(6)
    );
  }
});

var upload = multer({
  storage: storage,
  limits: {
    fileSize:10 * 1024 * 1024
  },
  fileFilter: function(req, file, cb) {
    console.log(file)
    let fileExts = ["png", "jpg", "jpeg",'pdf'];
    helper.sanitizeFile(file, cb, fileExts);
  }
}).fields([{ name: "documents", maxCount: 5 }]);

module.exports = {
  add, 
  update,
  getAll, 
  remove,
  getById
  };

  function add(req,res) {
    return new Promise((resolve,reject)=>{
      upload(req, res,async function(err) {
    
        if (err) {
          
           reject(err);
           return;
         }
    const reportParams = req.body;
    const schema = Joi.object().keys({
      verification_id: Joi.string()
      .min(24)
      .max(24)
      .required(),      
      order_id:Joi.string().required(),
      education_check:Joi.boolean(),
      education_check_info:Joi.object().keys({
        employee_name:Joi.string().required(),
        gender:Joi.string().required(),
        dob:Joi.string().required(),
        birthplace:Joi.string().required(),
        mobile:Joi.string().required(),
        email:Joi.string().required(),
        fathername:Joi.string().required(),
        mothername:Joi.string().required(),
        language:Joi.string().required(),
        aadhar_number:Joi.string().required(),
        introduced_by:Joi.string().required(),
        height:Joi.string().required(),
        identity_mark:Joi.string().required(),
        university:Joi.string().required(),
  
        course:Joi.string().required(),
        institute_address:Joi.string().required(),
        year_of_passing:Joi.string().required(),
        course_duration:Joi.string().required(),
        person_met_at_home:Joi.string().required(),
        person_aadhar:Joi.string().required(),
      }), 
      employment_check:Joi.boolean(),
      employment_check_info:Joi.object().keys({
        employee_name:Joi.string().required(),
        gender:Joi.string().required(),
        dob:Joi.string().required(),
        birthplace:Joi.string().required(),
        mobile:Joi.string().required(),
        email:Joi.string().required(),
        fathername:Joi.string().required(),
        mothername:Joi.string().required(),
        language:Joi.string().required(),
        aadhar_number:Joi.string().required(),
        introduced_by:Joi.string().required(),
        height:Joi.string().required(),
        identity_mark:Joi.string().required(),
        employer_name:Joi.string().required(),
        designation:Joi.string().required(),
        address:Joi.string().required(),
        date_since_employed:Joi.string().required(),
        tenure:Joi.string().required(),
        person_met_in_org:Joi.string().required(),
        person_designation:Joi.string().required(),
      }),
       address_check:Joi.boolean(),
      address_check_info:Joi.object().keys({
        reference_num:Joi.string().required(),
        employee_name:Joi.string().required(),
        address:Joi.string().required(),
        contact_person:Joi.string().required(),
        relation:Joi.string().required(),
        contact_info:Joi.string().required(),
        residental_status:Joi.string().required(),
        period_of_stay:Joi.string().required(),
        family_members:Joi.string().required(),
        marital_status:Joi.string().required(),
        age:Joi.string().required(),
        exterior_desc_of_house:Joi.string().required(),
        exterior_desc_of_appt:Joi.string().required(),
        landmark:Joi.string().required(),
        comments:Joi.string().required(),
        candidate_sign:Joi.string().required(),
        relationship_if_not_candidate:Joi.string().required()
      }),
      representative_name:Joi.string().required(),
      representative_sign:Joi.string().required(),
      date_of_initiation:Joi.string().required(),
      date_of_physical_verification:Joi.string().required(),
      date_of_closure:Joi.string().required(),
      latitude:Joi.string().required(),
      longitude:Joi.string().required()
     
    });
  
    // return new Promise((resolve, reject) => {
      const { error, value } = schema.validate(reportParams);
      if (error) {
        reject(error);
        return;
      }
  
      const { verification_id,order_id,education_check,education_check_info,employment_check,employment_check_info,address_check,address_check_info,representative_name,representative_sign,date_of_initiation,date_of_physical_verification,date_of_closure,latitude,longitude } = reportParams;
  

      const verification=await Verification.findById(verification_id);
      if(verification)
      {

     return Report.findOne({verification_id:verification_id}).then(async report=>{
       if(report){ 
         console.log('case if-----------------------------------')
        resolve({success:false,message:'Duplicate Report'})
      }
        else
        {
          console.log('case else-----------------------------------') 
          report=new Report();
          const control=await Control.findOne();
          report.report_id=control.report_prefix+helper.paddNumber(control.report_counter);

          report.verification_id=verification_id;
       report.order_id=order_id;
       if(education_check)
     {  
       report.education_check=true;
       report.education_check_info=education_check_info;
     }
     if(employment_check)
     {  
       report.employment_check=true;
       report.employment_check_info=employment_check_info;
     }
     if(address_check)
     {  
       report.address_check=true;
       report.address_check_info=address_check_info;
     }
     report.representative_name=representative_name;
    report.representative_sign= representative_sign;
    report.date_of_initiation=date_of_initiation;
    report.date_of_physical_verification=date_of_physical_verification;
    report.date_of_closure=date_of_closure;
    report.latitude=latitude;
    report.longitude=longitude;
  
    if(req.files)
    {
      if(req.files.documents.length>0)
      {
        req.files.documents.map(doc=>{
        report.documents.push({
          name:doc.filename,
          type:"",
          filepath:doc.path.replace('\\','/')
        })
      })
    }
  }
     report.save().then(report=>{
      control.report_counter+=1;
      control.save(); 
      verification.status=Status.VERIFIED;
      verification.save();
       console.log(report)
          resolve({success:true,message:'Report saved'})
             }).catch(err=>{
                 console.log(err);
                 resolve({success:false,error:err})
             })     
            }
  
           
      }).catch(err=>{
        reject(err);
      })
    }
    else {resolve({success:false,message:'Verification id invalid'})}
  
    });
    })
    // })
  
  }


function update(req) {
  const reportParams = req.body;
  const schema = Joi.object().keys({
    report_id: Joi.string()
    .min(24)
    .max(24)
    .required(),      
    order_id:Joi.string().required(),
    education_check:Joi.boolean(),
    education_check_info:Joi.object().keys({
      employee_name:Joi.string(),
      gender:Joi.string(),
      dob:Joi.string(),
      birthplace:Joi.string(),
      mobile:Joi.string(),
      email:Joi.string(),
      fathername:Joi.string(),
      mothername:Joi.string(),
      language:Joi.string(),
      aadhar_number:Joi.string(),
      introduced_by:Joi.string(),
      height:Joi.string(),
      identity_mark:Joi.string(),
      university:Joi.string(),
      course:Joi.string(),
      institute_address:Joi.string(),
      year_of_passing:Joi.string(),
      course_duration:Joi.string(),
      person_met_at_home:Joi.string(),
      person_aadhar:Joi.string(),
    }), 
    employment_check:Joi.boolean(),
    employment_check_info:Joi.object().keys({
      employee_name:Joi.string(),
      gender:Joi.string(),
      dob:Joi.string(),
      birthplace:Joi.string(),
      mobile:Joi.string(),
      email:Joi.string(),
      fathername:Joi.string(),
      mothername:Joi.string(),
      language:Joi.string(),
      aadhar_number:Joi.string(),
      introduced_by:Joi.string(),
      height:Joi.string(),
      identity_mark:Joi.string(),
      employer_name:Joi.string(),
      designation:Joi.string(),
      address:Joi.string(),
      date_since_employed:Joi.string(),
      tenure:Joi.string(),
      person_met_in_org:Joi.string(),
      designation:Joi.string(),
    }),
     address_check:Joi.boolean(),
    address_check_info:Joi.object().keys({
      reference_num:Joi.string(),
      employee_name:Joi.string(),
      address:Joi.string(),
      contact_person:Joi.string(),
      relation:Joi.string(),
      contact_info:Joi.string(),
      residental_status:Joi.string(),
      period_of_stay:Joi.string(),
      family_mebers:Joi.string(),
      marital_status:Joi.string(),
      age:Joi.string(),
      exterior_desc_of_house:Joi.string(),
      exterior_desc_of_appt:Joi.string(),
      landmark:Joi.string(),
      comments:Joi.string(),
      candidate_sign:Joi.string(),
      relationship_if_not_candidate:Joi.string()
    }),
    representative_name:Joi.string(),
    representative_sign:Joi.string(),
    date_of_initiation:Joi.string(),
    date_of_physical_verification:Joi.string(),
    date_of_closure:Joi.string(),
    latitude:Joi.string(),
    longitude:Joi.string()
   
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(reportParams);
    if (error) {
      reject(error);
      return;
    }

    const { report_id,order_id,education_check,education_check_info,employment_check,employment_check_info,address_check,address_check_info,representative_name,representative_sign,date_of_initiation,date_of_physical_verification,date_of_closure,latitude,longitude } = reportParams;

    Report.findById(report_id).then(report=>{
      if(!report)
      { 
        reject({success:false,message:'Report not found!'})
        return;
      }
      
        
     report.order_id=order_id;
     report.education_check=education_check;
     if(education_check==true)
     {       
     report.education_check_info=education_check_info;
     }
      report.employment_check=employment_check;
     if(employment_check==true)
     {      
     report.employment_check_info=employment_check_info;
     }
     report.address_check=address_check;
    if(address_check==true)
    {       
     report.address_check_info=address_check_info;
    }
    report.representative_name=representative_name;
    report.representative_sign= representative_sign;
    report.date_of_initiation=date_of_initiation;
    report.date_of_physical_verification=date_of_physical_verification;
    report.date_of_closure=date_of_closure;
    report.latitude=latitude;
    report.longitude=longitude;

  //   if(req.files)
  //   {
  //     if(req.files.documents.length>0)
  //     {
  //       req.files.documents.map(doc=>{
  //       report.documents.push({
  //         name:doc.filename,
  //         type:"",
  //         filepath:doc.path.replace('\\','/')
  //       })
  //     })
  //   }
  // }

        report.save().then(report=>{
        resolve({success:true,message:'Report saved'})
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
    Report.find({ deleted: false }).populate('verification_id').lean()
      .then(reports => {
        if (!reports)
         resolve({ success: false, message: "No reports found" });      
        else {
           const finalReports=  reports.map(report=>{
            
            let {education_check_info,employment_check_info,address_check_info,...repdata}=report;
            
            const finalData={...repdata};
            if(repdata.education_check)
            {  finalData["checkinfo"]=education_check_info;
         finalData['checkname']='Education Check'
           }
 
            if(repdata.employment_check)
             { 
               finalData["checkinfo"]=employment_check_info; 
               finalData['checkname']='Employment Check'
             }
 
            if(repdata.address_check)
              {
                 finalData["checkinfo"]=address_check_info;  
                 finalData['checkname']='Address Check'
              }

             return finalData;
           })

           console.log(finalReports)
          resolve({ success: true, reports: finalReports });
      }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function remove(req){
  const reportParams = req.body;
  const schema = Joi.object().keys({
    report_id: Joi.string()
    .min(24)
    .max(24)
    .required()
  });
  return new Promise((resolve, reject) => {
    const schema = Joi.object().keys({
      report_id: Joi.string()
        .min(24)
        .max(24)
    });

    const { error, value } = schema.validate(reportParams);
    if (error) {
      reject(error);
      return;
    }
    const {report_id}=reportParams;
    Report.findById(report_id)
      .then(report => {
        if (!report) 
        resolve({ success: false, message: "Report not found" });
        else {   
          report.deleted=true;
          report.save().then(verif=>{
                 resolve({success:true,message:'Report deleted'});
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
    Report.findById(id).lean()
      .then(report => {
        if (!report) resolve({ success: false, message: "Report not found" });
        else {  
          let {education_check_info,employment_check_info,address_check_info,...repdata}=report;
            
          const finalData={...repdata};
          if(repdata.education_check)
           {  finalData["checkinfo"]=education_check_info;
        finalData['checkname']='Education Check'
          }

           if(repdata.employment_check)
            { 
              finalData["checkinfo"]=employment_check_info; 
              finalData['checkname']='Employment Check'
            }

           if(repdata.address_check)
             {
                finalData["checkinfo"]=address_check_info;  
                finalData['checkname']='Address Check'
             }
            resolve({ success: true, report:finalData});
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}
const config = require("config.json");
const db = require("_helpers/db");
const Joi = require("@hapi/joi");
const helper = require("../_helpers/helper");
var multer = require("multer");

const Employee=db.Employee;

module.exports = {
  add,
  addMany,
  getById,
  getByEmployerId,
  update,
  uploadDocs,
  remove
};


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

function uploadDocs(req,res){
  return new Promise((resolve,reject)=>{
    upload(req, res, function(err) {

      if (err) {
         reject(err);
         return;
       }
       const schema = Joi.object().keys({
        employer_id: Joi.string()
          .min(24)
          .max(24)
          .required(),
          employee_id: Joi.string()
          .min(24)
          .max(24)
          .required()
      });
      const { error, value } = schema.validate(req.body);

      if (error) {
        reject(error);
        return;
      }
      const {employer_id,employee_id}=req.body;
       
    
      Employee.findOne({employer_id:employer_id,employee_id:employee_id})
        .then(employee => {
          if (!employee) resolve({ success: false, message: "Employee not found" });
          else {     
          
              if(req.files.documents.length>0)
              {
                req.files.documents.map(doc=>{
                employee.documents.push({
                  name:doc.filename,
                  type:"",
                  filepath:doc.path.replace('\\','/')
                })
              })
              employee.save().then(res=>{
                resolve({success:true,message:'Documents uploaded',employee:employee});
              }).catch(err=>{
                reject(err);
              })
              }  
              else
              resolve({ success: false, message:'No documents found'});
          }
        })
        .catch(err => {
          reject(err);
        });
      }) 

  })
}

function add(req) {
  const employeeParam = req.body;
  const schema = Joi.object().keys({
      employer_id:Joi.string().min(24).max(24).required(),
      unique_id:Joi.string().required(),
      name:Joi.string().required(),
      email:Joi.string().required(),
      mobile:Joi.string().required(),
      state:Joi.string().required(),
      contact1:Joi.string().required(),
      contact2:Joi.string().required(),
      address:Joi.string().required(),
      employee_code:Joi.string(),
      company:Joi.string(),
      company_address:Joi.string(),
      designation:Joi.string(),
      working_from:Joi.string(),
      working_to:Joi.string(),
      contact_person:Joi.string(),
      university:Joi.string(),
      institute:Joi.string(),
      course:Joi.string(),
      year_of_passing:Joi.string(),
      college_address:Joi.string(),
      pan_number:Joi.string(),
      aadhar_number:Joi.string(),
      voter_id:Joi.string(),
      height:Joi.string(),
      identification_mark:Joi.string(),
      blood_group:Joi.string()
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(employeeParam);
    if (error) {
      reject(error);
      return;
    }

    const { employer_id ,unique_id,name,email,mobile,state,contact1,contact2,address,employee_code,company,company_address,designation,working_from,working_to,contact_person,university,institute,course,year_of_passing,college_address,pan_number,aadhar_number,voter_id,height,identification_mark,blood_group} = employeeParam;
    
    const employee=new Employee();
    employee.employer_id=employer_id;
    employee.employee_id=employee.id;
    employee.unique_id=unique_id;
    employee.name=name;
    employee.email=email;
    employee.mobile=mobile;
    employee.state=state;
    employee.contact1=contact1;
    employee.contact2=contact2;
    employee.address=address;
    employee.employee_code=employee_code;
    employee.company=company;
    employee.company_address=company_address;
    employee.designation=designation;
    employee.working_from=working_from;
    employee.working_to=working_to;
    employee.contact_person=contact_person;
    employee.university=university;
    employee.institute=institute;
    employee.course=course;
    employee.year_of_passing=year_of_passing;
    employee.college_address=college_address;
    employee.pan_number=pan_number;
    employee.aadhar_number=aadhar_number;
    employee.voter_id=voter_id;
    employee.height=height;
    employee.identification_mark=identification_mark;
    employee.blood_group=blood_group; 
    employee.save().then(emp=>{
        resolve({success:true,employee:emp,message:'Employee saved!'})
    }).catch(err=>{
       reject({success:false,message:'Error in saving employee'})
    })

  });
}

function addMany(req) {
  const employeesParam = req.body;
  const schema = Joi.object().keys({
      employer_id:Joi.string().min(24).max(24).required(),
      employees:Joi.array().items({        
        unique_id:Joi.string().required(),
        name:Joi.string().required(),
        email:Joi.string().required(),
        mobile:Joi.string().required(),
        state:Joi.string().required(),
        contact1:Joi.string().required(),
        contact2:Joi.string().required(),
        address:Joi.string().required(),
        employee_code:Joi.string(),
        company:Joi.string(),
        company_address:Joi.string(),
        designation:Joi.string(),
        working_from:Joi.string(),
        working_to:Joi.string(),
        contact_person:Joi.string(),
        university:Joi.string(),
        institute:Joi.string(),
        course:Joi.string(),
        year_of_passing:Joi.string(),
        college_address:Joi.string(),
        pan_number:Joi.string(),
        aadhar_number:Joi.string(),
        voter_id:Joi.string(),
        height:Joi.string(),
        identification_mark:Joi.string(),
        blood_group:Joi.string()
      }).required()
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(employeesParam);
    if (error) {
      reject(error);
      return;
    }

    const { employer_id ,employees} = employeesParam;
    employees.map(emp=>{
      const { unique_id,name,email,mobile,state,contact1,contact2,address,employee_code,company,company_address,designation,working_from,working_to,contact_person,university,institute,course,year_of_passing,college_address,pan_number,aadhar_number,voter_id,height,identification_mark,blood_group} = emp;
      const employee=new Employee();
      employee.employer_id=employer_id;
    employee.employee_id=employee.id;
    employee.unique_id=unique_id;
    employee.name=name;
    employee.email=email;
    employee.mobile=mobile;
    employee.state=state;
    employee.contact1=contact1;
    employee.contact2=contact2;
    employee.address=address;
    employee.employee_code=employee_code;
    employee.company=company;
    employee.company_address=company_address;
    employee.designation=designation;
    employee.working_from=working_from;
    employee.working_to=working_to;
    employee.contact_person=contact_person;
    employee.university=university;
    employee.institute=institute;
    employee.course=course;
    employee.year_of_passing=year_of_passing;
    employee.college_address=college_address;
    employee.pan_number=pan_number;
    employee.aadhar_number=aadhar_number;
    employee.voter_id=voter_id;
    employee.height=height;
    employee.identification_mark=identification_mark;
    employee.blood_group=blood_group;     
    employee.save();
    })   
   resolve({success:true,message:'Employees saved!'})    
  });
}

function update(req) {
  const employeeParam = req.body;
  const schema = Joi.object().keys({     
      employer_id:Joi.string().min(24).max(24).required(),
      employee_id:Joi.string().min(24).max(24).required(),
      unique_id:Joi.string(),
      name:Joi.string(),
      email:Joi.string(),
      mobile:Joi.string(),
      state:Joi.string(),
      contact1:Joi.string(),
      contact1:Joi.string(),
      address:Joi.string(),
      employee_code:Joi.string(),
      company:Joi.string(),
      company_address:Joi.string(),
      designation:Joi.string(),
      working_from:Joi.string(),
      working_to:Joi.string(),
      contact_person:Joi.string(),
      university:Joi.string(),
      institute:Joi.string(),
      course:Joi.string(),
      year_of_passing:Joi.string(),
      college_address:Joi.string(),
      pan_number:Joi.string(),
      aadhar_number:Joi.string(),
      voter_id:Joi.string(),
      height:Joi.string(),
      identification_mark:Joi.string(),
      blood_group:Joi.string()
  });

  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(employeeParam);
    if (error) {
      reject(error);
      return;
    }

      const { employee_id ,unique_id,name,email,mobile,state,contact1,contact2,address,employee_code,company,company_address,designation,working_from,working_to,contact_person,university,institute,course,year_of_passing,college_address,pan_number,aadhar_number,voter_id,height,identification_mark,blood_group}=employeeParam;
    
Employee.findById(id).then(employee=>{
  if(!employee)
  resolve({success:false,message:'Employee not found'})
   
  employee_id&&( employee.employee_id=employee_id);
  unique_id&&( employee.unique_id=unique_id);
  name&&(employee.name=name);
  email&&(employee.email=email);
  mobile&&(employee.mobile=mobile);
  state&&(employee.state=state);
  contact1&&(employee.contact1=contact1);
  contact2&&(employee.contact2=contact2);
  address&&(employee.address=address);
  employee_code&&(employee.employee_code=employee_code);
  company&&(employee.company=company);
  company_address&&(employee.company_address=company_address);
  designation&&(employee.designation=designation);
  working_from&&(employee.working_from=working_from);
  working_to&&(employee.working_to=working_to);
  contact_person&&(employee.contact_person=contact_person);
  university&&(employee.university=university);
  institute&&(employee.institute=institute);
    course&&(employee.course=course);
    year_of_passing&&(employee.year_of_passing=year_of_passing);
    college_address&&(employee.college_address=college_address);
    pan_number&&(employee.pan_number=pan_number);
    aadhar_number&&(employee.aadhar_number=aadhar_number);
    voter_id&&(employee.voter_id=voter_id);
height&&(employee.height=height);
identification_mark&&(employee.identification_mark=identification_mark);
blood_group&&(employee.blood_group=blood_group);
  employee.save().then(emp=>{
      resolve({success:true,message:'Employee updated!'})
  }).catch(err=>{
      console.log(err)
      reject({success:false,message:'Error in updating employee'})
  })

}).catch(err=>{
  console.log(err);
  reject(err);
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
    Employee.findById(id)
      .then(employee => {
        if (!employee) resolve({ success: false, message: "Employee not found" });
        else {        
            resolve({ success: true, employee:employee});
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getByEmployerId(id) {
  console.log(id)
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

    Employee.find({employer_id:id })
      .then(employees => {
        if (!employees) 
        resolve({ success: false, message: "No Employees found" });
        else resolve({ success: true, employees: employees });
      })
      .catch(err => {
        reject(err);
      });
  });
}

function remove(id){
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
    Employee.findByIdandRemove(id)
      .then(employee => {
        if (!employee) 
        resolve({ success: false, message: "Employee not found" });
        else {        
            resolve({ success: true, message:'Employee deleted!'});
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}



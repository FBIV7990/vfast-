const config = require("config.json");
const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const randomstring = require("randomstring");
const db = require("_helpers/db");
var Jimp = require("jimp");
const smsService = require("./sms.service");
const emailService = require("./email.service");
const helper = require("../_helpers/helper");
var multer = require("multer");
const Role=require("../_helpers/role");
const Status=require("../_helpers/UserStatus");
var generator = require('generate-password');

const User = db.User;
const Control=db.Control;

// const control=new Control();
// control.save();

module.exports = {
  authenticate,
  create,
  completeProfile,
  createVerifier,
  editVerifier,
  createVendor,
  editVendor,
  createEmployer,
  updateImages,
  getById,
  getAll,
  changeStatus,
  changeRole,
  changePassword,
  activate,
  _delete
};

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, "./images");
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
    let fileExts = ["png", "jpg", "jpeg"];
    helper.sanitizeFile(file, cb, fileExts);
  }
}).fields([{ name: "logo", maxCount: 1 },
 { name: "profile", maxCount: 1 }, 
 { name: "cardfront", maxCount: 1 }, 
 { name: "cardback", maxCount: 1 },
 { name: "gst_certificate", maxCount: 1 }]);

function create(req) {
  const userParam = req.body;
  console.log(userParam);
  const schema = Joi.object().keys({
    username: Joi.string()
      .min(12)
      .required(),
    password: Joi.string()
      .min(8)
      .max(30)
      .required()
  });
  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(userParam);
    if (error) {
      reject(error);
      return;
    }

    let { username, password } = userParam;
    var country_code;
    const onlyNumbers = /^[0-9]+$/;

    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const isMobile = onlyNumbers.test(username);

    const isEmail = mailformat.test(username);

    console.log(isMobile + " " + isEmail);
    if (!isMobile && !isEmail) {
      reject({
        success: false,
        message:
          "Invalid username! Please provide a valid email address or mobile number."
      });
      return;
    }
    if (isMobile) {
      country_code = username.substring(0, username.length - 10);
      var mobile_num = username.substring(
        username.length - 10,
        username.length
      );
      username = mobile_num;
    }

    // validate
    User.findOne({
      "account.username": username
    })
      .then(async user => {
        console.log(user);
        if (!user) {
          const user = new User();       
          const control=await Control.findOne();
            
          user.user_id=control.user_prefix+helper.paddNumber(control.user_counter);
          const token = jwt.sign({ sub: user.id, role: Role.EMPLOYER }, config.secret);
          user.account = {
            username: username,
            securityCode: randomstring.generate({
              length: 6,
              charset: "numeric",
              readable: true
            }),
            token: token,
            status: Status.PENDING,
            role: Role.EMPLOYER,
            active: true,
            created_on: new Date()
          };

          if (password)
           user.setPassword(password);
       
          if (isMobile) {
            smsService
              .sendSMS(country_code + username, user.account.securityCode)
              .then(sms => {
                console.log(sms);
              })
              .catch(err => {
                reject(err);
              });

            user.profile.mobile = {
              country_code: country_code,
              mobile: mobile_num
            };
          } else if (isEmail) {
            emailService
              .sendMail(username, user.account.securityCode)
              .then(email => {
                console.log(email);
              })
              .catch(err => {
                reject(err);
              });
            user.profile.email = username;
          }

          // save user
          user
            .save()
            .then(user => {
              control.user_counter+=1;
              control.save(); 
              resolve({
                success: true,
                message: "User registered successfully!",
                id: user.id,
                role:user.account.role,
                token: token
              });
            })
            .catch(err => {
              reject(err);
            });
        } else {
          resolve({
            success: false,
            message: "User already exists! Please login"
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

async function  createVerifier(req,res) {

  var upload = multer({
    storage: storage,
    limits: {
      fileSize:10 * 1024 * 1024
    },
    fileFilter: function(req, file, cb) {
      console.log(file)
      let fileExts = ["png", "jpg", "jpeg"];
      helper.sanitizeFile(file, cb, fileExts);
    }
  }).fields([{ name: "photo", maxCount: 1 }]);

 
 

  const schema = Joi.object().keys({
    username: Joi.string()
      .min(12)
      .required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email:Joi.string().required(),
    mobile:Joi.string().required(),
  });
  try{
    
return new Promise((resolve,reject)=>{

     upload(req,res, async  function(err) {
    
      if (err) {
      console.log(err)
      reject(err);
       
     }

     const userParam = req.body;
    const { error, value } = schema.validate(userParam);
    if (error) {
     throw error;     
    }

    let { username,firstname,lastname,email,mobile } = userParam;
    var country_code;
    const onlyNumbers = /^[0-9]+$/;

    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const isMobile = onlyNumbers.test(username);

    const isEmail = mailformat.test(username);

    if (!isMobile && !isEmail) {
      resolve({
        success: false,
        message:
          "Invalid username! Please provide a valid email address or mobile number."
      });
      
    }
    if (isMobile) {
      country_code = username.substring(0, username.length - 10);
      var mobile_num = username.substring(
        username.length - 10,
        username.length
      );
      username = mobile_num;
    }


var user=await User.findOne({"account.username": username});
    if (user) {
      console.log(user)
      resolve({
       success: false,
       message: "User already exists. Please login"
  });
}
    var user=new User();
    const token = jwt.sign({ sub: user.id, role: Role.VERIFIER }, config.secret);
    const control=await Control.findOne();

    user.user_id=control.user_prefix+helper.paddNumber(control.user_counter);

    
    user.account = {
     username: username,
     securityCode: randomstring.generate({
     length: 6,
     charset: "numeric",
     readable: true
     }),
    token: token,
  status: Status.VERIFIED,
  role: Role.VERIFIER,
  active: true,
  created_on: new Date()
};

// if (password)
// 

var password = generator.generate({
  length: 15,
  numbers: true
});
 user.setPassword(password);
//  user.profile.mobile = {
//   country_code: country_code,
//   mobile: mobile_num
// };
user.profile.first_name=firstname;
user.profile.last_name=lastname;
user.profile.email = email;

 if (isMobile) {
  smsService
    .sendSMS(country_code + username, user.account.securityCode)
    .then(sms => {
      console.log(sms);
    })
    .catch(err => {
      console.log(err);
      });

  user.profile.mobile = {
    country_code: country_code,
    mobile: mobile_num
  };
 
} else if (isEmail) {
  emailService
    .sendPassword(username, password)
    .then(email => {
      console.log(email);
    })
    .catch(err => {
      reject(err);
    });

}
if(req.files.photo&&req.files.photo[0])
{ 
  console.log(req.files)
  user.profile.profile_picture = req.files.photo[0].path.replace('\\','/');
}

const result=await user.save().catch(err=>{
  throw err;
});
if(result)
 {
  control.user_counter+=1;
  control.save(); 
  resolve({
    success: true,
    message: "User registered successfully!"
  });
}
  else 
  resolve({
    success: false,
    message: "Cannot create new user.",
   
  });

})
})
 }
 catch(err)
  {console.log(err)
      reject(err);
  }
 
}
async function  editVerifier(req,res) {

  console.log('Edit verifier hitted')

  var upload = multer({
    storage: storage,
    limits: {
      fileSize:10 * 1024 * 1024
    },
    fileFilter: function(req, file, cb) {
      console.log(file)
      let fileExts = ["png", "jpg", "jpeg"];
      helper.sanitizeFile(file, cb, fileExts);
    }
  }).fields([{ name: "photo", maxCount: 1 }]); 

  const schema = Joi.object().keys({
    id:Joi.string().min(24).max(24).required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email:Joi.string().required(),
    mobile:Joi.string().required(),
  });
  try{
    
return new Promise((resolve,reject)=>{

     upload(req,res, async  function(err) {
    
      if (err) {
      console.log(err)
      reject(err);
       
     }

     const userParam = req.body;
     console
    const { error, value } = schema.validate(userParam);
    if (error) {
      reject({success:false,error})
      return;
    // throw error;     
    }

    let {id, first_name,last_name,email,mobile } = userParam;
   
var user=await User.findById(id);
    if (user) {
      user.profile.first_name=first_name;
      user.profile.last_name=last_name;
      user.profile.email = email;     
       if(req.files)
      if(req.files.photo&&req.files.photo[0])
      { 
        console.log(req.files)
        user.profile.profile_picture = req.files.photo[0].path.replace('\\','/');
      }
      const result=await user.save().catch(err=>{
        throw err;
      });
      if(result)
       {
       
        resolve({
          success: true,
          message: "User updated successfully!"
        });
      }
        else 
        resolve({
          success: false,
          message: "Cannot update user",
         
        });
   
}
  else{
    resolve({
      success: false,
      message: "User not exists"
 });
  
}
    




})
})
 }
 catch(err)
  {console.log(err)
      reject(err);
  }
 
}

function createVendor(req,res) {
 
  const schema = Joi.object().keys({
    username: Joi.string()
      .min(12)
      .required(),
      firstname: Joi.string(),
      lastname: Joi.string(),
      company_name: Joi.string(), 
      company_category: Joi.string(),  
      owner_status: Joi.string(),  
      
      
      billing_address: {
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        zip: Joi.string(),
        landline:Joi.object().keys({
          std_code:Joi.string(),
          landline:Joi.string()
       }),
       fax:Joi.object().keys({
        std_code:Joi.string(),
        fax:Joi.string()
     }),
      },
      shipping_address: {
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        zip: Joi.string(),
        landline:Joi.object().keys({
          std_code:Joi.string(),
          landline:Joi.string()
       }),
       fax:Joi.object().keys({
        std_code:Joi.string(),
        fax:Joi.string()
     }),
      },
       mobile:Joi.object().keys({
         country_code:Joi.string(),
         mobile:Joi.string()
      }),
   email: Joi.string(),  
   gstin:Joi.string(),
   pan_number:Joi.string(),
   cin_number:Joi.string()  
  });
  return new Promise((resolve, reject) => {
    upload(req, res, function(err) {

      if (err) {
         reject(err);
         return;
       }

    const userParam = req.body;
    const { error, value } = schema.validate(userParam);
    if (error) {
      reject(error);
      return;
    }

    let { username, firstname,
      lastname,
      company_name, 
      company_category,  
      owner_status,
      billing_address,  
      shipping_address,  
      mobile,
      email,   
      gstin,
      pan_number,    
      cin_number     } = userParam;

    var country_code;
    const onlyNumbers = /^[0-9]+$/;

    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const isMobile = onlyNumbers.test(username);

    const isEmail = mailformat.test(username);

    console.log(isMobile + " " + isEmail);
    if (!isMobile && !isEmail) {
      reject({
        success: false,
        message:
          "Invalid username! Please provide a valid email address or mobile number."
      });
      return;
    }
    if (isMobile) {
      country_code = username.substring(0, username.length - 10);
      var mobile_num = username.substring(
        username.length - 10,
        username.length
      );
      username = mobile_num;
    }

    // validate
    User.findOne({
      "account.username": username
    })
      .then( async user => {
        if (!user) {
          const user = new User();       
          const control=await Control.findOne();

          user.user_id=control.user_prefix+helper.paddNumber(control.user_counter);   

          const token = jwt.sign({ sub: user.id, role: Role.VENDOR }, config.secret);
          user.account = {
            username: username,
            securityCode: randomstring.generate({
              length: 6,
              charset: "numeric",
              readable: true
            }),
            token: token,
            status: Status.VERIFIED,
            role: Role.VENDOR,
            active: true,
            created_on: new Date()
          };

          var password = generator.generate({
            length: 15,
            numbers: true
          });
           user.setPassword(password);
       
          if (isMobile) {
            smsService
              .sendSMS(country_code + username, user.account.securityCode)
              .then(sms => {
                console.log(sms);
              })
              .catch(err => {
                reject(err);
              });
         
          } else if (isEmail) {
            emailService.sendPassword(username, password)
              .then(email => {
                console.log(email);
              })
              .catch(err => {
                reject(err);
              });
            }
         user.profile.first_name = firstname;
        user.profile.last_name = lastname;

        user.profile.company_name=company_name;
        user.profile.company_category=company_category;
        user.profile.owner_status=owner_status;

         user.profile.billing_address = JSON.parse(billing_address);
        user.profile.shipping_address = JSON.parse(shipping_address);
        user.profile.mobile = JSON.parse(mobile);
        user.profile.email = email;
        user.profile.gstin = gstin;
        user.profile.pan_number = pan_number;
        user.profile.cin_number = cin_number;
        
        if(req.files)
        {if(req.files.logo&&req.files.logo[0])
        { 
          user.profile.company_logo =req.files.logo[0].path.replace('\\','/');     
       }
        
         if(req.files.profile&&req.files.profile[0])
         user.profile.profile_picture =  req.files.profile[0].path.replace('\\','/');
        
         if(req.files.cardfront&&req.files.cardfront[0])
         user.profile.business_card.front =  req.files.cardfront[0].path.replace('\\','/');
        
         if(req.files.cardback&&req.files.cardback[0])
         user.profile.business_card.back =  req.files.cardback[0].path.replace('\\','/');

         if(req.files.gst_certificate&&req.files.gst_certificate[0])
         user.statutary_details.gst_certificate =  req.files.gst_certificate[0].path.replace('\\','/');
      }
          // save user
          user
            .save()
            .then(user => {
              control.user_counter+=1;
              control.save(); 
              resolve({
                success: true,
                message: "User registered successfully!"
              });
            })
            .catch(err => {
              reject(err);
            });
        } else {
          resolve({
            success: false,
            message: "User already exists! Please login"
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
})
}

function editVendor(req,res) {
 
  const schema = Joi.object().keys({
    id: Joi.string().min(24).max(24).required(),
         
      first_name: Joi.string(),
      last_name: Joi.string(),
      company_name: Joi.string(), 
      company_category: Joi.string(),  
      owner_status: Joi.string(),  
      
      
      billing_address: {
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        zip: Joi.string(),
        landline:Joi.object().keys({
          std_code:Joi.string(),
          landline:Joi.string()
       }),
       fax:Joi.object().keys({
        std_code:Joi.string(),
        fax:Joi.string()
     }),
      },
      shipping_address: {
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        zip: Joi.string(),
        landline:Joi.object().keys({
          std_code:Joi.string(),
          landline:Joi.string()
       }),
       fax:Joi.object().keys({
        std_code:Joi.string(),
        fax:Joi.string()
     }),
      },
       mobile:Joi.object().keys({
         country_code:Joi.string(),
         mobile:Joi.string()
      }),
   email: Joi.string(),  
   gstin:Joi.string(),
   pan_number:Joi.string(),
   cin_number:Joi.string()  
  });
  return new Promise((resolve, reject) => {
    upload(req, res, function(err) {

      if (err) {
         reject(err);
         return;
       }

    const userParam = req.body;
    const { error, value } = schema.validate(userParam);
    if (error) {
      reject(error);
      return;
    }

    let { id, firstname,
      lastname,
      company_name, 
      company_category,  
      owner_status,
      billing_address,  
      shipping_address,  
      mobile,
      email,   
      gstin,
      pan_number,    
      cin_number     } = userParam; 

    // validate
    User.findById(id)
        .then( async user => {
        if (user) {
         user.profile.first_name=first_name;
         user.profile.last_name = lastname;

         user.profile.company_name=company_name;
         user.profile.company_category=company_category;
         user.profile.owner_status=owner_status;
 
          user.profile.billing_address = JSON.parse(billing_address);
         user.profile.shipping_address = JSON.parse(shipping_address);
         user.profile.mobile = JSON.parse(mobile);
         user.profile.email = email;
         user.profile.gstin = gstin;
         user.profile.pan_number = pan_number;
         user.profile.cin_number = cin_number;    
       
        
        if(req.files)
        {if(req.files.logo&&req.files.logo[0])
        { 
          user.profile.company_logo =req.files.logo[0].path.replace('\\','/');     
       }
        
         if(req.files.profile&&req.files.profile[0])
         user.profile.profile_picture =  req.files.profile[0].path.replace('\\','/');
        
         if(req.files.cardfront&&req.files.cardfront[0])
         user.profile.business_card.front =  req.files.cardfront[0].path.replace('\\','/');
        
         if(req.files.cardback&&req.files.cardback[0])
         user.profile.business_card.back =  req.files.cardback[0].path.replace('\\','/');

         if(req.files.gst_certificate&&req.files.gst_certificate[0])
         user.statutary_details.gst_certificate =  req.files.gst_certificate[0].path.replace('\\','/');
      }
          // save user
          user
            .save()
            .then(user => {
             
              resolve({
                success: true,
                message: "Vendor loaded"
              });
            })
            .catch(err => {
              reject(err);
            });
        } else {
          resolve({
            success: false,
            message: "Invalid vendor id!"
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
})
}

function createEmployer(req,res) {
 
  const schema = Joi.object().keys({
    username: Joi.string()
      .min(12)
      .required(),
      firstname: Joi.string(),
      lastname: Joi.string(),
      company_name: Joi.string(),    
      company_category: Joi.string(),  
      owner_status: Joi.string(), 
      billing_address: {
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        zip: Joi.string(),
        landline:Joi.object().keys({
          std_code:Joi.string(),
          landline:Joi.string()
       }),
       fax:Joi.object().keys({
        std_code:Joi.string(),
        fax:Joi.string()
     }),
      },
      shipping_address: {
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        zip: Joi.string(),
        landline:Joi.object().keys({
          std_code:Joi.string(),
          landline:Joi.string()
       }),
       fax:Joi.object().keys({
        std_code:Joi.string(),
        fax:Joi.string()
     }),
      },
       mobile:Joi.object().keys({
         country_code:Joi.string(),
         mobile:Joi.string()
      }),
   email: Joi.string(),  
   gstin:Joi.string(),
   pan_number:Joi.string(),
   cin_number:Joi.string()  
  });
  return new Promise((resolve, reject) => {
    upload(req, res, function(err) {

      if (err) {
         reject(err);
         return;
       }

    const userParam = req.body;
    const { error, value } = schema.validate(userParam);
    if (error) {
      reject(error);
      return;
    }

    let { username,firstname,
      lastname,
      company_name,   
      company_category,  
      owner_status,
      billing_address,  
      shipping_address,  
      mobile,
      email,   
      gstin,
      pan_number,    
      cin_number     } = userParam;

    var country_code;
    const onlyNumbers = /^[0-9]+$/;

    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const isMobile = onlyNumbers.test(username);

    const isEmail = mailformat.test(username);

    console.log(isMobile + " " + isEmail);
    if (!isMobile && !isEmail) {
      reject({
        success: false,
        message:
          "Invalid username! Please provide a valid email address or mobile number."
      });
      return;
    }
    if (isMobile) {
      country_code = username.substring(0, username.length - 10);
      var mobile_num = username.substring(
        username.length - 10,
        username.length
      );
      username = mobile_num;
    }

    // validate
    User.findOne({
      "account.username": username
    })
      .then( async user => {
        if (!user) {
          const user = new User();       
          const control=await Control.findOne();

          user.user_id=control.user_prefix+helper.paddNumber(control.user_counter);   

          const token = jwt.sign({ sub: user.id, role: Role.EMPLOYER }, config.secret);
          user.account = {
            username: username,
            securityCode: randomstring.generate({
              length: 6,
              charset: "numeric",
              readable: true
            }),
            token: token,
            status: Status.VERIFIED,
            role: Role.EMPLOYER,
            active: true,
            created_on: new Date()
          };

          var password = generator.generate({
            length: 15,
            numbers: true
          });
           user.setPassword(password);
       
          if (isMobile) {
            smsService
              .sendSMS(country_code + username, user.account.securityCode)
              .then(sms => {
                console.log(sms);
              })
              .catch(err => {
                reject(err);
              });
         
          } else if (isEmail) {
            emailService.sendPassword(username, password)
              .then(email => {
                console.log(email);
              })
              .catch(err => {
                reject(err);
              });
            }
         user.profile.first_name = firstname;
        user.profile.last_name = lastname;
        user.profile.company_name=company_name;
        user.profile.company_category=company_category;
        user.profile.owner_status=owner_status;
         user.profile.billing_address = JSON.parse(billing_address);
        user.profile.shipping_address = JSON.parse(shipping_address);
        user.profile.mobile = JSON.parse(mobile);
        user.profile.email = email;
        user.profile.gstin = gstin;
        user.profile.pan_number = pan_number;
        user.profile.cin_number = cin_number;


        if(req.files)
      {  if(req.files.logo&&req.files.logo[0])
        { 
          user.profile.company_logo =req.files.logo[0].path.replace('\\','/');     
       }
        
         if(req.files.profile&&req.files.profile[0])
         user.profile.profile_picture =  req.files.profile[0].path.replace('\\','/');
        
         if(req.files.cardfront&&req.files.cardfront[0])
         user.profile.business_card.front =  req.files.cardfront[0].path.replace('\\','/');
        
         if(req.files.cardback&&req.files.cardback[0])
         user.profile.business_card.back =  req.files.cardback[0].path.replace('\\','/');

         if(req.files.gst_certificate&&req.files.gst_certificate[0])
         user.statutary_details.gst_certificate =  req.files.gst_certificate[0].path.replace('\\','/');
      }
          // save user
          user
            .save()
            .then(user => {
              control.user_counter+=1;
              control.save(); 
              resolve({
                success: true,
                message: "User registered successfully!"
              });
            })
            .catch(err => {
              reject(err);
            });
        } else {
          resolve({
            success: false,
            message: "User already exists! Please login"
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
})
}

function editEmployer(req,res) {
 
  const schema = Joi.object().keys({
    id: Joi.string()
      .min(12)
      .required(),
      firstname: Joi.string(),
      lastname: Joi.string(),
      company_name: Joi.string(),    
      company_category: Joi.string(),  
      owner_status: Joi.string(), 
      billing_address: {
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        zip: Joi.string(),
        landline:Joi.object().keys({
          std_code:Joi.string(),
          landline:Joi.string()
       }),
       fax:Joi.object().keys({
        std_code:Joi.string(),
        fax:Joi.string()
     }),
      },
      shipping_address: {
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        zip: Joi.string(),
        landline:Joi.object().keys({
          std_code:Joi.string(),
          landline:Joi.string()
       }),
       fax:Joi.object().keys({
        std_code:Joi.string(),
        fax:Joi.string()
     }),
      },
       mobile:Joi.object().keys({
         country_code:Joi.string(),
         mobile:Joi.string()
      }),
   email: Joi.string(),  
   gstin:Joi.string(),
   pan_number:Joi.string(),
   cin_number:Joi.string()  
  });
  return new Promise((resolve, reject) => {
    upload(req, res, function(err) {

      if (err) {
         reject(err);
         return;
       }

    const userParam = req.body;
    const { error, value } = schema.validate(userParam);
    if (error) {
      reject(error);
      return;
    }

    let { id,firstname,
      lastname,
      company_name,   
      company_category,  
      owner_status,
      billing_address,  
      shipping_address,  
      mobile,
      email,   
      gstin,
      pan_number,    
      cin_number     } = userParam;

   
    // validate
    User.findById(id)
      .then( async user => {
        if (user) {         
        
       
         user.profile.first_name = firstname;
        user.profile.last_name = lastname;
        user.profile.company_name=company_name;
        user.profile.company_category=company_category;
        user.profile.owner_status=owner_status;
         user.profile.billing_address = JSON.parse(billing_address);
        user.profile.shipping_address = JSON.parse(shipping_address);
        user.profile.mobile = JSON.parse(mobile);
        user.profile.email = email;
        user.profile.gstin = gstin;
        user.profile.pan_number = pan_number;
        user.profile.cin_number = cin_number;


        if(req.files)
      {  if(req.files.logo&&req.files.logo[0])
        { 
          user.profile.company_logo =req.files.logo[0].path.replace('\\','/');     
       }
        
         if(req.files.profile&&req.files.profile[0])
         user.profile.profile_picture =  req.files.profile[0].path.replace('\\','/');
        
         if(req.files.cardfront&&req.files.cardfront[0])
         user.profile.business_card.front =  req.files.cardfront[0].path.replace('\\','/');
        
         if(req.files.cardback&&req.files.cardback[0])
         user.profile.business_card.back =  req.files.cardback[0].path.replace('\\','/');

         if(req.files.gst_certificate&&req.files.gst_certificate[0])
         user.statutary_details.gst_certificate =  req.files.gst_certificate[0].path.replace('\\','/');
      }
          // save user
          user
            .save()
            .then(user => {
              resolve({
                success: true,
                message: "Employer created successfully!"
              });
            })
            .catch(err => {
              reject(err);
            });
        } else {
          resolve({
            success: false,
            message: "Employer not found!"
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
})
}

function authenticate(req) {
  const schema = Joi.object().keys({
    username: Joi.string()
      .min(10)
      .max(40)
      .required(),
    password: Joi.string().min(8)
    .max(30).required()
  });
  console.log(req.body);

  return new Promise(async (resolve, reject) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      reject(error);
      return;
    }

    const {username,password}=req.body;
    return await User.findOne({
      "account.username": username,deleted:false
    })
      .then(user => {
        if(!user)
        {
          resolve({success:false,message:'Invalid username or password!'})
          return;
        }
        if (user.account.salt&& user.validPassword(password)) 
        {   
          const token = jwt.sign({ sub: user.id, role: user.account.role }, config.secret);
          resolve({
            success: true,
            message: "Authentication Successful!",
            id: user.id,
            role:user.account.role,
            token: token
          });        
        }
         else resolve({ success: false, message: "Invalid Password!" });
      })
      .catch(err => {
        reject(err);
      });
  });
}

function changePassword(req) {
  const schema = Joi.object().keys({
    id: Joi.string()
        .min(24)
        .max(24)  ,
        password: Joi.string().min(8)
        .max(30).required(),
    newpassword: Joi.string().min(8)
    .max(30).required()
  });

  return new Promise(async (resolve, reject) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      reject(error);
      return;
    }

    const {id,password,newpassword}=req.body;
    return await User.findById(id)
      .then(user => {
        if(!user)
        {
          reject({success:false,message:'User not found'})
          return;
        }
        if (user.account.salt&& user.validPassword(password)) 
        {
        
         user.setPassword(newpassword);
             resolve({ success: true, message: "Password Updated!" });
        }
        else    resolve({ success: false, message: "Invalid Password" });
     
      })
      .catch(err => {
        reject(err);
      });
  });
}

 function getById(id) {
  return new Promise( (resolve, reject) => {
    const schema = Joi.object().keys({
      id: Joi.string()
        .min(24)
        .max(24)    
    });

    const { error, value } = schema.validate({id});
    if (error) {
      reject(error);
      return;
    }

     User.findById(id).select(['-account.salt','-account.hash','-account.token','-account.securityCode'])
      .then(user => {
        if (!user)
         resolve({ success: false, message: "User not found" });
        else resolve({ success: true, user:user });
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getAll(query) {
  return new Promise( (resolve, reject) => {  
   filter={};  
  if(query.type)
  {
    const schema = Joi.object().keys({
      type:Joi.string().allow(['ADMIN','EMPLOYER','SUPER_ADMIN','VERIFIER','VENDOR'])
    });
    
  const { error, value } = schema.validate(query);
  console.log(error,value)
  if (error)
  {   
  reject(error);
  return;
  }
    var type=query.type.toUpperCase();  
    filter={'account.role':type,deleted:false}
  }  
  else {
    filter={deleted:false}
  }
  
     User.find(filter,{'account.salt':0,'account.hash':0,'account.token':0,'account.securityCode':0}).sort({'account.created_on':-1})
      .then(users => {
        if (!users)
         resolve({ success: false, message: "No users found" });
        else resolve({ success: true, users:users });
      })
      .catch(err => {
        reject(err);
      });
  });
}

function completeProfile(req, res) {
  return new Promise((resolve, reject) => {
     const schema = Joi.object().keys({
    id: Joi.string()
      .min(24)
      .max(24)
      .required(),
    first_name: Joi.string(),
    last_name: Joi.string(),
    company_name: Joi.string(),    
    billing_address: {
      street: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      zip: Joi.string(),
      landline:Joi.object().keys({
        std_code:Joi.string(),
        landline:Joi.string()
     }),
     fax:Joi.object().keys({
      std_code:Joi.string(),
      fax:Joi.string()
   }),
    },
    shipping_address: {
      street: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      zip: Joi.string(),
      landline:Joi.object().keys({
        std_code:Joi.string(),
        landline:Joi.string()
     }),
     fax:Joi.object().keys({
      std_code:Joi.string(),
      fax:Joi.string()
   }),
    },
     mobile:Joi.object().keys({
       country_code:Joi.string(),
       mobile:Joi.string()
    }),
 email: Joi.string(),  
 gstin:Joi.string(),
 pan_number:Joi.string(),
 cin_number:Joi.string()  
  });

  const { error, value } = schema.validate(req.body);

  if (error) {   
  reject(error);
  return;
  }
  const {
    id,   
    first_name,
    last_name,
    company_name,   
    billing_address,  
    shipping_address,  
    mobile,
    email,   
    gstin,
    pan_number,    
    cin_number    
  } = req.body;

 
   return User.findById(id)
      .then(user => {
        if (!user) 
        reject({ 
          success: false, message: "User not found" 
        });

        first_name && (user.profile.first_name = first_name);
        last_name && (user.profile.last_name = last_name);
        company_name&&(user.profile.company_name=company_name);
        billing_address && (user.profile.billing_address = billing_address);
        shipping_address && (user.profile.shipping_address = shipping_address);
        mobile && (user.profile.mobile = mobile);
        email && (user.profile.email = email);
        gstin && (user.profile.gstin = gstin);
        pan_number && (user.profile.pan_number = pan_number);
        cin_number && (user.profile.cin_number = cin_number);

        return user.save().then(res => {          
            resolve({ success: "true", 
            message: "User profile updated." });
          })
          .catch(err => {
            console.log(err);
            reject({ success: false, message: err });
          });
      }).catch(error => {
        console.log(error);
        reject({ success: false, message: error });
      });
  });
}

function changeStatus(req, res) {
  return new Promise((resolve, reject) => {
     const schema = Joi.object().keys({
    id: Joi.string()
      .min(24)
      .max(24)
      .required(),
   status:Joi.string().allow([Status.VERIFIED,Status.REGISTERED,Status.PENDING,Status.BLOCKED])
  });

  const { error, value } = schema.validate(req.body);

  if (error) {   
  reject(error);
  return;
  }
  const {
    id,   
   status
  } = req.body;
 
   return User.findById(id)
      .then(user => {
        if (!user) 
        reject({ 
          success: false, message: "User not found" 
        });

        user.account.status=status;     
   

        return user.save().then(res => {          
            resolve({ success: "true", 
            message: "User status updated." });
          })
          .catch(err => {
            console.log(err);
            reject({ success: false, message: err });
          });
      }).catch(error => {
        console.log(error);
        reject({ success: false, message: error });
      });
  });
}

function changeRole(req, res) {
  return new Promise((resolve, reject) => {
     const schema = Joi.object().keys({
    id: Joi.string()
      .min(24)
      .max(24)
      .required(),
   role:Joi.string().allow([Role.ADMIN,Role.EMPLOYER,Role.SUPER_ADMIN,Role.VERIFIER,Role.VENDOR])
  });

  const { error, value } = schema.validate(req.body);

  if (error) {   
  reject(error);
  return;
  }
  const {
    id,   
    role
  } = req.body;
 
   return User.findById(id)
      .then(user => {
        if (!user) 
        reject({ 
          success: false, message: "User not found" 
        });

        user.account.role=role;     
   

        return user.save().then(res => {          
            resolve({ success: "true", 
            message: "User role updated." });
          })
          .catch(err => {
            console.log(err);
            reject({ success: false, message: err });
          });
      }).catch(error => {
        console.log(error);
        reject({ success: false, message: error });
      });
  });
}

function activate(req, res) {
  return new Promise((resolve, reject) => {
     const schema = Joi.object().keys({
    id: Joi.string()
      .min(24)
      .max(24)
      .required(),
   value:Joi.boolean()
  });

  const { error, val } = schema.validate(req.body);

  if (error) {   
  reject(error);
  return;
  }
  const {
    id,   
    value
  } = req.body;
 
   return User.findById(id)
      .then(user => {
        if (!user) 
        reject({ 
          success: false, message: "User not found" 
        });

        user.account.active=value;    

        return user.save().then(res => {          
            resolve({ success: "true", 
            message: "User  activated." });
          })
          .catch(err => {
            console.log(err);
            reject({ success: false, message: err });
          });
      }).catch(error => {
        console.log(error);
        reject({ success: false, message: error });
      });
  });
}

 function updateImages(req, res) { 
  return new Promise( (resolve, reject) => {
    upload(req, res, function(err) {

     if (err) {
        reject(err);
        return;
      }

      const schema = Joi.object().keys({
        id: Joi.string()
          .min(24)
          .max(24)
          .required()
      });
      const { error, value } = schema.validate(req.body);

      if (error) {
        reject(error);
        return;
      }
      const {id}=req.body;
     
      User.findById(id)
        .then(user => {
         
          if (!user) {
            resolve({ success: false, message: "User not found" });
          }
console.log(req.files)

 
          const outputfile = helper.getServerUrl(req) + "images/";
        
          if(req.files.logo&&req.files.logo[0])
         { user.profile.company_logo = outputfile + req.files.logo[0].filename;
      // console.log( resizeFile("./images/"+req.files.logo[0].filename,150,150,"./images/img2.jpg"))
        }
         
          if(req.files.profile&&req.files.profile[0])
          user.profile.profile_picture = outputfile + req.files.profile[0].filename;
         
          if(req.files.cardfront&&req.files.cardfront[0])
          user.profile.business_card.front = outputfile + req.files.cardfront[0].filename;
         
          if(req.files.cardback&&req.files.cardback[0])
          user.profile.business_card.back = outputfile + req.files.cardback[0].filename;

          if(req.files.gst_certificate&&req.files.gst_certificate[0])
          user.statutary_details.gst_certificate = outputfile + req.files.gst_certificate[0].filename;
          
          user.save()
            .then(res => {
              resolve({ success: true, message: "User images updated." });
            })
            .catch(err => {
              reject({ success: false, message: err });
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  });
}


 function resizeFile(src,height,width,dest)
 {
  
  return  Jimp.read(src)
  .then(lenna => {
    lenna
      .resize(height, width) // resize
      .quality(60) // set JPEG quality
      .write(dest); // save
      helper.moveFile(dest, './images');
      return;
     // resolve({sucess:true,message:'image resized'})
  })
  .catch(err => {
    console.error(err);
   // resolve({sucess:false,message:'Error in resizing'})
  });

 }

 function _delete(req) {
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
     User.findById(id)
      .then(user => {
        if (!user)
         resolve({ success: false, message: "User not found" });        
         user.deleted=true;
         user.save().then(()=>{
            resolve({ success: true, message:'User deleted' });
         }).catch(err=>{
           reject({success:false,error:err})
         })
        
      })
      .catch(err => {
        reject(err);
      });
  });
}
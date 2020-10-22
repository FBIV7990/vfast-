const config = require("config.json");
const db = require("_helpers/db");
const Joi = require("@hapi/joi");

const status=require('../_helpers/BillStatus')
const emailService=require('./email.service')
const helper = require("../_helpers/helper");

const Invoice=db.Invoice;

const Verification=db.Verification;
const Control=db.Control;
const Lead =db.Lead;

const termsandConditions=["1. Products damaged during the transit will not be covered under the warranty.",
"2. The product carries a 90 days warranty unless otherwise stated.",
"3. The product carries only manufacturer’s warranty and no return or exchange will be entertained."]

module.exports = {
  add, 
  update,
  getAll, 
  remove,
  getById
  };


function numberToEnglish( n ) {
		
    var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = 'and';
  
    /* Remove spaces and commas */
    string = string.replace(/[, ]/g,"");
  
    /* Is number zero? */
    if( parseInt( string ) === 0 ) {
      return 'zero';
    }
    
    /* Array of units as words */
    units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    
    /* Array of tens as words */
    tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    
    /* Array of scales as words */
    scales = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];
    
    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while( start > 0 ) {
      end = start;
      chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
    }
    
    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if( chunksLen > scales.length ) {
      return '';
    }
    
    /* Stringify each integer in each chunk */
    words = [];
    for( i = 0; i < chunksLen; i++ ) {
      
      chunk = parseInt( chunks[i] );
      
      if( chunk ) {
        
        /* Split chunk into array of individual integers */
        ints = chunks[i].split( '' ).reverse().map( parseFloat );
      
        /* If tens integer is 1, i.e. 10, then add 10 to units integer */
        if( ints[1] === 1 ) {
          ints[0] += 10;
        }
        
        /* Add scale word if chunk is not zero and array item exists */
        if( ( word = scales[i] ) ) {
          words.push( word );
        }
        
        /* Add unit word if array item exists */
        if( ( word = units[ ints[0] ] ) ) {
          words.push( word );
        }
        
        /* Add tens word if array item exists */
        if( ( word = tens[ ints[1] ] ) ) {
          words.push( word );
        }
        
        /* Add 'and' string after units or tens integer if: */
        if( ints[0] || ints[1] ) {
          
          /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
          if( ints[2] || (i + 1) > chunksLen ) {
            words.push( and );
          }
  
        
        }
        
        /* Add hundreds word if array item exists */
        if( ( word = units[ ints[2] ] ) ) {
          words.push( word + ' hundred' );
        }
        
      }
      
    }
    
    return words.reverse().join( ' ' );
    
}

function add(req) {
  const invoiceParams = req.body;
  const schema = Joi.object().keys({
    employer_id: Joi.string()
    .min(24)
    .max(24)
    .required(), 
    services:Joi.array().items(
      Joi.object().keys({
        verification_id: Joi.string()
        .min(24)
        .max(24)
        .required()
      })
    ),
    discount:Joi.number()    
  });

  return new Promise(async(resolve, reject) => {
    const { error, value } = schema.validate(invoiceParams);
    if (error) {
      reject(error);
      return;
    }

    const { employer_id,services,discount } = invoiceParams;

    const invoice=new Invoice();
    const control=await Control.findOne();
    invoice.invoice_num=control.invoice_prefix+helper.paddNumber(control.invoice_counter);   
    invoice.employer_id=employer_id;
    var totalPrice=0;
    var totalSGST=0;
    var totalIGST=0;
    var totalCGST=0;
    var totalAmount=0;

    var resServices=[];

    for(var i=0;i<services.length;i++)
    {
      const service=services[i];
      
           const verification=await Verification.findById(service.verification_id);
           const lead=await Lead.findById(verification.lead_id).populate('employee_id');
            
           const state=lead.employee_id.state;      
           var igstPerc;
           var sgstPerc;
           var cgstPerc;
           if(state.toUpperCase()=='DELHI')        
           {
           igstPerc=18;
           sgstPerc=0;
           cgstPerc=0;              
           }
           else {
            igstPerc=0;
            sgstPerc=9;
            cgstPerc=9;  
           }
        
        var quantity=1;
  
        const price=verification.employer_cost;
  
        var igst=(price*quantity*igstPerc)/100;
        var sgst=(price*quantity*sgstPerc)/100;
        var cgst=(price*quantity*cgstPerc)/100;
        var amount=(price*quantity)+igst+sgst+cgst;
  
        totalSGST+=sgst;
        totalIGST+=igst;
        totalCGST+=cgst;
  
        totalPrice+=price;
        totalAmount+=amount;        
  
        resServices.push({
        verification_id:service.verification_id,
        hsn_code:'hsncode',
        quantity:quantity,
        service:verification.checkname,
        price:price,
        igst:igst,
        sgst:sgst,
        cgst:cgst,
        amount:amount
        })
    }


    console.log(resServices);
    invoice.services=resServices;
    invoice.total_price=totalPrice;
    invoice.discount=discount;
    invoice.total_tax=(totalCGST+totalIGST+totalSGST);
    invoice.total_amount=totalAmount-discount;
    invoice.status=status.UNPAID;
    invoice.amount_in_words=numberToEnglish(invoice.total_amount)
   invoice.save().then(res=>{
    control.report_counter+=1;
    control.save(); 

   resolve({success:true,message:'Invoice saved!'})
 }).catch(err=>{
   console.log(err);
   resolve({success:false,message:'Error in saving invoice!'})
 })
   
  });
}

function update(req) {
  const invoiceParams = req.body;
  const schema = Joi.object().keys({
    invoice_id:Joi.string().min(24)
    .max(24).required(), 
    services:Joi.array().items(
      Joi.object().keys({
        verification_id: Joi.string()
        .min(24)
        .max(24)
        .required()
      })
    ),
    discount:Joi.number()    
  });

  return new Promise(async(resolve, reject) => {
    const { error, value } = schema.validate(invoiceParams);
    if (error) {
      reject(error);
      return;
    }

    const { employer_id,services,discount } = invoiceParams;

    const invoice=new Invoice();
    const control=await Control.findOne();
    invoice.invoice_num=control.report_prefix+helper.paddNumber(control.report_counter);   
    invoice.employer_id=employer_id;
    var totalPrice=0;
    var totalSGST=0;
    var totalIGST=0;
    var totalCGST=0;
    var totalAmount=0;

    var resServices=[];

    for(var i=0;i<services.length;i++)
    {
      const service=services[i];
      
           const verification=await Verification.findById(service.verification_id);
           const lead=await Lead.findById(verification.lead_id).populate('employee_id');
            
           const state=lead.employee_id.state;      
           var igstPerc;
           var sgstPerc;
           var cgstPerc;
           if(state.toUpperCase()=='DELHI')        
           {
           igstPerc=18;
           sgstPerc=0;
           cgstPerc=0;              
           }
           else {
            igstPerc=0;
            sgstPerc=9;
            cgstPerc=9;  
           }
        
        var quantity=1;
  
        const price=verification.employer_cost;
  
        var igst=(price*quantity*igstPerc)/100;
        var sgst=(price*quantity*sgstPerc)/100;
        var cgst=(price*quantity*cgstPerc)/100;
        var amount=(price*quantity)+igst+sgst+cgst;
  
        totalSGST+=sgst;
        totalIGST+=igst;
        totalCGST+=cgst;
  
        totalPrice+=price;
        totalAmount+=amount;        
  
        resServices.push({
        verification_id:service.verification_id,
        hsn_code:'hsncode',
        quantity:quantity,
        service:verification.checkname,
        price:price,
        igst:igst,
        sgst:sgst,
        cgst:cgst,
        amount:amount
        })
    }


    console.log(resServices);
    invoice.services=resServices;
    invoice.total_price=totalPrice;
    invoice.discount=discount;
    invoice.total_tax=(totalCGST+totalIGST+totalSGST);
    invoice.total_amount=totalAmount-discount;
    invoice.status=status.UNPAID;
    invoice.amount_in_words=numberToEnglish(invoice.total_amount)
   invoice.save().then(res=>{
    control.report_counter+=1;
    control.save(); 

   resolve({success:true,message:'Invoice saved!'})
 }).catch(err=>{
   console.log(err);
   resolve({success:false,message:'Error in saving invoice!'})
 })
   
  });
}



function getAll() {
  return new Promise((resolve, reject) => {
    Invoice.find({ deleted: false }).then(invoices => {
        if (!invoices)
         resolve({ success: false, message: "No invoices found" });
        else resolve({ success: true, invoices: invoices });
      })
      .catch(err => {
        reject(err);
      });
  });
}

function remove(req){

 
  return new Promise((resolve, reject) => {
    const schema = Joi.object().keys({
      invoice_id: Joi.string()
        .min(24)
        .max(24)
    });

    const invoiceParams = req.body;

    const { error, value } = schema.validate(invoiceParams);
    if (error) {
      reject(error);
      return;
    }
    const {invoice_id}=invoiceParams;

    Invoice.findById(invoice_id)
      .then(invoice => {
        if (!invoice) 
        resolve({ success: false, message: "Invoice not found" });
        else {   
               invoice.deleted=true;
               invoice.save().then(verif=>{
                 resolve({success:true,message:'Invoice deleted'});
               }).catch(err=>{
                resolve({success:false,message:'Error in deleting invoice'});
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
    Invoice.findById(id).populate('employer_id','profile statutary_details').lean()
      .then(invoice => {
        if (!invoice) resolve({ success: false, message: "Invoice not found" });
        else {        
            resolve({ success: true, invoice:{...invoice,termsandConditions:termsandConditions}});
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

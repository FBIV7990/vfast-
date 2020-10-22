import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import userImage from '../../../img/user.png';

import gst from '../../../img/gst.jpg';
import card from '../../../img/card.jpg';
import logoImage from '../../../img/default.jpg';
import { vendorActions, } from "../../../actions";

class NewVendor extends React.Component {
  constructor(props) {
    super(props);
    this.avatar = React.createRef();
    this.logoFile = React.createRef();
    this.bannerFileFront= React.createRef();
    this.bannerFileBack= React.createRef();
    this.gstFile= React.createRef();
    this.state = {
     
        country_code:"",
        mobile:"",
        email:"",
        first_name:"",
        last_name:"",
        logo:logoImage,
        bannerFront:card,
        bannerBack:card,
        gstCertificate:gst,
        company:'',
  
        billStreet:'',
        billCity:'',
        billState:'',
        billCountry:'',
        billZip:'',
        billLandlinestd:'',
        billLandline:'',
        billFaxstd:'',
        billFax:'',
  
        shippingStreet:'',
      shippingCity:'',
        shippingState:'',
        shippingCountry:'',
        shippingZip:'',
        shippingLandlinestd:'',
        shippingLandline:'',
        shippingFaxstd:'',
        shippingFax:'',
        
        countryCode:'',
        mobile:'',
        email:'',
        website:'',
        gstin:'',
        pan:'',
        cin:'',
        username: "",
        password: "",
        firstname:'',
        lastname:'',
        profile:userImage,
        mobile:'',
        email:'',
        blank:'',
        company_category:'',
        owner_status:'',
    };
  }

  componentDidMount() {}
  onCheckValue(){
    const {billCity,billCountry,billFax,billLandlinestd,billLandline,billState,billStreet,billFaxstd,billZip} =this.state;
    this.setState({
      shippingStreet:billStreet,
      shippingCity:billCity,
     shippingCountry:billCountry,
      shippingFax:billFax,
      shippingFaxstd:billFaxstd,
      shippingLandline:billLandline,
      shippingLandlinestd:billLandlinestd,
      shippingState:billState,
      shippingZip:billZip,
    })
  }


  onChangeGst(){
    // Assuming only image
    var file = this.gstFile.current.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
  
     reader.onloadend = function (e) {
        this.setState({
            gstCertificate: [reader.result]
        })
      }.bind(this);
    console.log(url) // Would see a path?
    // TODO: concat files
  }
  onChangeProfile(){
    // Assuming only image
    var file = this.avatar.current.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
  
     reader.onloadend = function (e) {
        this.setState({
            profile: [reader.result]
        })
      }.bind(this);
    console.log(url) // Would see a path?
    // TODO: concat files
  }
  onChangeLogo(){
    // Assuming only image
    var file = this.logoFile.current.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
  
     reader.onloadend = function (e) {
        this.setState({
            logo: [reader.result]
        })
      }.bind(this);
    console.log(url) // Would see a path?
    // TODO: concat files
  }
  onChangebannerFront(){
    // Assuming only image
    var file = this.bannerFileFront.current.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
  
     reader.onloadend = function (e) {
        this.setState({
            bannerFront: [reader.result]
        })
      }.bind(this);
    console.log(url) // Would see a path?
    // TODO: concat files
  }
  onChangebannerBack(){
    // Assuming only image
    var file = this.bannerFileBack.current.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
  
     reader.onloadend = function (e) {
        this.setState({
            bannerBack: [reader.result]
        })
      }.bind(this);
    console.log(url) // Would see a path?
    // TODO: concat files
  }

  onChangeValue(e,key){
    this.setState({[key]:e.target.value})
  }

  onSubmit() {
    const { user,saveUser,alert,dispatch } = this.props;
    console.log('logging viewUser',user)
    const {countryCode,mobile,email,first_name,last_name,gstCertificate,company,
      billCity,billStreet,billState,billCountry,billZip,billLandlinestd,billLandline,billFaxstd,billFax,
      shippingCity,shippingStreet,shippingState,shippingCountry,shippingZip,shippingLandlinestd,
      shippingLandline,shippingFaxstd,shippingFax,website,gstin,pan,cin,country_code,username} = this.state;
console.log('logging nweVendor:',this.state);

  if(this.state.email!=''&& this.state.first_name!=''&&this.state.last_name!='' && this.state.billCountry!='' &&
  this.state.billState!='' && this.state.billCity!='' && this.state.billStreet!='' && this.state.billZip!='' && 
  this.state.shippingStreet!='' && this.state.shippingCountry!='' &&this.state.shippingState!='' &&
  this.state.shippingCity!='' && this.state.shippingZip!='' &&
  this.state.gstin!='' && this.state.cin!='' && this.state.pan!=''){

    if (username)
    { 
     const  onlyNumbers = /^[0-9]+$/;      
     const res=  onlyNumbers.test(username);   
     let uname=username;   
     if(res)      
     {
       uname='91'+username; 
     }
     const formdata = new FormData();
     formdata.append('username',uname)
      formdata.append('firstname',first_name);
      formdata.append('lastname',last_name);
      formdata.append('company_name',company);
  
  formdata.append('billing_address',JSON.stringify({
  street:billStreet,
  city:billCity,
  state:billState,
  country:billCountry,
  zip:billZip,
  landline:{
    std_code:billLandlinestd,
    landline:billLandline
  },
  fax:{
    std_code:billFaxstd,
    fax:billFax,
  }
  }))
  formdata.append('shipping_address',JSON.stringify({
  street:shippingStreet,
  city:shippingCity,
  state:shippingState,
  country:shippingCountry,
  zip:shippingZip,
  landline:{
    std_code:shippingLandlinestd,
    landline:shippingLandline
  },
  fax:{
    std_code:shippingFaxstd,
    fax:shippingFax
  }
  }));
  formdata.append('mobile',JSON.stringify({
    country_code:country_code,
    mobile:mobile
  }));
  
  formdata.append('email',email);
  formdata.append('gstin',gstin);
  formdata.append('pan_number',pan);
  formdata.append('cin_number',cin);
      if(this.avatar.current.files[0])
            formdata.append('profile',this.avatar.current.files[0]);
  
      if(this.logoFile.current.files[0])
      formdata.append('logo',this.logoFile.current.files[0]);
  
      if(this.bannerFileFront.current.files[0])
      formdata.append('cardfront',this.bannerFileFront.current.files[0]);
  
      if(this.bannerFileBack.current.files[0])
      formdata.append('cardback',this.bannerFileBack.current.files[0]);
  
      if(this.gstFile.current.files[0])
      formdata.append('gst_certificate',this.gstFile.current.files[0]);
      dispatch(vendorActions.create(formdata));}
    }
      
      else {
        console.log('Field missing')
      }
  }

  render() {
    const { user, alert } = this.props;
    const { username, password } = this.state;

    return (
      <>          
       <div className='container'>
      <div className='row'>
<div className='col-sm-12' style={{padding:'10px',
 backgroundColor:'white',
//  margin:'10px 0px',
 borderRadius:'7px',
 boxShadow:"rgb(71, 65, 62) 0px 4px 11px -6px"}}>
   <div className='col-sm-12'>
   <div style={{textAlign:'center'}}> <h3 style={{background:'#2C3B4C',color:'white',padding:'5px'}}>Profile</h3></div>
   <div className='col-sm-8 '>
     <div className='col-sm-12' style={{padding:'0px'}}>
       <div className='col-sm-6'>
       <div><label>Username</label> <br/><input className='form-input' type="text" 
value={this.state.username} required='required'
 placeholder='Email or Mobile'
 onChange={(event)=>{this.onChangeValue(event,'username')}} /> </div>
       </div>
       <div className='col-sm-6'>  <div style={{paddingLeft:'6px'}}><label>Mobile :</label><br/>
        <input className='std-input' type="text"
         style={{borderBottom:'1px solid #2C3B4C',width:'50px'}} required='required'
         value={this.state.country_code} 
         placeholder='+91'
   onChange={(event)=>{this.onChangeValue(event,'country_code')}}
         />
         <input className='num-input' type="number"
              style={{borderBottom:'1px solid #2C3B4C',borderLeft:'1px solid #2C3B4C'}} required='required'
        value={this.state.mobile}
          placeholder='Mobile' 
      onChange={(event)=>{this.onChangeValue(event,'mobile')}}
          /> </div></div>
     </div>
 <div className='col-sm-12' style={{padding:'0px'}}>
<div className='col-sm-6'>
<div><label>First name</label> <br/><input className='form-input' type='text' required='required'
value={this.state.first_name}
 placeholder='First name'
 onChange={(event)=>{this.onChangeValue(event,'first_name')}} /> </div>
</div>
<div className='col-sm-6'>
<div><label>Last name</label> <br/><input className='form-input' type="text" required='required'
value={this.state.last_name}
 placeholder='Last name'
 onChange={(event)=>{this.onChangeValue(event,'last_name')}} /> </div>
  </div>
</div>
<div className='col-sm-12' style={{padding:'0px'}}>
<div className='col-sm-6'>
<div><label>Email</label> <br/><input className='form-input' type="text" required='required'
value={this.state.email}
 placeholder='Email'
 onChange={(event)=>{this.onChangeValue(event,'email')}} /> </div>
</div>
<div className='col-sm-6'>

  </div>
</div>
</div>
<div className='col-sm-4 vl' style={{height:'280px'}}>
<div><label>Profile picture</label><br/> </div>

<img src={this.state.profile} style={{margin:' 0px 0px 3px 10px',borderRadius:'5%',height:'200px',width:'200px'}} /><br/>
<div class="upload-btn-wrapper" style={{margin:'7px 0px 5px 10px'}}>
<button class="image-btn">Upload a file</button>
<input type="file" name="myfile" ref={this.avatar} onChange={()=>{this.onChangeProfile()}} maxLength='1200' />
</div>
               
     </div>
<br/>
</div>

<div className='col-sm-12'
style={{padding:'10px'}}>
  <div className='col-sm-12'>
  <div className='col-sm-4'>
  <div><label>Company :</label><br/> <input className='form-input' type="text" 
value={this.state.company} required='required'
placeholder='Company Name'
onChange={(event)=>{this.onChangeValue(event,'company')}} /> </div>
  </div>

  <div className='col-sm-4'>
  <div><label>Company category :</label><br/> 
  <select style={{margin:'7px'}} value={this.state.company_category} required='required'
onChange={(event)=>{this.onChangeValue(event,'company_category')}} >         
       <option name="category" value='proprietorship'>Proprietorship</option> 
       <option name="category" value='partnership'>Partnership</option> 
       <option name="category" value='llc'>LLC</option> 
       <option name="category" value='pvtltd'>Pvt. ltd.</option> 
       <option name="category" value='other'>Other</option> 
     
   </select>  </div>
  </div>

  <div className='col-sm-4'>
  <div><label>Owner status :</label><br/> 
  <select style={{margin:'7px'}} value={this.state.owner_status} required='required'
onChange={(event)=>{this.onChangeValue(event,'owner_status')}} >         
       <option name="status" value="Individual">Individual</option> 
       <option name="status" value="Proprietor">Proprietor</option> 
       <option name="status" value="Partner">Partner</option> 
       <option name="status" value="Director">Director</option> 
       <option name="status" value="HRM">HRM</option> 
       <option name="status" value="HR Executive">HR Executive</option> 
       <option name="status" value="Authorised signatory">Authorised Signatory</option> 
       <option name="status" value="other">Other</option> 
     
   </select>  </div>
  </div>
  
</div>
{/* <div><h3>Profile Info</h3></div> */}
<div><label>Billing Address :</label></div>
<div className='col-sm-12'>
<div className='col-sm-4'>
<div> <label>  Street : </label><br/> <input className='form-input' type="text" required='required'
value={this.state.billStreet}
placeholder='Street/Society'
onChange={(event)=>{this.onChangeValue(event,'billStreet')}}
/> </div>
</div>
<div className='col-sm-4'>
<div> <label> City: </label><br/><input className='form-input' type="text" required='required'
value={this.state.billCity} 
placeholder='City'
onChange={(event)=>{this.onChangeValue(event,'billCity')}}/></div>
</div>
<div className='col-sm-4'>
<div> <label> State:</label> <br/><input className='form-input' type="text" required='required'
value={this.state.billState}
placeholder='State'
onChange={(event)=>{this.onChangeValue(event,'billState')}} /> </div> 
</div>
</div>
<div className='col-sm-12'>
<div className='col-sm-4'>
<div> <label> Country: </label><br/><input className='form-input' type="text" required='required'
value={this.state.billCountry} 
placeholder='Country'
onChange={(event)=>{this.onChangeValue(event,'billCountry')}} />  </div>
</div>
<div className='col-sm-4'>
<div> <label> zip:</label> <br/><input className='form-input' type="text" required='required'
value={this.state.billZip} 
placeholder='Zipcode'
onChange={(event)=>{this.onChangeValue(event,'billZip')}}
/> </div>
</div>
<div className='col-sm-4'>
<div style={{paddingLeft:'6px'}} > <label>Landline:</label> <br/>
<input type="text" 
className='std-input' style={{borderBottom:'1px solid #2C3B4C',width:'50px'}}
value={this.state.billLandlinestd} 
placeholder='STD'
onChange={(event)=>{this.onChangeValue(event,'billLandlinestd')}}/>
<input type="text"
className='num-input' style={{borderBottom:'1px solid #2C3B4C',borderLeft:'1px solid #2C3B4C'}}
value={this.state.billLandline}
placeholder='landline'
onChange={(event)=>{this.onChangeValue(event,'billLandline')}}
/>
</div>
</div>
</div>

<div className='col-sm-12'>
<div className='col-sm-4'>
<div style={{padding:'6px'}}> <label> Fax</label><br/>
<input className='std-input' type="text"
style={{borderBottom:'1px solid #2C3B4C',width:'50px'}}
value={this.state.billFaxstd}
placeholder='STD'
onChange={(event)=>{this.onChangeValue(event,'billFaxstd')}} 
/>
<input className='num-input' type="text"
style={{borderBottom:'1px solid #2C3B4C',borderLeft:'1px solid #2C3B4C'}}
value={this.state.billFax}
placeholder='Fax'
onChange={(event)=>{this.onChangeValue(event,'billFax')}} 
/> </div></div>
<div className='col-sm-4'>
</div>
<div className='col-sm-4'></div>
<br/>
</div>
<div className='col-sm-12' style={{padding:'10px'}}>
   <div className='col-sm-1' style={{padding:'0px'}}>
<input className='form-input' type='checkbox' onClick={()=>{this.onCheckValue()}} 
style={{height:'30px',minWidth:'80px'}}/>
</div>
<div className='col-sm-7' style={{padding:'0px'}}>
<div style={{paddingTop:'10px',color:'#2C3B4C',fontSize:'15px',fontWeight:'600'}}>Same As above</div>
</div>
<div className='col-sm-4'></div>
</div>
<hr/>
<div><label>Shipping Address :</label><br/>
<div className='col-sm-12'>
<div className='col-sm-4'>
<div> <label>Street :</label> <br/> <input className='form-input'  type="text" required='required'
value={this.state.shippingStreet}
placeholder='Street/Society'
onChange={(event)=>{this.onChangeValue(event,'shippingStreet')}} 
/> </div>
</div>
<div className='col-sm-4'>
<div> <label>City:</label><br/> <input className='form-input' type="text" required='required'
value={this.state.shippingCity} 
placeholder='City'
onChange={(event)=>{this.onChangeValue(event,'shippingCity')}} 
/></div>
</div>

<div className='col-sm-4'>
<div><label> State: </label><br/><input className='form-input' type="text" required='required'
value={this.state.shippingState}
placeholder='State'
onChange={(event)=>{this.onChangeValue(event,'shippingState')}}
/>  </div>
</div>
</div>
<div className='col-sm-12'>
<div className='col-sm-4'>
<div><label> Country:</label><br/> <input className='form-input' type="text" required='required'
value={this.state.shippingCountry} 
placeholder='Country'
onChange={(event)=>{this.onChangeValue(event,'shippingCountry')}}
/>  </div>
</div>
<div className='col-sm-4'>
<div> <label>zip: </label><br/><input className='form-input' type="text" required='required' 
value={this.state.shippingZip}
placeholder='Zipcode'
onChange={(event)=>{this.onChangeValue(event,'shippingZip')}} /> </div>
</div>
<div className='col-sm-4'>
<div style={{paddingLeft:'6px'}}><label>Landline</label><br/> <input className='std-input' type="text"
style={{borderBottom:'1px solid #2C3B4C',width:'50px'}}
value={this.state.shippingLandlinestd
} 
placeholder='STD'
onChange={(event)=>{this.onChangeValue(event,'shippingLandlinestd')}}
/> 
<input className='num-input' type="text" 
style={{borderBottom:'1px solid #2C3B4C',borderLeft:'1px solid #2C3B4C'}}
value={this.state.shippingLandline}
placeholder='landline'
onChange={(event)=>{this.onChangeValue(event,'shippingLandline')}}
/>
</div>
</div>
</div>
<div className='col-sm-12'>
<div className='col-sm-4'>
<div style={{paddingLeft:'6px'}} ><label> Fax</label> <br/>
<input className='std-input' type="text"
style={{borderBottom:'1px solid #2C3B4C',width:'50px'}}
value={this.state.shippingFaxstd} 
placeholder='STD'
onChange={(event)=>{this.onChangeValue(event,'shippingFaxstd')}}
/> 
  <input className='num-input' type="text"
    style={{borderBottom:'1px solid #2C3B4C',borderLeft:'1px solid #2C3B4C'}}
value={this.state.shippingFax}
placeholder='Fax'
onChange={(event)=>{this.onChangeValue(event,'shippingFax')}}
 /></div>
</div>

<div className='col-sm-4'>
</div>
<div className='col-sm-4'></div>
</div>
</div>
<div><label>Statutory Details : </label>
  <br/>
  <div className='col-sm-12'>
    <div className='col-sm-4'>
  <div><label>GSTIN :</label><br/><input className='form-input' type="text" 
  value={this.state.gstin} required='required' maxLength='15' 
  placeholder='GSTIN'
  onChange={(event)=>{this.onChangeValue(event,'gstin')}}
  /></div>
</div>
<div className='col-sm-4'>
  <div><label>PAN :</label><br/><input className='form-input' type="text" 
  value={this.state.pan} required='required' maxLength='10'
  placeholder='PAN'
  onChange={(event)=>{this.onChangeValue(event,'pan')}}
  /> </div>
  </div>
  
<div className='col-sm-4'>
<div><label>CIN :</label><br/> <input className='form-input' type="text" required='required' maxLength='21'
value={this.state.cin} 
placeholder='CIN'
onChange={(event)=>{this.onChangeValue(event,'cin')}}
/></div>
</div>
<br/>
</div>
</div>
<br/>
</div>
<div className='col-sm-12' >
<div className='col-sm-12'>
<div className='col-sm-3'>
<div><label>ID :</label><br/>
<img src={this.state.logo} 
style={{margin:' 0px 0px 3px 10px',borderRadius:'5%',height:'200px',width:'200px'}} /><br/>
<div class="upload-btn-wrapper" style={{margin:'7px 0px 5px 10px'}}>
  <button class="image-btn">Upload a file</button>
  <input type="file" name="myfile"  ref={this.logoFile} onChange={()=>{this.onChangeLogo()}} />
</div>
{/* <img src={this.state.logo}
                    style={{ width: "100px", maxHeight: "100px"}}
                  /><input className='form-input' type="file" ref={this.logoFile}
                  onChange={()=>{this.onChangeLogo()}} /> */}
                   </div>
                  </div>
<div className='col-sm-3'>
<div style={{paddingLeft:'10px'}}><label>GST Certificate :</label> <br/>
<img src={this.state.gstCertificate} 
style={{margin:' 0px 0px 3px 10px',borderRadius:'5%',height:'200px',width:'200px'}} /><br/>
<div class="upload-btn-wrapper" style={{margin:'7px 0px 5px 10px'}}>
  <button class="image-btn">Upload a file</button>
  <input type="file" name="myfile"  ref={this.gstFile}  onChange={()=>{this.onChangeGst()}} />
</div>
{/* <img src={this.state.gstCertificate} style={{ width:"100px", maxHeight:"100px" }} />
<input className='form-input' type="file" ref={this.gstFile} onChange={()=>{this.onChangeGst()}}/> */}
</div>
</div>
<div className='col-sm-3'>
<div> <label>Business card-Front:</label><br/>
<img src={this.state.bannerFront} 
style={{margin:' 0px 0px 3px 10px',borderRadius:'5%',height:'200px',width:'200px'}} /><br/>
<div class="upload-btn-wrapper" style={{margin:'7px 0px 5px 10px'}}>
  <button class="image-btn">Upload a file</button>
  <input type="file" name="myfile" ref={this.bannerFileFront}  onChange={()=>{this.onChangebannerFront()}} />
</div>
 </div>
</div>
<div className='col-sm-3'>


 <div> <label>Other Document:</label><br/>
<img src={this.state.bannerBack} 
style={{margin:' 0px 0px 3px 10px',borderRadius:'5%',height:'200px',width:'200px'}} /><br/>
<div class="upload-btn-wrapper" style={{margin:'7px 0px 5px 10px'}}>
  <button class="image-btn">Upload a file</button>
  <input type="file" name="myfile" ref={this.bannerFileBack}  onChange={()=>{this.onChangebannerBack()}} />
</div>
 </div>
</div>

<br/>  
</div>

<div class='col-sm-12' style={{background:'light grey',margin:'15px 0px'}}>
 <div className='col-sm-4'></div>
 <div className='col-sm-6'><div className='submit-button' onClick={()=>{this.onSubmit()}}>Submit</div>
 <div className='submit-button' onClick={()=>{this.cancelAll()}}>Clear</div>
   </div>
 <div className='col-sm-4'></div>
</div>
</div>
</div>

        </div>
      </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;

  return { alert };
}

const connectedNewVendor = connect(mapStateToProps)(NewVendor);
export default connectedNewVendor;

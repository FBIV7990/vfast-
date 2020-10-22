import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Link, Switch, Route} from 'react-router-dom'; 
import {ViewAll} from './index';
import { employerActions } from '../../../actions';
 import {userActions} from '../../../actions';
import Loader from '../../../components/Loader';
import userImage from '../../../img/user.png';
import gst from '../../../img/gst.jpg';
import card from '../../../img/card.jpg';
import logoImage from '../../../img/default.jpg';
import moment from 'moment'


class EditEmployer extends React.Component{
  constructor(props){
    super(props);
    this.logoFile = React.createRef();
    this.bannerFileFront= React.createRef();
    this.bannerFileBack= React.createRef();
    this.gstFile= React.createRef();
    this.avatar= React.createRef();
    this.state = { 
      password:"",
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
      profile:userImage,
      countryCode:'',
      mobile:'',
      email:'',
      website:'',
      gstin:'',
      pan:'',
      cin:'',
    
     }; 
}

componentDidMount(){
const { dispatch } = this.props;   

const id = this.props.match.params.id;
dispatch(employerActions.getById(id));

const {user} = this.props;
if(user){
this.setState({
  id:user._id,
       first_name: user.profile.first_name,
  last_name: user.profile.last_name,
  company: user.profile.company_name,
  billing_address:{
    billStreet:user.profile.billing_address.street,
    billCity:user.profile.billing_address.city,
    billState:user.profile.billing_address.state,
    billCountry:user.profile.billing_address.country,
    billZip:user.profile.billing_address.zip,
    billLandline:{
      billLandlinestd:user.profile.billing_address.landline.std,
      billLandline:user.profile.billing_address.landline.landline
    },
    fax:{
      billFaxstd:user.profile.billing_address.fax.std,
      billFax:user.profile.billing_address.fax.fax
    }
  },
    shipping_address:{
    shippingStreet:user.profile.shipping_address.street,
    shippingCity:user.profile.shipping_address.city,
    shippingState:user.profile.shipping_address.state,
    shippingCountry:user.profile.shipping_address.country,
    shippingZip:user.profile.shipping_address.zip,
    landline:{
      shippingLandlinestd:user.profile.shipping_address.landline.std,
    shippingLandline:user.profile.shipping_address.landline.landline
    },
    fax:{
      shippingFaxstd:user.profile.shipping_address.fax.std,
      shippingFax:user.profile.shipping_address.fax.fax
    }
  },
  mobile:{
    countryCode:user.profile.mobile.country_code,
    mobile:user.profile.mobile.mobile
  },
  email:user.profile.email,
  gstin:user.statutary_details.gstin,
  pan:user.statutary_details.pan_number,
  cin:user.statutary_details.cin_number

});
}
}

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

onRoleChanged(id,role) {
const data={
id:id,
role:role}
const {dispatch} =this.props;
dispatch(userActions.changeRole(data));
}

onStatusChanged(id,status) {
const data={
id:id,
status:status}
const {dispatch} =this.props;
dispatch(userActions.changeStatus(data));
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
onSubmit() {
  const { user,saveUser,alert,dispatch } = this.props;
  console.log('logging viewUser',user)
  const {countryCode,mobile,email,first_name,last_name,gstCertificate,company,
    billCity,billStreet,billState,billCountry,billZip,billLandlinestd,billLandline,billFaxstd,billFax,
    shippingCity,shippingStreet,shippingState,shippingCountry,shippingZip,shippingLandlinestd,
    shippingLandline,shippingFaxstd,shippingFax,website,gstin,pan,cin} = this.state;
const id=user._id;
console.log('logging id:..',id)

if(this.state.email!=''&& this.state.first_name!=''&&this.state.last_name!='' && this.state.billCountry!='' &&
this.state.billState!='' && this.state.billCity!='' && this.state.billStreet!='' && this.state.billZip!='' && 
this.state.shippingStreet!='' && this.state.shippingCountry!='' &&this.state.shippingState!='' &&
this.state.shippingCity!='' && this.state.shippingZip!='' &&
this.state.gstin!='' && this.state.cin!='' && this.state.pan!=''){
   const formdata = new FormData();
    formdata.append('id',id);
    formdata.append('first_name',first_name);
    formdata.append('last_name',last_name);
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
  country_code:user.profile.mobile.country_code,
  mobile:user.profile.mobile.mobile
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
    dispatch(userActions.setProfile(formdata));}
    else {
      console.log('Field missing')
    }
}

onChangeValue(e,key){
this.setState({[key]:e.target.value})
}

render(){
  const {employer,user}=this.props;


  const id=user&&user._id;

  if(user)
{
const {account,profile,statutary_details}=user;
return (
<>
{/* <div> */}
<div className='container'>
<div className='row' style={{
          backgroundColor:'white',
          margin:'10px 0px',
          borderRadius:'7px',
          boxShadow:"rgb(71, 65, 62) 0px 4px 11px -6px"}} >

    {/* <div className='col-sm-12' style={{minWidth:'300px'}}> */}

    <div >
        <Link className='submit-button'  to={`/employers/${id}/employees/new`} style={{color:'white'}}>Add New Employee </Link>
             
              <Link  className='submit-button'   to={`/employers/${id}/employees`}>View Employees</Link>
    
          <Link  className='submit-button'  to={`/employers/${id}/bulkUpload`}>Bulk Upload</Link>
    </div>
<div className='col-sm-12' style={{padding:'10px',margin:'10px 10px'}}>
<h3>Account Info</h3>
<div className='col-sm-8' style={{padding:'0px'}}>
  <div className='col-sm-12' style={{padding:'0px'}}>
  <div className='col-sm-6'>
  <div><label>Username : </label>{account.username}</div>
  <div><label>Created On :</label> {moment(account.created_on).format('DD/MM/YYYY')}</div>  
<div ><label>Account Status :</label><br/>

<input type='text' className='form-input' value={account.status}  onChange={(e)=>{this.onStatusChanged(user._id,e.target.value)}} />         
    {/* <option name="PENDING">PENDING</option> 
    <option name="VERIFIED" >VERIFIED</option>
    <option name="REGISTERED">REGISTERED</option>
    <option name="BLOCKED">BLOCKED</option>
</select> */}
</div>
  </div>
 
<div className='col-sm-6'>
<div><label>ID :</label> {user.user_id}</div>
<div><label>Display ID : </label>{user.display_id}</div> 
<div><label>Role :</label> <br/>
<input className='form-input' type="text" 
value={account.role}
placeholder='Last Name'
onChange={(e)=>{this.onRoleChanged(user._id,e.target.value)}} />
{/* {account.role} */}
    {/* <select value={account.role} onChange={(e)=>{this.onRoleChanged(user._id,e.target.value)}} >         
     <option name="VERIFIER">VERIFIER</option> 
     <option name="EMPLOYER" >EMPLOYER</option>
     <option name="VENDOR">VENDOR</option>
     <option name="ADMIN">ADMIN</option>
 </select> */}
 </div>
</div>
</div>
<div className='col-sm-12' style={{padding:'0px'}}>
<div className='col-sm-6'>
<div style={{paddingLeft:'6px'}}><label>Mobile:</label><br/>
  <input className='std-input' type="text" required='required' maxLength='10'
   style={{borderBottom:'1px solid #2C3B4C',width:'50px'}}
   value={this.state.countryCode?this.state.countryCode:profile.mobile.country_code} 
   placeholder='+91'
onChange={(event)=>{this.onChangeValue(event,'countryCode')}}
   />
   <input className='num-input' type="number" required='required'
        style={{borderBottom:'1px solid #2C3B4C',borderLeft:'1px solid #2C3B4C'}}
  value={this.state.mobile?this.state.mobile:profile.mobile.mobile}
    placeholder='Mobile' 
onChange={(event)=>{this.onChangeValue(event,'mobile')}}
    /> </div>
</div>

<div className='col-sm-6'>
<div><label>Email :</label><br/> <input className='form-input' type="text" required='required'
value={this.state.email?this.state.email:profile.email} 
placeholder='Email'
onChange={(event)=>{this.onChangeValue(event,'email')}} /></div>
</div>
</div>


</div>
<div className='col-sm-4'>
<div className='vl' style={{height:'150px',padding:'5px'}}><label>Profile picture</label><br/> 

<img src={this.state.profile} style={{margin:' 0px 0px 3px 10px',borderRadius:'5%',height:'120px',width:'120px'}} /><br/>
<div class="upload-btn-wrapper" style={{margin:'7px 0px 5px 10px'}} >
<button class="image-btn">Upload a file</button>
<input type="file" name="myfile" ref={this.avatar}  onChange={()=>{this.onChangeProfile()}} />
</div>
</div>         
</div>
</div>
<div className='col-sm-12'
style={{padding:'0px'}}>
<div><h3>Profile Info</h3></div>
{/* <hr/> */}
<div className='col-sm-12'>
<div className='col-sm-4'>
<div><label>First name :</label><br/> <input className='form-input' required='required'
   type="text" 
value={this.state.first_name?this.state.first_name:profile.first_name}
placeholder='First Name'
onChange={(event)=>{this.onChangeValue(event,'first_name')}}
/> </div>
</div>
<div className='col-sm-4'>
<div><label>Last name : </label><br/><input className='form-input'  type="text" required='required'
value={this.state.last_name?this.state.last_name:profile.last_name}
placeholder='Last Name'
onChange={(event)=>{this.onChangeValue(event,'last_name')}} /> </div>
</div>
<div className='col-sm-4'>
<div><label>Company :</label><br/> <input className='form-input' type="text" 
value={this.state.company?this.state.company:profile.company_name}
placeholder='Company Name'
onChange={(event)=>{this.onChangeValue(event,'company')}} /> </div>
<br/>
</div>
</div>

<div><label>Billing Address :</label></div>
<div className='col-sm-12'>
<div className='col-sm-4'>
<div> <label>  Street : </label><br/> <input className='form-input' type="text" required='required'
value={this.state.billStreet?this.state.billStreet:profile.billing_address.state}
placeholder='Street/Society'
onChange={(event)=>{this.onChangeValue(event,'billStreet')}}
/> </div>
</div>
<div className='col-sm-4'>
<div> <label> City: </label><br/><input className='form-input' type="text" required='required'
value={this.state.billCity?this.state.billCity:profile.billing_address.city} 
placeholder='City'
onChange={(event)=>{this.onChangeValue(event,'billCity')}}/></div>
</div>
<div className='col-sm-4'>
<div> <label> State:</label> <br/><input className='form-input' type="text" required='required'
value={this.state.billState?this.state.billState:profile.billing_address.state}
placeholder='State'
onChange={(event)=>{this.onChangeValue(event,'billState')}} /> </div> 
</div>
</div>
<div className='col-sm-12'>
<div className='col-sm-4'>
<div> <label> Country: </label><br/><input className='form-input' type="text" required='required'
value={this.state.billCountry?this.state.billCountry:profile.billing_address.country} 
placeholder='Country'
onChange={(event)=>{this.onChangeValue(event,'billCountry')}} />  </div>
</div>
<div className='col-sm-4'>
<div> <label> zip:</label> <br/><input className='form-input' type="text" required='required' 
value={this.state.billZip?this.state.billZip:profile.billing_address.zip} 
placeholder='Zipcode'
onChange={(event)=>{this.onChangeValue(event,'billZip')}}
/> </div>
</div>
<div className='col-sm-4'>
<div style={{paddingLeft:'6px'}} > <label>Landline:</label> <br/>
<input type="text" 
className='std-input' style={{borderBottom:'1px solid #2C3B4C',width:'50px'}}
value={this.state.billLandlinestd?this.state.billLandlinestd:profile.billing_address.landline.std} 
placeholder='STD'
onChange={(event)=>{this.onChangeValue(event,'billLandlinestd')}}/>
<input type="text"
className='num-input' style={{borderBottom:'1px solid #2C3B4C',borderLeft:'1px solid #2C3B4C'}}
value={this.state.billLandline?this.state.billLandline:profile.billing_address.landline.landline}
placeholder='landline'
onChange={(event)=>{this.onChangeValue(event,'billLandline')}}
/>
</div>
</div>
</div>
{/* <div><label>Landline :</label></div> */}

<div className='col-sm-12'>
<div className='col-sm-4'>
<div style={{padding:'6px'}}> <label> Fax</label><br/>
<input className='std-input' type="text"
style={{borderBottom:'1px solid #2C3B4C',width:'50px'}}
value={this.state.billFaxstd?this.state.billFaxstd:profile.billing_address.fax.std}
placeholder='STD'
onChange={(event)=>{this.onChangeValue(event,'billFaxstd')}} 
/>
<input className='num-input' type="text"
style={{borderBottom:'1px solid #2C3B4C',borderLeft:'1px solid #2C3B4C'}}
value={this.state.billFax?this.state.billFax:profile.billing_address.fax.fax}
placeholder='Fax'
onChange={(event)=>{this.onChangeValue(event,'billFax')}} 
/> </div></div>
<div className='col-sm-4'>
{/* <div> <label> Fax:</label><br/> <input className='std-input' type="text"
value={this.state.billFax?this.state.billFax:profile.billing_address.fax.fax}
placeholder='Fax'
onChange={(event)=>{this.onChangeValue(event,'billFax')}} 
/></div> */}
</div>
<div className='col-sm-4'></div>
<br/>
</div>

<br/>
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
value={this.state.shippingStreet?this.state.shippingStreet:profile.shipping_address.street}
placeholder='Street/Society'
onChange={(event)=>{this.onChangeValue(event,'shippingStreet')}} 
/> </div>
</div>
<div className='col-sm-4'>
<div> <label>City:</label><br/> <input className='form-input' type="text" required='required'
value={this.state.shippingCity?this.state.shippingCity:profile.shipping_address.city} 
placeholder='City'
onChange={(event)=>{this.onChangeValue(event,'shippingCity')}} 
/></div>
</div>

<div className='col-sm-4'>
<div><label> State: </label><br/><input className='form-input' type="text" required='required'
value={this.state.shippingState?this.state.shippingState:profile.shipping_address.state}
placeholder='State'
onChange={(event)=>{this.onChangeValue(event,'shippingState')}}
/>  </div>
</div>
</div>
<div className='col-sm-12'>
<div className='col-sm-4'>
<div><label> Country:</label><br/> <input className='form-input' type="text" required='required'
value={this.state.shippingCountry?this.state.shippingCountry:profile.shipping_address.country} 
placeholder='Country'
onChange={(event)=>{this.onChangeValue(event,'shippingCountry')}}
/>  </div>
</div>
<div className='col-sm-4'>
<div> <label>zip: </label><br/><input className='form-input' type="text" required='required'
value={this.state.shippingZip?this.state.shippingZip:profile.shipping_address.zip}
placeholder='Zipcode'
onChange={(event)=>{this.onChangeValue(event,'shippingZip')}} /> </div>
</div>
<div className='col-sm-4'>
<div style={{paddingLeft:'6px'}}><label>Landline</label><br/> <input className='std-input' type="text" 
style={{borderBottom:'1px solid #2C3B4C',width:'50px'}}
value={this.state.shippingLandlinestd?this.state.shippingLandlinestd:profile.shipping_address.landline.std} 
placeholder='STD'
onChange={(event)=>{this.onChangeValue(event,'shippingLandlinestd')}}
/> 
<input className='num-input' type="text" 
style={{borderBottom:'1px solid #2C3B4C',borderLeft:'1px solid #2C3B4C'}}
value={this.state.shippingLandline?this.state.shippingLandline:profile.shipping_address.landline.landline}
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
value={this.state.shippingFaxstd?this.state.shippingFaxstd:profile.shipping_address.fax.std} 
placeholder='STD'
onChange={(event)=>{this.onChangeValue(event,'shippingFaxstd')}}
/> 
  <input className='num-input' type="text"
    style={{borderBottom:'1px solid #2C3B4C',borderLeft:'1px solid #2C3B4C'}}
value={this.state.shippingFax?this.state.shippingFax:profile.shipping_address.fax.fax}
placeholder='Fax'
onChange={(event)=>{this.onChangeValue(event,'shippingFax')}}
 /></div>
</div>

<div className='col-sm-4'>
</div>
<div className='col-sm-4'></div>
</div>
</div>
<hr/>

<div><label>Statutory Details : </label>
  <br/>
  <div className='col-sm-12'>
    <div className='col-sm-4'>
  <div><label>GSTIN :</label><br/><input className='form-input' type="text" required='required' maxLength='15'
  value={this.state.gstin?this.state.gstin:statutary_details.gstin} 
  placeholder='GSTIN'
  onChange={(event)=>{this.onChangeValue(event,'gstin')}}
  /></div>
</div>
<div className='col-sm-4'>
  <div><label>PAN :</label><br/><input className='form-input' type="text" required='required' maxLength='10'
  value={this.state.pan?this.state.pan:statutary_details.pan_number} 
  placeholder='PAN'
  onChange={(event)=>{this.onChangeValue(event,'pan')}}
  /> </div>
  </div>
  
<div className='col-sm-4'>
<div><label>CIN :</label><br/> <input className='form-input' type="text" required='required' maxLength='21'
value={this.state.cin?this.state.cin:statutary_details.cin_number} 
placeholder='CIN'
onChange={(event)=>{this.onChangeValue(event,'cin')}}
/></div>
</div>
<br/>
</div>
{/* <div style={{textAlign:'center'}}>
<button class="submit-button" onClick={(e=>{this.onSubmit(e)})}>Save</button>
</div> */}
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
<input type="file" name="myfile"  ref={this.gstFile} required='required'  onChange={()=>{this.onChangeGst()}} />
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
<input type="file" name="myfile" ref={this.bannerFileFront} required='required'  onChange={()=>{this.onChangebannerFront()}} />
</div>
</div>
</div>
<div className='col-sm-3'>


<div> <label>Other Document:</label><br/>
<img src={this.state.bannerBack} 
style={{margin:' 0px 0px 3px 10px',borderRadius:'5%',height:'200px',width:'200px'}} /><br/>
<div class="upload-btn-wrapper" style={{margin:'7px 0px 5px 10px'}}>
<button class="image-btn">Upload a file</button>
<input type="file" name="myfile" ref={this.bannerFileBack}  required='required' onChange={()=>{this.onChangebannerBack()}} />
</div>
</div>
</div>

<br/>  
</div>
<div style={{textAlign:"center"}}><div className='submit-button' onClick={()=>{this.onSubmit()}}>Save</div></div>
</div>
{/* </div> */}
</div>
</div>
</>
);
}  
else return <Loader/>
}
}
function mapStateToProps(state){
    const {employers,users}=state;   
    return {user:employers.user,users};
    }
    
    const connectedEditEmployer=connect(mapStateToProps)(EditEmployer);
    export default connectedEditEmployer;
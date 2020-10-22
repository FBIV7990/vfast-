import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import DataTable, { createTheme } from "react-data-table-component";
import { vendorActions } from "../../../actions";
import DataTable from '../../../components/DataTable'
import Loader from "../../../components/Loader";
import userImage from '../../../img/user.png';
import gst from '../../../img/gst.jpg';
import card from '../../../img/card.jpg';
import logoImage from '../../../img/default.jpg';
import {apiUrl} from '../../../helpers'

class ViewVendor extends React.Component {

  onChangeValue(e,key){
    this.setState({[key]:e.target.value})
    }
    
  componentDidMount() {
    const { dispatch } = this.props;   
     const id = this.props.match.params.id;
    //  alert(id)
    dispatch(vendorActions.getById(id));
    }

  columns = [
    {
      name:'state',
      selector:'state',
      cell: row=>
        <div>{row.state}</div>
          },

          {
            name:'Physical check',
            cell: row=>
              <div> Rural: {row.physical_check.rural.min}-
              {row.physical_check.rural.max}
              <br />
              Urban: {row.physical_check.urban.min}-
              {row.physical_check.urban.max}</div>
                },

  {
  name:'Pre Employment Check',

     cell: row=>
    <div>   Rural: {row.pre_employment_check.rural.min}-
    {row.pre_employment_check.rural.max}
    <br />
    Urban: {row.pre_employment_check.urban.min}-
    {row.pre_employment_check.urban.max}</div>
                      },
  
        {
          name:'Education Check',
                      
         cell: row=>
      <div>     Rural {row.education_check.rural.min}-
      {row.education_check.rural.max}
      <br />
      Urban {row.education_check.urban.min}-
      {row.education_check.urban.max}</div>
   },  
   {
    name:'Judicial Check',
                
   cell: row=>
<div>  Rural:{row.judicial_check.rural.min}-
  {row.judicial_check.rural.max}
   <br />
      Urban: {row.judicial_check.urban.min}-
      {row.judicial_check.urban.max}</div>
}, 
{
  name:'CIBIL Check',
              
 cell: row=>
<div>   Rural {row.cibil_check.rural.min}-
        {row.cibil_check.rural.max}
         <br />
          Urban {row.cibil_check.urban.min}-
         {row.cibil_check.urban.max}</div>
}, 
{
  name:'Drug Test',

              
 cell: row=>
<div>    Rural {row.drug_test.rural.min}
                          {row.drug_test.rural.max}
                          <br />
                          Urban {row.drug_test.urban.min}
                          {row.drug_test.urban.max}</div>
},                    

  ];

  render() {
    
    const { vendorData} = this.props;
    console.log('logging vendor data:',vendorData);

    //     const {data,i}=this.state;
//     console.log('logging vendorList:',vendor)
// // const i=1;
//     const vendorState=vendor&&vendor.rate_list&&vendor.rate_list.map((vendorState,i)=>(
//     <option key={i} value={i}>{vendorState.state}</option>
//     ));
if(vendorData)
{
  const {vendor}=vendorData;
 return (
  <div className='container'>
  <div className='row'  style={{padding:'10px',
backgroundColor:'white',
borderRadius:'7px',
boxShadow:"rgb(71, 65, 62) 0px 4px 11px -6px"}}>
  <div class='col-sm-12' style={{padding:'0px'}}>
<div className='col-sm-4'>
    <div>
<img src={apiUrl+'/'+vendor.profile.profile_picture?apiUrl+'/'+vendor.profile.profile_picture:userImage} 
style={{height:'300px',width:'300px'}} />
</div>
<div style={{background:'#eaeaea',padding:'10px'}}>
       
<div><label>Username : </label>{vendor.profile.first_name}</div>
      <div><label>Lastname :</label> {vendor.profile.last_name}</div>
      <div><label>Email :</label> {vendor.profile.email}</div>
      <div><label>Mobile :</label> {vendor.profile.mobile.mobile}</div>
      <div><label>Company Name :</label> {vendor.profile.company_name}</div>
      <div><label>Company type:</label> {vendor.profile.company_category}</div>
      <div><label>Owner status:</label> {vendor.profile.owner_status}</div>
    </div>
    </div>

<div className='col-sm-8 vl' style={{height:'550px'}}>
<div style={{textAlign:'center',background:'#2C3B4C'}}>
     <h3 style={{color:'white',padding:'3px 0px'}} >Profile Info</h3></div>
    <div className='col-sm-12 ' style={{padding:'0px'}}>
        <div className='col-sm-6'>
            <h3 style={{padding:'0px'}}>Billing Address</h3>
   
      <div><label>City :</label> {vendor.profile.billing_address.city}</div>
      <div><label>State :</label> {vendor.profile.billing_address.state}</div>
      <div><label>Street :</label> {vendor.profile.billing_address.street}</div>
      <div><label>Country :</label> {vendor.profile.billing_address.country}</div>
      <div><label>Fax :</label> {vendor.profile.billing_address.fax.std}-{vendor.profile.billing_address.fax.fax}</div>
      <div><label>Landline :</label> {vendor.profile.billing_address.landline.std}-{vendor.profile.billing_address.landline.landline}</div>
      <div><label>Zip :</label> {vendor.profile.billing_address.zip}</div>

</div>
<div className='col-sm-6'>
<h3>Shipping Address</h3>
      {/* <div><label>ID :</label> 
      <img src={profile.company_logo} style={{height:'100px',width:'100px'}} /></div> */}
      <div><label>City :</label> {vendor.profile.shipping_address.city}</div>
      <div><label>State :</label> {vendor.profile.shipping_address.state}</div>
      <div><label>Street :</label> {vendor.profile.shipping_address.street}</div>
      <div><label>Country :</label> {vendor.profile.shipping_address.country}</div>
      <div><label>Fax :</label> {vendor.profile.shipping_address.fax.std}-{vendor.profile.shipping_address.fax.fax}</div>
      <div><label>Landline :</label> {vendor.profile.shipping_address.landline.std}-{vendor.profile.shipping_address.landline.landline}</div>
      <div><label>Zip :</label> {vendor.profile.shipping_address.zip}</div>
</div>
    </div>

        <div className='col-sm-12' style={{padding:'0px'}}>
    <h3>Business card</h3>
<div className='col-sm-6'>
      <div><label>Bussiness card-front :</label><br/>
       <img src={apiUrl+'/'+vendor.profile.business_card.front} style={{height:'150px',width:'150px'}} /></div>
          </div>
      <div className='col-sm-6'>
      <div><label>Other Document:</label> <br/>
      <img src={apiUrl+'/'+vendor.profile.business_card.back} style={{height:'150px',width:'150px'}} /></div>

      </div>
        </div>
</div>
    </div>
<DataTable
  title="Vendors list"
  columns={this.columns}
 
  data={vendorData.rate_list}
  onRowClicked={row => {
   // this.onRowClicked(row);
  }}
/>
    </div>
  </div>

// </div>

 );
 }
    else return <Loader/>
  }
}

function mapStateToProps(state) {
  const { vendors,alert } = state;
  console.log('logging vendors all',vendors)
  return { vendorData: vendors.selected_vendor,alert};
}

const connectedViewVendor = connect(mapStateToProps)(ViewVendor);
export default connectedViewVendor;

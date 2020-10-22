import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DataTable, { createTheme } from 'react-data-table-component';
import {vendorActions,userActions} from '../../../../../actions'
import {history} from '../../../../../helpers';
import { Modal } from 'react-responsive-modal';
import {ViewVendor} from './ViewVendor';

class ViewAll extends React.Component{
    constructor(props){
        super(props);
        this.state={value:'',open:false} 
}

 onViewRow(id) { 
  history.push('/vendors/'+id)

}

 onActiveChanged(id,value) {
 
  const data={
    id:id,
    value:!value}
    const {dispatch} =this.props;
    dispatch(userActions.changeActiveStatus(data));
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

onDeleteRow(id) {
  alert(id)
 const data={
   id:id}
   const {dispatch} =this.props;
   dispatch(userActions.deleteUser(data));
}
onOpenModal = (id) => {
  alert(id);
  const {dispatch}= this.props;
  // const {check,lead} = this.state;
  this.setState(state=>({ open: !state.open,id}));
  dispatch(vendorActions.getById(id));
};

onCloseModal = () => {
  this.setState({ open: false });
};
onRowClicked(data) {
  // const data={
  //   id:id}
  //   const {dispatch} =this.props;
  //   dispatch(userActions.deleteUser(data));

  console.log(data)
}

 columns = [
    // {
    //   name: 'Id',
    //   selector: '_id',
    //   sortable: true,
    // },
    {
      name: 'Name',
      selector: 'vendor.profile.first_name',
    cell: row => <div >{row.vendor.profile.first_name} {row.vendor.profile.last_name}</div>
    },
    // {
    //     name: 'Firstname',
    //     selector: 'vendor.profile.first_name',
    //     sortable: true,
    //   },
    // {
    //     name: 'Lastname',
    //     selector: 'vendor.profile.last_name',
    //     sortable: true,
    //   },
     
      {
        name: 'Mobile',
        selector: 'vendor.vendor.profile.mobile.mobile',      
       cell: row => <div >{row.vendor.profile.mobile.mobile?row.vendor.profile.mobile.mobile:"N/A"}</div>,
      },
      {
        name: 'Email',
        selector: 'vendor.vendor.profile.email',       
       cell: row => <div >{row.vendor.profile.email?row.vendor.profile.email:'N/A'}</div>,
      },
      {
        name: 'Actions',          
       cell: row => <div class="btn-group">
       {/* <button type="button" class="btn btn-sm btn-basic" onClick={()=>{this.onViewRow(row._id)}}> <i class="fa fa-fw fa-eye" style={{fontSize:14}}></i></button>
       <button type="button" class="btn btn-sm btn-basic" onClick={()=>{onEditRow(row._id)}}> <i class="fa fa-fw fa-edit" style={{fontSize:14}}></i></button>
       <button type="button" class="btn btn-sm btn-basic" 
       onClick={()=>{this.onDeleteRow(row._id)}}> 
         <i class="fa fa-fw fa-trash" style={{fontSize:14}}></i></button> */}
         <a href="#" style={{minWidth:'50px',fontSize:'11px',padding:'5px 6px'}}  class="btn btn-light a-btn-slide-text" onClick={()=>{this.onViewRow(row._id)}}>
        <span class="fa fa-fw fa-edit" aria-hidden="true"></span>
        <span><strong>Edit</strong></span>            
    </a>
      
       <a href="#" style={{minWidth:'50px',fontSize:'11px',padding:'5px 6px'}}  class="btn btn-warning a-btn-slide-text" onClick={()=>{this.onViewRow(row._id)}}>
        <span class="fa fa-fw fa-eye" aria-hidden="true"></span>
        <span><strong>View</strong></span>            
    </a>
       <a href="#" style={{minWidth:'50px',fontSize:'11px',padding:'5px 6px'}}  class="btn btn-danger a-btn-slide-text"  onClick={()=>{this.onDeleteRow(row._id)}}>
       <span class="fa fa-fw fa-trash" aria-hidden="true"></span>
        <span><strong>Delete</strong></span>            
    </a>
     </div>,
      },
  ];

   customStyles = {
    rows: {
      style: {
        minHeight: '60px', // override the row height
        cursor:'pointer'
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        fontSize:16
      },
    },
    cells: {
      style: {
        paddingLeft: '5px', // override the cell padding for data cells
        paddingRight: '5px',
      },
    },
  };

componentDidMount(){
    const {dispatch}=this.props;
    dispatch(vendorActions.getAll());
}
    render(){
const {vendors,vendor}=this.props;
const {open} = this.state;
console.log(vendors)
        return( 
            <>
   
        <Link  className='submit-button' to="/vendors/new" >Add New</Link>
    <DataTable
    title="Vendors list"
    columns={this.columns}
    pagination
    selectableRowsHighlight={true}
    dense
       data={vendors}
    onRowClicked={
      (row)=>{this.onOpenModal(row._id)}
    }
    customStyles={this.customStyles}
  />  
  {/* {JSON.stringify(vendors)} */}
  <Modal open={open} onClose={this.onCloseModal} center>
<ViewVendor data={vendor}/>
    </Modal>
          
</>
        );
    }
}

function mapStateToProps(state){
    const {vendors}=state;
    console.log(vendors)
    return {vendors:vendors.vendors,vendor:vendors.selected_vendor};
    }
    
    const connectedViewAll=connect(mapStateToProps)(ViewAll);
    export {connectedViewAll as ViewAll};
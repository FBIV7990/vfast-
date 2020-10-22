import React from "react";
import { connect } from "react-redux";
import { verificationActions } from "../../../actions";
import Loader from "../../../components/Loader";
import { history } from "../../../helpers";
class VerificationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      vendor_cost: "",
      employer_cost: "",
      checkname: "",
      remark: "",
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    alert("Verification detail");
    dispatch(verificationActions.getById(id));
  }
  onChangeValue(e, key) {
    this.setState({ [key]: e.target.value });
  }

  onstartVerify(data) {
    var path = "";
    switch (data.checkname) {
      case "pre_employment_check":
        path = "/employmentReport";
        break;

      case "physical_check":
        path = "/physicalReport";
        break;

      case "education_check":
        path = "/educationReport";
        break;
    }
    // console.log(data.checkname);
    //history.push('/reports'+path)

    history.push({
      pathname: "/reports" + path,
      state: {
        data: data,
      },
    });
  }

  render() {
    const { employer, user } = this.props;
    console.log("logging userverifi:", user);
    if (user) {
      return (
        <div className="container">
          {/* 
    <div className='row'>
    <div className='col-sm-12' style={{padding:'10px',
 backgroundColor:'white',
//  margin:'10px 0px',
 borderRadius:'7px',
 boxShadow:"rgb(71, 65, 62) 0px 4px 11px -6px"}}>
     
    <div className='col-sm-12'>
    <div className='col-sm-4'>
    <div><label>Vendor cost</label><br/> <input className='form-input' 
         type="text" 
     value={this.state.vendor_cost?this.state.vendor_cost:user.vendor_cost}
     placeholder='vendor_cost'
     onChange={(event)=>{this.onChangeValue(event,'vendor_cost')}}
      /> </div>
      </div>
      
      <div className='col-sm-4'>
    <div><label>Employer cost</label><br/> <input className='form-input' 
         type="text" 
     value={this.state.employer_cost?this.state.employer_cost:user.employer_cost}
     placeholder='employer_cost'
     onChange={(event)=>{this.onChangeValue(event,'employer_cost')}}
      /> </div>
      </div>

          
      <div className='col-sm-4'>
    <div><label>Checkname</label><br/> <input className='form-input' 
         type="text" 
     value={this.state.checkname?this.state.checkname:user.checkname}
     placeholder='checkname'
     onChange={(event)=>{this.onChangeValue(event,'checkname')}}
      /> </div>
      </div>
</div>
<div className='col-sm-12' >
    <div className='col-sm-4'>
    <div><label>Estimate time</label><br/> <input className='form-input' 
         type="text" 
     value={this.state.estimated_time?this.state.estimated_time:user.estimated_time}
     placeholder='estimated_time'
     onChange={(event)=>{this.onChangeValue(event,'estimated_time')}}
      /> </div> 
    </div>
    <div className='col-sm-4'>
    <div><label>Remark</label><br/> <input className='form-input' 
         type="text" 
     value={this.state.remark?this.state.remark:user.remark}
     placeholder='remark'
     onChange={(event)=>{this.onChangeValue(event,'remark')}}
      /> </div> 
    </div>
    <div className='col-sm-4'>
    <div><label>Employer Name</label><br/> <input className='form-input' 
         type="text" 
     value={user.employer_id.profile.first_name}
     placeholder='name'
     onChange={(event)=>{this.onChangeValue(event,'remark')}}
      /> </div> 
    </div>

    </div>
    <div className='col-sm-12' style={{padding:10,background:'white'}}>

      <div className='col-sm-4'>
    <div><label>Employer Email</label><br/> <input className='form-input' 
         type="text" 
     value={user.employer_id.profile.email}
     placeholder='email'
          /> </div> 
  
</div>    
      <div className='col-sm-4'>
    <div><label>Company Name</label><br/> <input className='form-input' 
         type="text" 
     value={user.employer_id.profile.company_name}
     placeholder='company name'
    
      /> </div> 

</div>
<div className='col-sm-4'></div>

</div>
<div style={{textAlign:'center'}}>
<div className='submit-button' onClick={()=>{this.onstartVerify(user)}}>View Report</div>
    </div>
    </div>


</div>
 */}
        </div>
      );
    } else return <Loader />;
  }
}

function mapStateToProps(state) {
  const { verifications } = state;
  console.log("logging verifications:", verifications);
  return { user: verifications.selected_verification };
}

const connectedVerificationDetail = connect(mapStateToProps)(
  VerificationDetail
);
export default connectedVerificationDetail;

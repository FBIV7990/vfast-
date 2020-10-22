import React from 'react';
import {connect} from 'react-redux';
import { employeeActions } from '../../../actions';
import ModalImage from "react-modal-image";
import{apiUrl} from '../../../helpers';
import { Link } from 'react-router-dom';

class EmployeeDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={name:'',
    mobile:'',
    email:'',
    state:'',
    contact1:'',
    contact2:'',
    address:'',
    university:'',
    institute:'',
    course:'',
    year_of_passing:'',
    college_address:'',
    designation:'',
    working_from:'',
    working_to:'',
    pan_number:'',
    voter_id:'',
    aadhar_number:'',
    contact_person:'',
    company:'',
    employee_code:'',
    isLoaded:false,
    unique_id:'',

}
    }

    componentDidMount(){
        const{dispatch} = this.props;
        const id=this.props.match.params.id;
        alert(id);
        dispatch(employeeActions.getById(id))
    }
    componentDidUpdate(){
    const {employee}=this.props;
    // alert(id)
    if(!this.state.isLoaded&&employee){
    this.setState({name:employee.name,
        // employee_id:id,
    mobile:employee.mobile,
    email:employee.email,
    state:employee.state,
    contact1:employee.contact1,
    contact2:employee.contact2,
    address:employee.address,
    university:employee.university,
    institute:employee.institute,
    course:employee.course,
    year_of_passing:employee.year_of_passing,
    college_address:employee.college_address,
    designation:employee.designation,
    working_from:employee.working_from,
    working_to:employee.working_to,
    pan_number:employee.pan_number,
    voter_id:employee.voter_id,
    aadhar_number:employee.aadhar_number,
    contact_person:employee.contact_person,
    company:employee.company,
    employee_code:employee.employee_code,
    isLoaded:true,
      unique_id:employee.unique_id
})
    }
    }

    onValueChange(e,key){
        this.setState({[key]:e.target.value})
    }

    onSubmit(){
        const {employee}=this.props;
        const {name,mobile,email, state,contact1,contact2,address,university,institute,course,year_of_passing,
        college_address,designation,working_from,working_to,pan_number,voter_id,aadhar_number,contact_person,
        company,employee_code,unique_id}=this.state;

        const data={
            unique_id:unique_id,
                        employer_id:employee.employer_id,
            employee_id:employee.employee_id,
            name:name,
            mobile:mobile,
            email:email,
            state:state,
            contact1:contact1,
            // contact2:contact2,
            address:address,
            university:university,
            institute:institute,
            course:course,
            year_of_passing:year_of_passing,
            college_address:college_address,
            designation:designation,
            working_from:working_from,
            working_to:working_to,
            pan_number:pan_number,
            voter_id:voter_id,
            aadhar_number:aadhar_number,
            contact_person:contact_person,
            company:company,
            employee_code:employee_code,
    }

console.log('logging dataemployee:',data)

            const {dispatch} =this.props;
            dispatch(employeeActions.update(data))
    }

    render(){
        const{employee} =this.props;
        if(employee){
        const documentList=employee&&employee.documents.map((emp)=>(
            <div className='employee-image' style={{float:'left'}}>
            <a  href={apiUrl+'/'+emp.filepath} target="_blank" 
            style={{padding:'10px',margin:'10px'
            }}>
<img src={apiUrl+'/'+emp.filepath} style={{height:'200px',width:'200px'}} alt='image' />
</a>
</div>
        ));
  
        return(
    <>
    <div className='container'>
    <div className='row'>
  
        <div className='col-sm-12' style={{padding:'10px',
           backgroundColor:'white',
           margin:'20px 0px',
           borderRadius:'7px',
           boxShadow:"rgb(71, 65, 62) 0px 4px 11px -6px"}}>
                  <div style={{textAlign:'center',background:'#2C3B4C'}}><h3>Employee Info</h3></div>
        <div className='col-sm-12'>
         
<div className='col-sm-4'>
<div><label>Employee Id</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.employee_code}
     placeholder='employee_code'
     onChange={(e)=>{this.onValueChange(e,'employee_code')}}
      /> </div>
      </div>
<div className='col-sm-4'>
<div><label> Name</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.name}
     placeholder='Name'
     onChange={(e)=>{this.onValueChange(e,'name')}}
      /> </div>
      </div>
<div className='col-sm-4'>
<div><label>Email</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.email}
     placeholder='Email'
     onChange={(e)=>{this.onValueChange(e,'email')}}
      /> </div>
</div>
        </div>

        <div className='col-sm-12'>
         
<div className='col-sm-4'>
<div><label>Mobile</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.mobile}
     placeholder='mobile'
     onChange={(e)=>{this.onValueChange(e,'mobile')}}
      /> </div>
      </div>
<div className='col-sm-4'>
    <div><label>Working from </label> <br/><input className='form-input' 
         type="text" 
     value={this.state.working_from}
     placeholder=''
     onChange={(e)=>{this.onValueChange(e,'working_from')}}
      /> </div></div>
<div className='col-sm-4'>
<div><label>Working to </label> <br/><input className='form-input' 
         type="text" 
     value={this.state.working_to}
     placeholder=''
     onChange={(e)=>{this.onValueChange(e,'working_to')}}
      /> </div>
</div>
        </div>

        <div className='col-sm-12'>
         
         <div className='col-sm-4'>
         <div><label>Year of passing</label> <br/><input className='form-input' 
                  type="text" 
              value={this.state.year_of_passing}
              placeholder='mobile'
              onChange={(e)=>{this.onValueChange(e,'year_of_passing')}}
               /> </div>
               </div>
         <div className='col-sm-4'>
             <div><label>Voter Id </label> <br/><input className='form-input' 
                  type="text" 
              value={this.state.voter_id}
              placeholder=''
              onChange={(e)=>{this.onValueChange(e,'voter_id')}}
               /> </div></div>
         <div className='col-sm-4'>
         <div><label>Pan Number </label> <br/><input className='form-input' 
                  type="text" 
              value={this.state.pan_number}
              placeholder=''
              onChange={(e)=>{this.onValueChange(e,'pan_number')}}
               /> </div>
         </div>
                 </div>

<div className='col-sm-12'>
<div className='col-sm-4'>
<div><label>Address</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.address}
     placeholder='address'
     onChange={(e)=>{this.onValueChange(e,'address')}}
      /> </div>
</div>
<div className='col-sm-4'>
<div><label>Contact1</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.contact1}
     placeholder='contact1'
     onChange={(e)=>{this.onValueChange(e,'contact1')}}
      /> </div>
</div>
<div className='col-sm-4'>
<div><label>Contact2</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.contact2}
     placeholder='contact2'
     onChange={(e)=>{this.onValueChange(e,'contact2')}}
      /> </div>
</div>
    </div>

<div className='col-sm-12'>
<div className='col-sm-4'>
<div><label>State</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.state}
     placeholder='State'
     onChange={(e)=>{this.onValueChange(e,'state')}}
      /> </div>
</div>
<div className='col-sm-4'>
<div><label>University</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.university}
     placeholder='university'
     onChange={(e)=>{this.onValueChange(e,'university')}}
      /> </div>
</div>
<div className='col-sm-4'>
<div><label>Institute</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.institute}
     placeholder='institute'
     onChange={(e)=>{this.onValueChange(e,'institute')}}
      /> </div>
</div>
    </div>
    <div className='col-sm-12' >
            
            <div className='col-sm-4'>
            <div><label>Course</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.course}
     placeholder='course'
     onChange={(e)=>{this.onValueChange(e,'course')}}
      /> </div>
            </div>
            <div className='col-sm-4'>
            <div><label>College address</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.college_address}
     placeholder='college address'
     onChange={(e)=>{this.onValueChange(e,'college_address')}}
      /> </div>
            </div>
            <div className='col-sm-4'>
            <div><label>Aadhar Number</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.aadhar_number}
     placeholder='aadhar number'
     onChange={(e)=>{this.onValueChange(e,'aadhar_number')}}/></div>
               </div>
               </div>

               <div className='col-sm-12' >
            
            <div className='col-sm-4'>
            <div><label>Company</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.company}
     placeholder='Company'
     onChange={(e)=>{this.onValueChange(e,'company')}}
      /> </div>
            </div>
            <div className='col-sm-4'>
            <div><label>Contact Person</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.contact_person}
     placeholder='contact person'
     onChange={(e)=>{this.onValueChange(e,'contact_person')}}
      /> </div>
            </div>
            <div className='col-sm-4'>
            <div><label>Designation</label> <br/><input className='form-input' 
         type="text" 
     value={this.state.designation}
     placeholder='aadhar number'
     onChange={(e)=>{this.onValueChange(e,'designation')}}/></div>
               </div>
               </div>

               <div className='col-sm-12' style={{padding:'10px'}}>
{documentList}

               </div>
               <div style={{textAlign:'center'}}><div className='submit-button' onClick={()=>{this.onSubmit()}} >Submit</div></div>
</div>
    </div>


    </div>
          </>  
        );
        }   
        else{ return <h2>Loading</h2>
        }
    }
}

function mapStateToProps(state) {
    const { employees } = state;
    return { employee: employees.selected_employee };
  }
  const connectedEmployeeDetails= connect(mapStateToProps)(EmployeeDetails);
//   export { connectedEmployeeDetails as EmployeeDetails };
export default connectedEmployeeDetails;
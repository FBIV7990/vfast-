import React from 'react';
import {connect} from 'react-redux';
import {userActions} from '../../actions';
import Thumbnail from '../../img/operation.png';
import {userImage} from '../../img/user.png';
import profile from '../../img/client1.jpg';

class EditProfile extends React.Component{
     constructor(props){
         super(props)
         this.avatar = React.createRef();
         this.state={
             avatar:profile
         }
     }

     onChangeProfile(){
        // Assuming only image
        var file = this.avatar.current.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
      
         reader.onloadend = function (e) {
            this.setState({
                avatar: [reader.result]
            })
          }.bind(this);
        console.log(url) // Would see a path?
        // TODO: concat files
      }
    render(){
        return(
<>
 <div class="card">
<div class="card-body">
    <h3 style={{padding:10,borderBottom:'2px solid #F5F5F5'}}>Edit Profile</h3>    
     <div  style={{background:`url(${Thumbnail}) no-repeat`,backgroundSize:'50% 80%',backgroundPosition:'bottom right'}}>

<div className="row">
<div className='col-sm-4'>
<div className='col-sm-12'>

         <div><label>Username</label> <br/><input className='form-input' type="text" 
  value={this.state.username}
   placeholder='Email or Mobile'
   onChange={(event)=>{this.onChangeValue(event,'username')}} /> </div>
         </div>
         <div className='col-sm-12'>  
         <div><label>Mobile</label><br/><input className='form-input' type='text' 
  value={this.state.mobile}
   placeholder='Mobile'
   onChange={(event)=>{this.onChangeValue(event,'mobile')}} /> </div>
   </div>

<div className='col-sm-12'>
  <div><label>First name</label> <br/><input className='form-input' type='text' 
  value={this.state.firstname}
   placeholder='First name'
   onChange={(event)=>{this.onChangeValue(event,'firstname')}} /> </div>
  </div>
  <div className='col-sm-12'>
  <div><label>Last name</label> <br/><input className='form-input' type="text" 
  value={this.state.lastname}
   placeholder='Last name'
   onChange={(event)=>{this.onChangeValue(event,'lastname')}} /> </div>
    
</div>
<div className='col-sm-12'>
  <div><label>Email</label> <br/><input className='form-input' type="text" 
  value={this.state.email}
   placeholder='Email'
   onChange={(event)=>{this.onChangeValue(event,'email')}} /> </div>
  </div>
  <div style={{textAlign:'center'}}>
  <div className='submit-button' onClick={()=>{this.onSubmit()}}>Submit</div>
  </div>
    </div>

    <div className='col-sm-8'>
    <div><label>Profile picture</label><br/> </div>
<img src={this.state.avatar?this.state.avatar:''} 
style={{margin:' 0px 0px 3px 10px',borderRadius:'5%',height:'200px',width:'200px'}} /><br/>
<div class="upload-btn-wrapper" style={{margin:'7px 0px 5px 10px'}}>
  <button class="image-btn">Upload a file</button>
  <input type="file" name="myfile" ref={this.avatar} onChange={()=>{this.onChangeProfile()}} />
</div>

        </div>



</div>
</div>
</div>
</div>
</>
        )
    }
}

function mapStateToProps(state) {
    const { employees } = state;
    return { employee: employees.selected_employee };
  }
  const connectedEditProfile= connect(mapStateToProps)(EditProfile);
export default connectedEditProfile;
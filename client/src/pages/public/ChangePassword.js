import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Thumbnail from '../../img/changepassword.jpg';
import {TextBox} from '../../components'
import { userActions } from "../../actions";

class changePassword extends React.Component {
  constructor(props) {
    super(props);
    this.avatar = React.createRef();
    this.state = {
      newpassword:'',
      password: "",
      confirmPassword:'',
  
    };
   
  }

  componentDidMount() {
     if(this.props.loggedIn)
    {
      const { dispatch,user } = this.props;	
      dispatch(userActions.get());
  
    }
  }

  onValueChanged = (index, val) => {
    this.setState({ [index]: val });
  };

  onSubmit(){
    const{password,newpassword,confirmPassword}=this.state;
console.log('logging current state',this.state);
      const {dispatch,user}= this.props;
      const id=user.user._id;
      alert(id)

      if(newpassword!=confirmPassword){
        alert('please check password')
      }
      else {
      const data={password:password,newpassword:newpassword,id:user.user._id}
      dispatch(userActions.changePassword(data));
      }
     }

  render() {
    const { user,loggedIn } = this.props;
    console.log('logging current user:',user,loggedIn)
    const { username, password } = this.state;

    return (
      <>
    
  
<div class="card">

<div class="card-body">
    <h3 style={{padding:10,borderBottom:'2px solid #F5F5F5'}}>Change Password</h3>    
     <div  style={{background:`url(${Thumbnail}) no-repeat`,backgroundSize:'50% 80%',backgroundPosition:'bottom right'}}>

<div className="row">

  <div class="col-sm-4">
  <TextBox label="Password" type="text" name="password"  onTextChanged={this.onValueChanged}/>
<TextBox label="New Password" type="text" name="newpassword"  onTextChanged={this.onValueChanged}/>
<TextBox label="Confirm Password" type="text" name="confirmPassword"  onTextChanged={this.onValueChanged}/>
          <div className='submit-button' onClick={()=>{this.onSubmit()}}>Submit</div>
   <div className='submit-button' onClick={()=>{this.cancelAll()}}>Clear</div>
   
 </div>
 
    <div>
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
  const {loggedIn}=state.authentication
  const { alert ,users} = state;

  return {alert,user:users.currentUser,loggedIn };
}

const connectedChangePassword = connect(mapStateToProps)(changePassword);
export default connectedChangePassword;

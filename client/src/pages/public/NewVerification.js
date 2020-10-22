import React from 'react';
import {connect} from 'react-redux';
import {apiUrl} from '../../helpers/config'
import {USER_KEY} from '../../helpers'
import {history} from '../../helpers';
import { storageService } from '../../services/storage.service';
import {userActions} from '../../actions'

class NewVerification extends React.Component{

constructor(props)
{
    super(props);
    this.state={
        data:"",
        pin:"",
        message:""
    }
}

onChange(e)
{
  this.setState({[e.target.name]:e.target.value})
}

onSubmit()
{

    const {data,pin}=this.state;
    if(data==""||pin=="")return;
    const finaldata={data:data,pin:pin} 

const {dispatch}=this.props;
dispatch(userActions.loginWithLink(finaldata))
}

componentDidMount()
{
    try{
    this.setState({
        data:this.props.match.params.data
    })}
    catch(err)
   {
        alert(err);
}
}

    render(){
        return(
            // <app-root _nghost-sc0="" ng-version="7.2.12">
            // <router-outlet _ngcontent-sc0=""></router-outlet>
            // <app-verification-detail _nghost-sc6="" class="ng-star-inserted">
            <div  class="main">
       
            
                <div _ngcontent-sc9="" class="container">
                    <h2 _ngcontent-sc9="" class="text-center my-5">New Verification</h2>               
                   {/* {this.props.match.params.data} */}
                    <h4>Enter security pin</h4>
                   <input name="pin" onChange={this.onChange.bind(this)}/>
                   <button onClick={this.onSubmit.bind(this)}>
                     Submit
                   </button>

                   {this.state.message}
                </div>
           
        </div>
        /* </app-verification-detail>
        </app-root> */
         );
    }
}
function mapStateToProps(state){
    return state;
    }
    
    const connectedNewVerification=connect(mapStateToProps)(NewVerification);
    export default connectedNewVerification;
   // export {connectedNewVerification as NewVerification};


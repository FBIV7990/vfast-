import React from 'react';
import {connect} from 'react-redux';
import {userActions} from '../../actions';
class SignUp extends React.Component{
    constructor(props){
        super(props)
            this.state={
                username:'',
                mobile:'',
                password:'',
                password2:'',
            }
        
    }
    onValueChanged(e,key){
        this.setState({[key] : e.target.value})
      }
      isNumeric(value) {
        return /^\d+$/.test(value);
    }

      onSubmit(){
          const{username,password} = this.state;
  const data={username:username,password:password} 
    console.log('logging register password:',data)
    this.props.setUsername(username);
     this.props.register(data); 
     //history.push
      }

    render(){
        const { registering,registered,verifying,verified,user,alert }=this.props;
        return(
            <app-root _nghost-sc0="" ng-version="7.2.12">
            <router-outlet _ngcontent-sc0=""></router-outlet>
            <app-test _nghost-sc10="" class="ng-tns-c10-0 ng-star-inserted">
            <div _ngcontent-sc10="" class="main mat-app-background ng-trigger ng-trigger-routerTransition" >
            <router-outlet _ngcontent-sc10="" class="ng-tns-c10-0"></router-outlet>
            <app-signup _nghost-sc12="" class="ng-star-inserted">
                <div _ngcontent-sc12="" class="row login-form">
                    <div _ngcontent-sc12="" class="col-md-4"><img _ngcontent-sc12=""
                            class="float-right d-none d-md-block" src="../assets/signup.png" /></div>
                    <div _ngcontent-sc12="" class="col-md-4 col-md-0ffset-4">
                        <mat-card _ngcontent-sc12="" class="mat-card">
                            <div _ngcontent-sc12="" novalidate="" class="ng-untouched ng-pristine ng-invalid">
                                <div _ngcontent-sc12="" class="logincontainer">
                                    <div _ngcontent-sc12="" class="text-center m-4 logo"><img _ngcontent-sc12=""
                                            alt="V Fasr Logo" class="w-50" src="../assets/VFast.png" /></div>
                                    <h2 _ngcontent-sc12="" class="text-center">Sign Up</h2>
                              {/*   <!---->*/}
                                    <mat-form-field _ngcontent-sc12="" appearance="fill"
                                        class="w-100 mat-form-field ng-tns-c14-1 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                                        <div class="mat-form-field-wrapper">
                                            <div class="mat-form-field-flex">
                                   
                                                <div class="mat-form-field-infix"><input _ngcontent-sc12=""
                                                        class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                                        formcontrolname="email"
                                                         matinput=""
                                                         name="email"
                                                        placeholder="Email or Phone no." 
                                                        type="text"
                                                         value={this.state.username}
                                                        id="mat-input-1146" 
                                                        aria-invalid="false"
                                                        aria-required="false"
                                                        onChange={(event)=>{this.onValueChanged(event,'username')}}
                                                         /><span
                                                        class="mat-form-field-label-wrapper">
                                                  {/*   <!---->*/}<label
                                                            class="mat-form-field-label ng-tns-c14-1 mat-empty mat-form-field-empty ng-star-inserted"
                                                            id="mat-form-field-label-2741" for="mat-input-1146"
                                                            aria-owns="mat-input-1146">
                                                      {/*   <!---->*/}
                                                      {/*   <!---->*/}
                                                            <mat-label _ngcontent-sc12="" class="ng-star-inserted">
                                                               Email</mat-label>
                                                      {/*   <!---->*/}
                                                      {/*   <!---->*/}
                                                        </label></span></div>
                                                        {registering&&<p>Registering....</p>}
                                          {/*   <!---->*/}
                                            </div>
                                      {/*   <!---->*/}
                                            <div class="mat-form-field-underline ng-tns-c14-1 ng-star-inserted">
                                                <span class="mat-form-field-ripple"></span></div>
                                            <div class="mat-form-field-subscript-wrapper">
                                          {/*   <!---->*/}
                                          {/*   <!---->*/}
                                                <div class="mat-form-field-hint-wrapper ng-tns-c14-1 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                                     style={{opacity:"1",transform:"translateY(0%)"}}>
                                              {/*   <!---->*/}
                                                    <div class="mat-form-field-hint-spacer"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </mat-form-field>
                                
                                    <mat-form-field _ngcontent-sc12="" appearance="fill"
                                        class="w-100 mat-form-field ng-tns-c14-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                                        <div class="mat-form-field-wrapper">
                                            <div class="mat-form-field-flex">
                                          {/*   <!---->*/}
                                          {/*   <!---->*/}
                                                <div class="mat-form-field-infix"><input _ngcontent-sc12=""
                                                        class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                                        formcontrolname="password" 
                                                        matinput=""
                                                         name="pwd"
                                                        placeholder="Password"
                                                         type="password"
                                                          value={this.state.password}
                                                          onChange={(event)=>{this.onValueChanged(event,'password')}}
                                                        id="mat-input-1148" 
                                                        aria-invalid="false"
                                                        aria-required="false" /><span
                                                        class="mat-form-field-label-wrapper">
                                                  {/*   <!---->*/}<label
                                                            class="mat-form-field-label ng-tns-c14-3 mat-empty mat-form-field-empty ng-star-inserted"
                                                            id="mat-form-field-label-2745" for="mat-input-1148"
                                                            aria-owns="mat-input-1148">
                                                      {/*   <!---->*/}
                                                      {/*   <!---->*/}
                                                            <mat-label _ngcontent-sc12="" class="ng-star-inserted">
                                                                Password</mat-label>
                                                      {/*   <!---->*/}
                                                      {/*   <!---->*/}
                                                        </label></span></div>
                                          {/*   <!---->*/}
                                            </div>
                                      {/*   <!---->*/}
                                            <div class="mat-form-field-underline ng-tns-c14-3 ng-star-inserted">
                                                <span class="mat-form-field-ripple"></span></div>
                                            <div class="mat-form-field-subscript-wrapper">
                                          {/*   <!---->*/}
                                          {/*   <!---->*/}
                                                <div class="mat-form-field-hint-wrapper ng-tns-c14-3 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                                     style={{opacity:"1",transform:"translateY(0%)"}}>
                                              {/*   <!---->*/}
                                                    <div class="mat-form-field-hint-spacer"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </mat-form-field>
                                    <mat-form-field _ngcontent-sc12="" appearance="fill"
                                        class="w-100 mat-form-field ng-tns-c14-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                                        <div class="mat-form-field-wrapper">
                                            <div class="mat-form-field-flex">
                                          {/*   <!---->*/}
                                          {/*   <!---->*/}
                                                <div class="mat-form-field-infix"><input _ngcontent-sc12=""
                                                        class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                                        formcontrolname="confirmPassword" 
                                                        matinput="" 
                                                        name="repwd"
                                                        placeholder="Re-Enter Password" 
                                                        type="password" 
                                                        value={this.state.password2}
                                                        onChange={(event)=>{this.onValueChanged(event,'password2')}}
                                                        id="mat-input-1149" 
                                                        aria-invalid="false"
                                                        aria-required="false " /><span
                                                        class="mat-form-field-label-wrapper">
                                                  {/*   <!---->*/}<label
                                                            class="mat-form-field-label ng-tns-c14-4 mat-empty mat-form-field-empty ng-star-inserted"
                                                            id="mat-form-field-label-2747" for="mat-input-1149"
                                                            aria-owns="mat-input-1149">
                                                      {/*   <!---->*/}
                                                      {/*   <!---->*/}
                                                            <mat-label _ngcontent-sc12="" class="ng-star-inserted">
                                                                Confirm Password</mat-label>
                                                      {/*   <!---->*/}
                                                      {/*   <!---->*/}
                                                        </label></span></div>
                                          {/*   <!---->*/}
                                            </div>
                                      {/*   <!---->*/}
                                            <div class="mat-form-field-underline ng-tns-c14-4 ng-star-inserted">
                                                <span class="mat-form-field-ripple"></span></div>
                                            <div class="mat-form-field-subscript-wrapper">
                                          {/*   <!---->*/}
                                          {/*   <!---->*/}
                                                <div class="mat-form-field-hint-wrapper ng-tns-c14-4 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                                    style={{opacity:"1",transform:"translateY(0%)"}}>
                                              {/*   <!---->*/}
                                                    <div class="mat-form-field-hint-spacer"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </mat-form-field>
                                    <div>
                                    <button className='submit-button' onClick={()=>{this.onSubmit()}}>Submit</button>
                                    </div>
                                    {/* <button _ngcontent-sc12="" color="primary" mat-raised-button=""
                                        class="mat-raised-button mat-primary _mat-animation-noopable"><span
                                            class="mat-button-wrapper">Sign Up</span>
                                        <div class="mat-button-ripple mat-ripple" matripple=""></div>
                                        <div class="mat-button-focus-overlay"></div>
                                    </button> */}
                                </div>
                            </div>
                        </mat-card>
                    </div>
                </div>
            </app-signup>
        </div>
        {/* <app-login-footer _ngcontent-sc10="" class="ng-tns-c10-0" _nghost-sc11="">
                <footer _ngcontent-sc11="" class="footer">
                    <div _ngcontent-sc11="" class="text-center">© Copyright FBIV Infocomm Pvt. Ltd. All Rights Reserved.
                    </div>
                </footer>
            </app-login-footer> */}
    </app-test>
    </app-root>
       
         );
    }
}


function mapStateToProps(state){
    const { registering,registered,verifying,verified,user } = state.registration;
    const {alert}=state;
    
     return {
       registering,registered,verifying,verified, alert
      
     };
   }
   const actionCreators = {
     register: userActions.register,
    //  verifyOTP: userActions.verifyOTP,
     setUsername:userActions.setUsername,
  
   }
    
    const connectedSignUp=connect(mapStateToProps,actionCreators)(SignUp);
    export {connectedSignUp as SignUp};
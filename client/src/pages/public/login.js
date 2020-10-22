import React from 'react';
import {connect} from 'react-redux';
import { userActions } from '../../actions';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
        }
    }

    onValueChanged(e,key){
        this.setState({[key] : e.target.value})
      }

      onSubmit(){
        //   e.preventDefault()
            const {dispatch} = this.props;
            const {username,password}= this.state;
            const data={username:username,password:password}
            dispatch(userActions.login(data))
      }

    render(){
        return( 
            <app-root _nghost-sc0="" ng-version="7.2.12">
            {/* <router-outlet _ngcontent-sc0=""></router-outlet> */}
            <app-test _nghost-sc10="" class="ng-tns-c10-0 ng-star-inserted">
            <div _ngcontent-sc10="" class="main mat-app-background ng-trigger ng-trigger-routerTransition" >
            <router-outlet _ngcontent-sc10="" class="ng-tns-c10-0"></router-outlet>
            <app-login _nghost-sc32="" class="ng-star-inserted">
                <div _ngcontent-sc32="" class="container-fluid">
                    <div _ngcontent-sc32="" class="row login-form">
                        <div _ngcontent-sc32="" class="col-md-4"><img _ngcontent-sc32=""
                                class="float-right d-none d-md-block" src="../assets/signup.png"/></div>
                        <div _ngcontent-sc32="" class="col-md-4 col-md-0ffset-4 col-sm-8 col-sm-offset-2">
                            <mat-card _ngcontent-sc32="" class="mat-card">
                                <div _ngcontent-sc32="" novalidate="" class="ng-untouched ng-pristine ng-invalid">
                                    <div _ngcontent-sc32="" class="logincontainer">
                                        <div _ngcontent-sc32="" class="text-center m-4 logo"><img _ngcontent-sc32=""
                                                alt="V Fast Logo" class="w-50" src="../assets/VFast.png"/></div>
                                        <h4 _ngcontent-sc32="" class="text-center">Sign In</h4>
                                        <mat-form-field _ngcontent-sc32="" appearance="fill"
                                            class="w-100 mat-form-field ng-tns-c14-1 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                                            <div class="mat-form-field-wrapper">
                                                <div class="mat-form-field-flex">
                                                    {/*<!---->*/}
                                                    {/*<!---->*/}
                                                    <div class="mat-form-field-infix">
                                                        <input _ngcontent-sc32=""
                                                            class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                                            formcontrolname="mobile" matinput="" name="Mobile"
                                                            placeholder="Mobile" type="tel" value={this.state.username}
                                                            id="mat-input-1145" aria-invalid="false"
                                                            aria-required="false" onChange={(e)=>{this.onValueChanged(e,'username')}} /><span
                                                            class="mat-form-field-label-wrapper">
                                                            {/*<!---->*/}<label
                                                                class="mat-form-field-label ng-tns-c14-1 mat-empty mat-form-field-empty ng-star-inserted"
                                                                id="mat-form-field-label-2739" for="mat-input-1145"
                                                                aria-owns="mat-input-1145">
                                                                {/*<!---->*/}
                                                                {/*<!---->*/}
                                                                <mat-label _ngcontent-sc32=""
                                                                    class="ng-star-inserted">Mobile/Email
                                                                </mat-label>
                                                                {/*<!---->*/}
                                                                {/*<!---->*/}
                                                            </label></span></div>
                                                    {/*<!---->*/}
                                                </div>
                                                {/*<!---->*/}
                                                <div class="mat-form-field-underline ng-tns-c14-1 ng-star-inserted">
                                                    <span class="mat-form-field-ripple"></span></div>
                                                <div class="mat-form-field-subscript-wrapper">
                                                    {/*<!---->*/}
                                                    {/*<!---->*/}
                                                    <div class="mat-form-field-hint-wrapper ng-tns-c14-1 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                                        style={{opacity:1,transform:'translateY(0%)'}}>
                                                        {/*<!---->*/}
                                                        <div class="mat-form-field-hint-spacer"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </mat-form-field>
                                        {/*<!---->*/}
                                
                                        {/*<!---->*/}
                                        {/* <!----> */}

                                        <mat-form-field _ngcontent-sc32="" appearance="fill"
                                            class="w-100 mat-form-field ng-tns-c14-1 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                                            <div class="mat-form-field-wrapper">
                                                <div class="mat-form-field-flex">
                                                    {/*<!---->*/}
                                                    {/*<!---->*/}
                                                    <div class="mat-form-field-infix">
                                                        <input _ngcontent-sc32=""
                                                            class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                                            formcontrolname="password" matinput="" name="Password"
                                                            placeholder="Password" type="password" value={this.state.password}
                                                            id="mat-input-1146" aria-invalid="false"
                                                            aria-required="false" onChange={(e)=>{this.onValueChanged(e,'password')}} /><span
                                                            class="mat-form-field-label-wrapper">
                                                            {/*<!---->*/}<label
                                                                class="mat-form-field-label ng-tns-c14-1 mat-empty mat-form-field-empty ng-star-inserted"
                                                                id="mat-form-field-label-2739" for="mat-input-1145"
                                                                aria-owns="mat-input-1145">
                                                                {/*<!---->*/}
                                                                {/*<!---->*/}
                                                                <mat-label _ngcontent-sc32=""
                                                                    class="ng-star-inserted">Password
                                                                </mat-label>
                                                                {/*<!---->*/}
                                                                {/*<!---->*/}
                                                            </label></span></div>
                                                    {/*<!---->*/}
                                                </div>
                                                {/*<!---->*/}
                                                <div class="mat-form-field-underline ng-tns-c14-1 ng-star-inserted">
                                                    <span class="mat-form-field-ripple"></span></div>
                                                <div class="mat-form-field-subscript-wrapper">
                                                    {/*<!---->*/}
                                                    {/*<!---->*/}
                                                    <div class="mat-form-field-hint-wrapper ng-tns-c14-1 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                                        style={{opacity:1,transform:'translateY(0%)'}}>
                                                        {/*<!---->*/}
                                                        <div class="mat-form-field-hint-spacer"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </mat-form-field>
                                        <div className='submit-button'onClick={()=>{this.onSubmit()}}>Submit</div>
                                        {/* <button _ngcontent-sc32=""
                                            class="mt-4 mat-raised-button mat-primary _mat-animation-noopable ng-star-inserted"
                                            color="primary" mat-raised-button=""><span
                                                class="mat-button-wrapper" onClick={()=>{this.onSubmit()}}>Submit</span>
                                            <div class="mat-button-ripple mat-ripple" matripple=""></div>
                                            <div class="mat-button-focus-overlay"></div>
                                        </button> */}
                                        {/* <!----> */}
                                    </div>
                                </div>
                            </mat-card>
                        </div>
                    </div>
                </div>
            </app-login>
        </div>
        </app-test>
</app-root>            
         );
    }
}

function mapStateToProps(state){
    const{users}=state;
console.log('logging users:',users)
    return users;
    }
    
    const connectedLogin=connect(mapStateToProps)(Login);
    export {connectedLogin as Login};
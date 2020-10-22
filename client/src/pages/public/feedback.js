import React from 'react';
import {connect} from 'react-redux';

class Feedback extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            mobile:'',
            company:'',
            feedback:'',
                    }
    }
    onValueChanged(e,key){
        this.setState({[key] : e.target.value})
      }

    render(){
        return( 
         
            <div _ngcontent-sc6="" class="main">
            <router-outlet _ngcontent-sc6=""></router-outlet>
            <app-feedback _nghost-sc15="" class="ng-star-inserted">
                <div _ngcontent-sc15="" class="container my-5">
                    <h2 _ngcontent-sc15="" class="text-center my-5">FEEDBACK</h2><strong _ngcontent-sc15=""
                        class="text-center ml-3 mb-4" style={{fontSize:'16px'}}>Please share your feedback!! It's valuable for us!!</strong>
                    <form _ngcontent-sc15="" class="mt-2 ng-untouched ng-pristine ng-invalid" novalidate="">
                        <mat-form-field _ngcontent-sc15="" appearance="fill"
                            class="col-md-6 mat-form-field ng-tns-c14-0 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                            <div class="mat-form-field-wrapper">
                                <div class="mat-form-field-flex">
                                    { /*<!----> */}
                                    { /*<!----> */}
                                    <div class="mat-form-field-infix"><input _ngcontent-sc15=""
                                            class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                            matinput="" 
                                            placeholder="Name" 
                                            type="text" 
                                            value={this.state.name} 
                                            id="mat-input-1150"
                                            aria-invalid="false" 
                                            aria-required="false"
                                            onChange={(event)=>{this.onValueChanged(event,'name')}} /><span
                                            class="mat-form-field-label-wrapper">
                                            { /*<!----> */}<label
                                                class="mat-form-field-label ng-tns-c14-0 mat-empty mat-form-field-empty ng-star-inserted"
                                                id="mat-form-field-label-2749" for="mat-input-1150"
                                                aria-owns="mat-input-1150">
                                                { /*<!----> */}
                                                { /*<!----> */}
                                                <mat-label _ngcontent-sc15="" class="ng-star-inserted"> Name *
                                                </mat-label>
                                                { /*<!----> */}
                                                { /*<!----> */}
                                            </label></span></div>
                                    { /*<!----> */}
                                </div>
                                { /*<!----> */}
                                <div class="mat-form-field-underline ng-tns-c14-0 ng-star-inserted"><span
                                        class="mat-form-field-ripple"></span></div>
                                <div class="mat-form-field-subscript-wrapper">
                                    { /*<!----> */}
                                    { /*<!----> */}
                                    <div class="mat-form-field-hint-wrapper ng-tns-c14-0 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                          style={{opacity:"1",transform:"translateY(0%)"}}>
                                        { /*<!----> */}
                                        <div class="mat-form-field-hint-spacer"></div>
                                    </div>
                                </div>
                            </div>
                        </mat-form-field>
                        <mat-form-field _ngcontent-sc15="" appearance="fill"
                            class="col-md-6 mat-form-field ng-tns-c14-1 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid _mat-animation-noopable">
                            <div class="mat-form-field-wrapper">
                                <div class="mat-form-field-flex">
                                    { /*<!----> */}
                                    { /*<!----> */}
                                    <div class="mat-form-field-infix"><input _ngcontent-sc15=""
                                            class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-valid"
                                            matinput="" 
                                            placeholder="Company Name" 
                                            type="text" 
                                            value={this.state.company}
                                            onChange={(event)=>{this.onValueChanged(event,'company')}}
                                            id="mat-input-1151" 
                                            aria-invalid="false" 
                                            aria-required="false" /><span
                                            class="mat-form-field-label-wrapper">
                                            { /*<!----> */}<label
                                                class="mat-form-field-label ng-tns-c14-1 mat-empty mat-form-field-empty ng-star-inserted"
                                                id="mat-form-field-label-2751" for="mat-input-1151"
                                                aria-owns="mat-input-1151">
                                                { /*<!----> */}
                                                { /*<!----> */}
                                                <mat-label _ngcontent-sc15="" class="ng-star-inserted">Company Name
                                                </mat-label>
                                                { /*<!----> */}
                                                { /*<!----> */}
                                            </label></span></div>
                                    { /*<!----> */}
                                </div>
                                { /*<!----> */}
                                <div class="mat-form-field-underline ng-tns-c14-1 ng-star-inserted"><span
                                        class="mat-form-field-ripple"></span></div>
                                <div class="mat-form-field-subscript-wrapper">
                                    { /*<!----> */}
                                    { /*<!----> */}
                                    <div class="mat-form-field-hint-wrapper ng-tns-c14-1 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                          style={{opacity:"1",transform:"translateY(0%)"}}>
                                        { /*<!----> */}
                                        <div class="mat-form-field-hint-spacer"></div>
                                    </div>
                                </div>
                            </div>
                        </mat-form-field>
                        <mat-form-field _ngcontent-sc15="" appearance="fill"
                            class="col-md-6 mat-form-field ng-tns-c14-2 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                            <div class="mat-form-field-wrapper">
                                <div class="mat-form-field-flex">
                                    { /*<!----> */}
                                    { /*<!----> */}
                                    <div class="mat-form-field-infix"><input _ngcontent-sc15=""
                                            class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                            matinput="" 
                                            placeholder="Email Id" 
                                            type="text" 
                                            value={this.state.email}
                                            onChange={(event)=>{this.onValueChanged(event,'email')}}
                                            id="mat-input-1152" 
                                            aria-invalid="false" 
                                            aria-required="false" /><span
                                            class="mat-form-field-label-wrapper">
                                            { /*<!----> */}<label
                                                class="mat-form-field-label ng-tns-c14-2 mat-empty mat-form-field-empty ng-star-inserted"
                                                id="mat-form-field-label-2753" for="mat-input-1152"
                                                aria-owns="mat-input-1152">
                                                { /*<!----> */}
                                                { /*<!----> */}
                                                <mat-label _ngcontent-sc15="" class="ng-star-inserted">Email Id *
                                                </mat-label>
                                                { /*<!----> */}
                                                { /*<!----> */}
                                            </label></span></div>
                                    { /*<!----> */}
                                </div>
                                { /*<!----> */}
                                <div class="mat-form-field-underline ng-tns-c14-2 ng-star-inserted"><span
                                        class="mat-form-field-ripple"></span></div>
                                <div class="mat-form-field-subscript-wrapper">
                                    { /*<!----> */}
                                    { /*<!----> */}
                                    <div class="mat-form-field-hint-wrapper ng-tns-c14-2 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                          style={{opacity:"1",transform:"translateY(0%)"}}>
                                        { /*<!----> */}
                                        <div class="mat-form-field-hint-spacer"></div>
                                    </div>
                                </div>
                            </div>
                        </mat-form-field>
                        <mat-form-field _ngcontent-sc15="" appearance="fill"
                            class="col-md-6 mat-form-field ng-tns-c14-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                            <div class="mat-form-field-wrapper">
                                <div class="mat-form-field-flex">
                                    { /*<!----> */}
                                    { /*<!----> */}
                                    <div class="mat-form-field-infix"><input _ngcontent-sc15=""
                                            class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                            matinput=""
                                             placeholder="Mobile Number"
                                              type="tel"
                                               value={this.state.mobile}
                                               onChange={(event)=>{this.onValueChanged(event,'mobile')}}
                                            id="mat-input-1153" aria-invalid="false" aria-required="false" /><span
                                            class="mat-form-field-label-wrapper">
                                            { /*<!----> */}<label
                                                class="mat-form-field-label ng-tns-c14-3 mat-empty mat-form-field-empty ng-star-inserted"
                                                id="mat-form-field-label-2755" for="mat-input-1153"
                                                aria-owns="mat-input-1153">
                                                { /*<!----> */}
                                                { /*<!----> */}
                                                <mat-label _ngcontent-sc15="" class="ng-star-inserted">Mobile Number
                                                    *</mat-label>
                                                { /*<!----> */}
                                                { /*<!----> */}
                                            </label></span></div>
                                    { /*<!----> */}
                                </div>
                                { /*<!----> */}
                                <div class="mat-form-field-underline ng-tns-c14-3 ng-star-inserted"><span
                                        class="mat-form-field-ripple"></span></div>
                                <div class="mat-form-field-subscript-wrapper">
                                    { /*<!----> */}
                                    { /*<!----> */}
                                    <div class="mat-form-field-hint-wrapper ng-tns-c14-3 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                        style={{opacity:"1",transform:"translateY(0%)"}}>
                                        { /*<!----> */}
                                        <div class="mat-form-field-hint-spacer"></div>
                                    </div>
                                </div>
                            </div>
                        </mat-form-field>
                        <mat-form-field _ngcontent-sc15="" appearance="fill"
                            class="col-md-12 mat-form-field ng-tns-c14-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                            <div class="mat-form-field-wrapper">
                                <div class="mat-form-field-flex">
                                    { /*<!----> */}
                                    { /*<!----> */}
                                    <div class="mat-form-field-infix"><textarea _ngcontent-sc15=""
                                            class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                            matinput="" 
                                            placeholder="Your Feedback" 
                                            value={this.state.feedback}
                                            id="mat-input-1154"
                                            aria-invalid="false"
                                             aria-required="false"
                                             onChange={(event)=>{this.onValueChanged(event,'feedback')}}></textarea><span
                                            class="mat-form-field-label-wrapper">
                                            { /*<!----> */}<label
                                                class="mat-form-field-label ng-tns-c14-4 mat-empty mat-form-field-empty ng-star-inserted"
                                                id="mat-form-field-label-2757" for="mat-input-1154"
                                                aria-owns="mat-input-1154">
                                                { /*<!----> */}
                                                { /*<!----> */}
                                                <mat-label _ngcontent-sc15="" class="ng-star-inserted">Feedback *
                                                </mat-label>
                                                { /*<!----> */}
                                                { /*<!----> */}
                                            </label></span></div>
                                    { /*<!----> */}
                                </div>
                                { /*<!----> */}
                                <div class="mat-form-field-underline ng-tns-c14-4 ng-star-inserted"><span
                                        class="mat-form-field-ripple"></span></div>
                                <div class="mat-form-field-subscript-wrapper">
                                    { /*<!----> */}
                                    { /*<!----> */}
                                    <div class="mat-form-field-hint-wrapper ng-tns-c14-4 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                          style={{opacity:"1",transform:"translateY(0%)"}}>
                                        {/* <!----> */}
                                        <div class="mat-form-field-hint-spacer"></div>
                                    </div>
                                </div>
                            </div>
                        </mat-form-field>
                        <div _ngcontent-sc15="" class="ml-3" style={{textAlign:'center'}}><button _ngcontent-sc15="" color="primary"
                                mat-raised-button=""
                                class="mat-raised-button mat-primary _mat-animation-noopable"><span
                                    class="mat-button-wrapper">Submit</span>
                                <div class="mat-button-ripple mat-ripple" matripple=""></div>
                                <div class="mat-button-focus-overlay"></div>
                            </button></div>
                    </form>
                </div>
            </app-feedback>
        </div>
    
        );
    }
}

function mapStateToProps(state){
    return state;
    }
    
    const connectedFeedback=connect(mapStateToProps)(Feedback);
    export {connectedFeedback as Feedback};
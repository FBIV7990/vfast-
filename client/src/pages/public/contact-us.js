import React from 'react';
import {connect} from 'react-redux';

class ContactUs extends React.Component{
    constructor(props){
        super(props)
        this.state-={
            name:'',
            mobile:'',
            email:'',
            company:'',
            employees:'',
            department:'',
            message:'',
        }
    }


    onValueChanged(e,key){
        this.setState({[key] : e.target.value})
      }
    render(){
        return( 

            // <app-root _nghost-sc0="" ng-version="7.2.12">
            // <router-outlet _ngcontent-sc0=""></router-outlet>
            // <app-verification-detail _nghost-sc6="" class="ng-star-inserted">
            <div _ngcontent-sc6="" class="main">
            <router-outlet _ngcontent-sc6=""></router-outlet>
            <app-contact-us-form _nghost-sc33="" class="ng-star-inserted">
                <div _ngcontent-sc33="" class="container">
                    <h2 _ngcontent-sc33="" class="my-4">CONTACT US</h2>
                    <div _ngcontent-sc33="" class="controlUsForm">
                        <form _ngcontent-sc33="" class="mt-2 ng-untouched ng-pristine ng-invalid" novalidate="">
                            <mat-form-field _ngcontent-sc33="" appearance="fill"
                                class="col-md-6 mat-form-field ng-tns-c14-0 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                                <div class="mat-form-field-wrapper">
                                    <div class="mat-form-field-flex">
                                    
                                        <div class="mat-form-field-infix"><input _ngcontent-sc33=""
                                                class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                                matinput=""
                                                 placeholder="Name" 
                                                 type="text" 
                                                 value={this.state.name}
                                                id="mat-input-1140" 
                                                aria-invalid="false"
                                                 aria-required="false"
                                                 onChange={(event)=>{this.onValueChanged(event,'name')}} /><span
                                                class="mat-form-field-label-wrapper">
                                                
                                                <label
                                                    class="mat-form-field-label ng-tns-c14-0 mat-empty mat-form-field-empty ng-star-inserted"
                                                    id="mat-form-field-label-2725" for="mat-input-1140"
                                                    aria-owns="mat-input-1140">
                                                  
                                                    <mat-label _ngcontent-sc33="" class="ng-star-inserted"> Name
                                                    </mat-label>
                                                  
                                                </label></span></div>
                                     
                                    </div>
                     <div class="mat-form-field-underline ng-tns-c14-0 ng-star-inserted"><span
                                            class="mat-form-field-ripple"></span></div>
                                    <div class="mat-form-field-subscript-wrapper">
                                        {/* <!----> */}
                                        {/* <!----> */}
                                        <div class="mat-form-field-hint-wrapper ng-tns-c14-0 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                            style={{opacity:"1",transform:"translateY(0%)"}}>
                                            {/* <!----> */}
                                            <div class="mat-form-field-hint-spacer"></div>
                                        </div>
                                    </div>
                                </div>
                            </mat-form-field>
                            <mat-form-field _ngcontent-sc33="" appearance="fill"
            class="col-md-6 mat-form-field ng-tns-c14-1 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                                <div class="mat-form-field-wrapper">
                                    <div class="mat-form-field-flex">
                                        {/* <!----> */}
                                        {/* <!----> */}
                                        <div class="mat-form-field-infix"><input _ngcontent-sc33=""
                                                class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                                matinput=""
                                                 placeholder="Mobile Number"
                                                  type="tel" 
                                                  value={this.state.mobile}
                                                  onChange={(event)=>{this.onValueChanged(event,'mobile')}}
                                                id="mat-input-1141"
                                                 aria-invalid="false"
                                                 aria-required="false"
                                                  /><span
                                                class="mat-form-field-label-wrapper">
                                                {/* <!----> */}
                                                <label
                                                    class="mat-form-field-label ng-tns-c14-1 mat-empty mat-form-field-empty ng-star-inserted"
                                                    id="mat-form-field-label-2727" for="mat-input-1141"
                                                    aria-owns="mat-input-1141">
                                                    {/* <!----> */}
                                                    {/* <!----> */}
                                                    <mat-label _ngcontent-sc33="" class="ng-star-inserted">Mobile
                                                        Number</mat-label>
                                                    {/* <!----> */}
                                                    {/* <!----> */}
                                                </label></span></div>
                                        {/* <!----> */}
                                    </div>
                                    {/* <!----> */}
                                    <div class="mat-form-field-underline ng-tns-c14-1 ng-star-inserted"><span
                                            class="mat-form-field-ripple"></span></div>
                                    <div class="mat-form-field-subscript-wrapper">
                                        {/* <!----> */}
                                        {/* <!----> */}
                                        <div class="mat-form-field-hint-wrapper ng-tns-c14-1 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                            style={{opacity:"1",transform:"translateY(0%)"}}>
                                            {/* <!----> */}
                                            <div class="mat-form-field-hint-spacer"></div>
                                        </div>
                                    </div>
                                </div>
                            </mat-form-field>
                            <mat-form-field _ngcontent-sc33="" appearance="fill"
                                class="col-md-6 mat-form-field ng-tns-c14-2 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid _mat-animation-noopable">
                                <div class="mat-form-field-wrapper">
                                    <div class="mat-form-field-flex">
                                        {/* <!----> */}
                                        {/* <!----> */}
                                        <div class="mat-form-field-infix"><input _ngcontent-sc33=""
                                                class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-invalid"
                                                matinput=""
                                                placeholder="Email Id"
                                                 type="text"
                                                 value={this.state.email}
                                                 onChange={(event)=>{this.onValueChanged(event,'email')}}
                                                id="mat-input-1142" 
                                                aria-invalid="false"
                                                 aria-required="false" /><span
                                                class="mat-form-field-label-wrapper">
                                                {/* <!----> */}
                                                <label
                                                    class="mat-form-field-label ng-tns-c14-2 mat-empty mat-form-field-empty ng-star-inserted"
                                                    id="mat-form-field-label-2729" for="mat-input-1142"
                                                    aria-owns="mat-input-1142">
                                                    {/* <!----> */}
                                                    {/* <!----> */}
                                                    <mat-label _ngcontent-sc33="" class="ng-star-inserted">Email Id
                                                    </mat-label>
                                                    {/* <!----> */}
                                                    {/* <!----> */}
                                                </label></span></div>
                                        {/* <!----> */}
                                    </div>
                                    {/* <!----> */}
                                    <div class="mat-form-field-underline ng-tns-c14-2 ng-star-inserted"><span
                                            class="mat-form-field-ripple"></span></div>
                                    <div class="mat-form-field-subscript-wrapper">
                                        {/* <!----> */}
                                        {/* <!----> */}
                                        <div class="mat-form-field-hint-wrapper ng-tns-c14-2 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                            style={{opacity:"1",transform:"translateY(0%)"}}>
                                            {/* <!----> */}
                                            <div class="mat-form-field-hint-spacer"></div>
                                        </div>
                                    </div>
                                </div>
                            </mat-form-field>
                            <mat-form-field _ngcontent-sc33="" appearance="fill"
                                class="col-md-6 mat-form-field ng-tns-c14-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid _mat-animation-noopable">
                                <div class="mat-form-field-wrapper">
                                    <div class="mat-form-field-flex">
                                        {/* <!----> */}
                                        {/* <!----> */}
                                        <div class="mat-form-field-infix"><input _ngcontent-sc33=""
                                                class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-valid"
                                                matinput="" 
                                                placeholder="Company Name"
                                                 type="text"
                                                 value={this.state.company}
                                                 onChange={(event)=>{this.onValueChanged(event,'company')}}
                                                id="mat-input-1143" aria-invalid="false"
                                                 aria-required="false" /><span
                                                class="mat-form-field-label-wrapper">
                                                {/* <!----> */}
                                                <label
                                                    class="mat-form-field-label ng-tns-c14-3 mat-empty mat-form-field-empty ng-star-inserted"
                                                    id="mat-form-field-label-2731" for="mat-input-1143"
                                                    aria-owns="mat-input-1143">
                                                    {/* <!----> */}
                                                    {/* <!----> */}
                                                    <mat-label _ngcontent-sc33="" class="ng-star-inserted">Company
                                                        Name</mat-label>
                                                    {/* <!----> */}
                                                    {/* <!----> */}
                                                </label></span></div>
                                        {/* <!----> */}
                                    </div>
                                    {/* <!----> */}
                                    <div class="mat-form-field-underline ng-tns-c14-3 ng-star-inserted"><span
                                            class="mat-form-field-ripple"></span></div>
                                    <div class="mat-form-field-subscript-wrapper">
                                        {/* <!----> */}
                                        {/* <!----> */}
                                        <div class="mat-form-field-hint-wrapper ng-tns-c14-3 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                            style={{opacity:"1",transform:"translateY(0%)"}}>
                                            {/* <!----> */}
                                            <div class="mat-form-field-hint-spacer"></div>
                                        </div>
                                    </div>
                                </div>
                            </mat-form-field>
                            <mat-form-field _ngcontent-sc33="" appearance="fill"
                                class="col-md-6 mat-form-field ng-tns-c14-4 mat-primary mat-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label ng-untouched ng-pristine ng-invalid _mat-animation-noopable mat-form-field-should-float">
                                <div class="mat-form-field-wrapper">
                                    <div class="mat-form-field-flex">
                                         <div class="mat-form-field-infix">
                                             <select
                                                        role="listbox" id="mat-select-222" 
                                                        tabindex="0"
                                                        aria-labelledby="mat-form-field-label-2733"
                                                         aria-required="false"
                                                        aria-disabled="false" 
                                                        aria-invalid="false"
                                                        aria-multiselectable="false"
                                             className='mat-select ng-tns-c34-5 ng-untouched ng-pristine ng-invalid ng-star-inserted'
                                             style={{border:'0px solid white',background:'#F5F5F5'}}
                                              onChange={(event)=>{this.onValueChanged(event,'employees')}}>
                                                  <option value='' className="ng-tns-c34-5 ng-star-inserted">Select No of Employees</option>
                                                  <option value='' className='mat-select-value-text ng-tns-c6-5 ng-star-inserted'>1-10</option>
                                                  <option value='' className='mat-option-text'>100-500</option>
                                                  <option value='' className='mat-option-text'>above 500</option>
                                                          
                                                  </select>
                                                  
                                          
                                         {/* <select _ngcontent-sc33=""
                                                class="mat-select ng-tns-c34-5 ng-untouched ng-pristine ng-invalid ng-star-inserted"
                                                role="listbox" id="mat-select-222" 
                                                tabindex="0"
                                                aria-labelledby="mat-form-field-label-2733"
                                                 aria-required="false"
                                                aria-disabled="false" 
                                                aria-invalid="false"
                                                aria-multiselectable="false"
                                                style={{border:'0px solid #F5F5F5',background:'#F5F5F5'}}
                                                onChange={(event)=>{this.onValueChanged(event,' employees')}}>
                                                <div class="mat-select-trigger" aria-hidden="true"
                                                    cdk-overlay-origin="">
                                                    <div class="mat-select-value">
                                         <span class="mat-select-value-text ng-tns-c34-5 ng-star-inserted">
                                                        
                                                            <span
                                                                class="ng-tns-c34-5 ng-star-inserted">Select Number
                                                                of Employees</span>
                                                         
                                                            </span></div>
                                                    <div class="mat-select-arrow-wrapper">
                                                        <div class="mat-select-arrow"></div>
                                                    </div>
                                                </div>
                                        
                                            </select>  */}
                                            <span class="mat-form-field-label-wrapper">
                                             
                                                <label
                                                    class="mat-form-field-label ng-tns-c14-4 ng-star-inserted"
                                                    id="mat-form-field-label-2733" for="mat-select-222"
                                                    aria-owns="mat-select-222">
                                                
                                                    <mat-label _ngcontent-sc33="" class="ng-star-inserted">Number of
                                                        Employees</mat-label>
                                                
                                                </label></span>
                                        </div>
                                                                          </div>
                                  
                                    <div class="mat-form-field-underline ng-tns-c14-4 ng-star-inserted"><span
                                            class="mat-form-field-ripple"></span></div>
                                    <div class="mat-form-field-subscript-wrapper">
                                    
                                        <div class="mat-form-field-hint-wrapper ng-tns-c14-4 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                            style={{opacity:"1",transform:"translateY(0%)"}}>
                                            {/* <!----> */}
                                            <div class="mat-form-field-hint-spacer"></div>
                                        </div>
                                    </div>
                                </div>
                            </mat-form-field>
                            <mat-form-field _ngcontent-sc33="" appearance="fill"
                                class="col-md-6 mat-form-field ng-tns-c14-6 mat-primary mat-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label ng-untouched ng-pristine ng-invalid _mat-animation-noopable mat-form-field-should-float">
                                <div class="mat-form-field-wrapper">
                                    <div class="mat-form-field-flex">
                                       
                                        <div class="mat-form-field-infix">
                                       <select
                                                        role="listbox" id="mat-select-222" 
                                                        tabindex="0"
                                                        aria-labelledby="mat-form-field-label-2733"
                                                         aria-required="false"
                                                        aria-disabled="false" 
                                                        aria-invalid="false"
                                                        aria-multiselectable="false"
                                             className='mat-select ng-tns-c34-5 ng-untouched ng-pristine ng-invalid ng-star-inserted'
                                             style={{border:'0px solid white',background:'#F5F5F5'}}
                                              onChange={(event)=>{this.onValueChanged(event,'department')}}>
                                                  <option value='' className="ng-tns-c34-5 ng-star-inserted">Select Department Name</option>
                                                  <option value='' className='mat-select-value-text ng-tns-c6-5 ng-star-inserted'>1-10</option>
                                                  <option value='' className='mat-option-text'>100-500</option>
                                                  <option value='' className='mat-option-text'>above 500</option>
                                                          
                                                  </select> 
                                            {/* <mat-select _ngcontent-sc33=""
                                                class="mat-select ng-tns-c34-7 ng-untouched ng-pristine ng-invalid ng-star-inserted"
                                                role="listbox" id="mat-select-223" tabindex="0"
                                                aria-labelledby="mat-form-field-label-2735" aria-required="false"
                                                aria-disabled="false" aria-invalid="false"
                                                aria-multiselectable="false">
                                                <div class="mat-select-trigger" aria-hidden="true"
                                                    cdk-overlay-origin="">
                                                    <div class="mat-select-value">
                                                       
                                                        <span
                                                            class="mat-select-value-text ng-tns-c34-7 ng-star-inserted">
                                                         
                                                            <span
                                                                class="ng-tns-c34-7 ng-star-inserted">Select
                                                                Department Name</span>
                                                      
                                                            </span></div>
                                                    <div class="mat-select-arrow-wrapper">
                                                        <div class="mat-select-arrow"></div>
                                                    </div>
                                                </div>
                                                                                 </mat-select> */}
                                            <span class="mat-form-field-label-wrapper">
                                               
                                                <label
                                                    class="mat-form-field-label ng-tns-c14-6 ng-star-inserted"
                                                    id="mat-form-field-label-2735" for="mat-select-223"
                                                    aria-owns="mat-select-223">
                                                    {/* <!----> */}
                                                    {/* <!----> */}
                                                    <mat-label _ngcontent-sc33="" class="ng-star-inserted">
                                                        Department Name</mat-label>
                                                    {/* <!----> */}
                                                    {/* <!----> */}
                                                </label></span>
                                        </div>
                                        {/* <!----> */}
                                    </div>
                                    {/* <!----> */}
                                    <div class="mat-form-field-underline ng-tns-c14-6 ng-star-inserted"><span
                                            class="mat-form-field-ripple"></span></div>
                                    <div class="mat-form-field-subscript-wrapper">
                                        {/* <!----> */}
                                        {/* <!----> */}
                                        <div class="mat-form-field-hint-wrapper ng-tns-c14-6 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                            style={{opacity:"1",transform:"translateY(0%)"}}>
                                            {/* <!----> */}
                                            <div class="mat-form-field-hint-spacer"></div>
                                        </div>
                                    </div>
                                </div>
                            </mat-form-field>
                            <mat-form-field _ngcontent-sc33="" appearance="fill"
                                class="col-md-12 mat-form-field ng-tns-c14-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid _mat-animation-noopable">
                                <div class="mat-form-field-wrapper">
                                    <div class="mat-form-field-flex">
                                        {/* <!---->
                                        <!----> */}
                                        <div class="mat-form-field-infix"><textarea _ngcontent-sc33=""
                                                class="mat-input-element mat-form-field-autofill-control mat-input-server ng-untouched ng-pristine ng-valid"
                                                matinput="" 
                                                placeholder="Message"
                                                 value="" 
                                                 id="mat-input-1144"
                                                aria-invalid="false"
                                                 aria-required="false"
                                                 value={this.state.message}
                                                 onChange={(event)=>{this.onValueChanged(event,'message')}}
                                                 ></textarea><span
                                                class="mat-form-field-label-wrapper">
                                                {/* <!----> */}
                                                <label
                                                    class="mat-form-field-label ng-tns-c14-8 mat-empty mat-form-field-empty ng-star-inserted"
                                                    id="mat-form-field-label-2737" for="mat-input-1144"
                                                    aria-owns="mat-input-1144">
                                                    {/* <!---->
                                                    <!----> */}
                                                    <mat-label _ngcontent-sc33="" class="ng-star-inserted">Message
                                                    </mat-label>
                                        
                                                </label></span></div>
                                        {/* <!----> */}
                                    </div>
                                    {/* <!----> */}
                                    <div class="mat-form-field-underline ng-tns-c14-8 ng-star-inserted"><span
                                            class="mat-form-field-ripple"></span></div>
                                    <div class="mat-form-field-subscript-wrapper">
                                        {/* <!---->
                                        <!----> */}
                                        <div class="mat-form-field-hint-wrapper ng-tns-c14-8 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                            style={{opacity:"1",transform:"translateY(0%)"}}>
                                            {/* <!----> */}
                                            <div class="mat-form-field-hint-spacer"></div>
                                        </div>
                                    </div>
                                </div>
                            </mat-form-field>
                            <div _ngcontent-sc33="" class="ml-3"><button _ngcontent-sc33="" color="primary"
                                    mat-raised-button=""
                                    class="mat-raised-button mat-primary _mat-animation-noopable"><span
                                        class="mat-button-wrapper">Submit</span>
                                    <div class="mat-button-ripple mat-ripple" matripple=""></div>
                                    <div class="mat-button-focus-overlay"></div>
                                </button></div>
                        </form>
                        <div _ngcontent-sc33="" class="disclaimer mt-5 p-2">
                            <p _ngcontent-sc33=""><strong _ngcontent-sc33="">Disclaimer: </strong>By submitting this
                                form, you agree to our company (FBIV Infocomm Pvt Ltd) Terms &amp; Conditions, under
                                that VFAST can contact you for the products and services by our entire modes of
                                communication regardless you’re registered and listed on DND (Do Not Disturb) or DNC
                                (Do Not Call) services.</p>
                        </div>
                        <hr _ngcontent-sc33="" />
                        <div _ngcontent-sc33="" class="details">
                            <div _ngcontent-sc33="" class="box"><i _ngcontent-sc33=""
                                    class="fas fa-map-marker-alt"></i>
                                <div _ngcontent-sc33="">
                                    <h4 _ngcontent-sc33="">Address</h4>
                                    <p _ngcontent-sc33=""><strong _ngcontent-sc33="">FBIV Infocomm Pvt.
                                            Ltd.</strong><br _ngcontent-sc33="" /> D-2/6, Krishna Nagar, Delhi-110051
                                    </p>
                                </div>
                            </div>
                            <div _ngcontent-sc33="" class="box"><i _ngcontent-sc33="" class="fas fa-envelope"></i>
                                <div _ngcontent-sc33="">
                                    <h4 _ngcontent-sc33="">Email</h4><a _ngcontent-sc33=""
                                        href="mailto:info@vfast.in">info@vfast.in</a>
                                </div>
                            </div>
                            <div _ngcontent-sc33="" class="box"><i _ngcontent-sc33="" class="fas fa-phone"></i>
                                <div _ngcontent-sc33="">
                                    <h4 _ngcontent-sc33="">Contact No.</h4><a _ngcontent-sc33=""
                                        href="tel:+91-1141002777">+91 11 410 02777</a><br _ngcontent-sc33=""/><a
                                        _ngcontent-sc33="" href="tel:+91-1145502777">+91 11 455 02777</a>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-sc33="" class="display my-2">
                            <div _ngcontent-sc33="" style={{fontSize:'18px'}}><strong _ngcontent-sc33="" >GSTIN : </strong> 07AADCF7200K1ZR
                            </div>
                            <div _ngcontent-sc33="" style={{fontSize:'18px'}}><strong _ngcontent-sc33="" >CIN No :
                                </strong>U74999DL2019PTC349308 </div>
                            <div _ngcontent-sc33="" style={{fontSize:'18px'}}><strong _ngcontent-sc33="">Toll Free No : </strong>1800 572 7797
                            </div>
                        </div>
                    </div>
                </div>
            </app-contact-us-form>
        </div>
// </app-verification-detail>
// </app-root>
        );
    }
}
function mapStateToProps(state){
    return state;
    }
    
    const connectedContactUs=connect(mapStateToProps)(ContactUs);
    export {connectedContactUs as ContactUs};
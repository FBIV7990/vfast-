import React from 'react';
import {connect} from 'react-redux';

class Faq extends React.Component{

    onCollapse(){
        var coll = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            } 
          });
        }
    }
    render(){
        return( 
            // <app-root _nghost-sc0="" ng-version="7.2.12">
            // <router-outlet _ngcontent-sc0=""></router-outlet>
            // <app-verification-detail _nghost-sc6="" class="ng-star-inserted">
            <div _ngcontent-sc6="" class="main">
            <router-outlet _ngcontent-sc6=""></router-outlet>
            <app-faq _nghost-sc27="" class="ng-star-inserted">
                <div _ngcontent-sc27="" class="header-title">
                    <div _ngcontent-sc27="" class="container"><img _ngcontent-sc27="" alt="FAQs"
                            src="../assets/faqs.svg" />
                        <h2 _ngcontent-sc27="">Frequently Asked Questions (FAQ's)</h2>
                    </div>
                </div>
                <div _ngcontent-sc27="" class="faq">
                    <mat-accordion _ngcontent-sc27="" class="mat-accordion">
                  
                    <button class="collapsible" onMouseDown={()=>{this.onCollapse()}} ><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px',marginBottom:'-7px'}}>
                                         </i>&nbsp;&nbsp;<b style={{paddingTop:'-5px'}}> How
                                            to download the application?</b></button>
<div class="faq-content">
  <p>VFAST application is available on play store. You can
                                        visit the play store by clicking on this link..</p>
</div>
 <button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b> How to
                                     register?</b></button>
<div class="faq-content">
  <p>You can register as individual or company by filling out
                                        these details.</p>
                                        <ol>
                                            <li>Name </li>
                                            <li>Mobile (Generate OTP Enter OTP)</li>
                                            <li>E-Mail</li>
                                            <li> DOB</li>
                                            <li>Nationality</li>
                                            <li>Aadhar Card Number or Pan card Number</li>
                                            <li>Your complete address</li>
                                            <li>Then press submit. You can also register on the
                                            website by clicking on sign up.</li>
                                            <li>Type in your Email address, Mobile, and password.</li>
                                            <li> Sign in with your mobile number and verify using the
                                            OTP.</li>
                                                                        </ol>
</div>

<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b>  How
                                     to upload your documents? </b></button>
<div class="faq-content">
  <p>Need more information on this. – Three options</p>
</div>

<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b> What’s
                                     a background check? </b></button>
<div class="faq-content">
  <p>A background check is a complete physical and virtual
                                        verification process in which we check a subject’s </p>
                                        <ul >
                                        <li> Educational references </li>
                                        <li> Professional References </li>
                                        <li> Address verification </li>
                                        <li> Miscellaneous tests </li>
                                    </ul>
</div>

<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b> What
                                     are the different kinds of background checks that VFAST provides? </b></button>
<div class="faq-content">
<p >VFAST provides these types of background checks:</p>
                                    <ul>
                                        <li> Tenant Verification </li>
                                        <li> Company Verification </li>
                                        <li> Contractor Verification </li>
                                        <li> Bride/Groom Verification </li>
                                        <li> Property Verification </li>
                                        <li> Vehicle Verification </li>
                                    </ul>
</div>
<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b> What
                                     information is needed in background checks?</b></button>
<div class="faq-content">
<p>Other than the consent of the person you are getting
                                        verified, we will need miscellaneous information: </p>
                                    <ul>
                                        <li> Identification information </li>
                                        <li> Reputation verification </li>
                                        <li> Documentation check</li>
                                        <li> Qualification Verification </li>
                                        <li> Miscellaneous check </li>
                                    </ul>
</div>

<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b>  Is
                                     the service international?</b></button>
<div class="faq-content">
<p>No. We operate throughout India but not
                                        internationally. </p>
</div>
<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b> Why
                                     should we conduct background verification?</b></button>
<div class="faq-content">
<p>Conducting background verification is useful in many ways:
                                    </p>
                                    <ul>
                                        <li> To check the accuracy of the subject’s qualification
                                            and other documents. </li>
                                        <li> To protect the employer, organization and customers.
                                        </li>
                                        <li> To hire quality professionals who will prove to be
                                            assets for the company.</li>
                                        <li> To cut the cost of hiring professionals and training
                                            them.</li>
                                    </ul>
</div>

<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b>   How
                                     to share your reports?</b></button>
<div class="faq-content">
<p >The process is simple for sharing the reports generated by
                                        us:</p>
                                    <ul>
                                        <li> Download the VFAST application </li>
                                        <li> Complete edit profile section and fill out your
                                            details </li>
                                        <li> You scan the QR code </li>
                                        <li> An OTP will be generated using which you will access
                                            the files</li>
                                        <li> Use the OTP to access the file</li>
                                    </ul>
</div>

<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b>   How
                                     to contact customer care?</b></button>
<div class="faq-content">
<p >You can call on – (mention) contact numbers</p>
                            
</div>
<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b> How
                                     to cancel your order?</b></button>
<div class="faq-content">
<p >VFAST follows a no-cancellation policy. Once you place an
                                        order, there’s cancellation available. You will receive a report as
                                        promised.</p>
                            
</div>

<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b> How
                                     to update your number?</b></button>
<div class="faq-content">
<p >Information not available.</p>
                            
</div>

<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b> How to
                                     change your details? </b></button>
<div class="faq-content">
<p >Information not available.</p>
                            
</div>
<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b> How to
                                     find out more about your surveyor? </b></button>
<div class="faq-content">
<p >Information not available.</p>
                            
</div>
<button class="collapsible" onClick={()=>{this.onCollapse()}}><i
                                     class="far fa-question-circle" style={{color:'#000080',fontSize:'30px'}}></i>&nbsp;&nbsp;<b> How to
                                     change subject (Employee/Travel/Company/Tenant/etc.) information?</b></button>
<div class="faq-content">
<p >Information not available.</p>
                            
</div>
                    </mat-accordion>
                </div>
            </app-faq>
        </div>
        /* </app-verification-detail>
        </app-root> */
        );
    }
}

function mapStateToProps(state){
    return state;
    }
    
    const connectedFaq=connect(mapStateToProps)(Faq);
    export {connectedFaq as Faq};
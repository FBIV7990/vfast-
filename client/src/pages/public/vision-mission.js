import React from 'react';
import {connect} from 'react-redux';


class VisionMission extends React.Component{
    render()
    {
        return(
            // <app-root _nghost-sc0="" ng-version="7.2.12">
            // <router-outlet _ngcontent-sc0=""></router-outlet>
            // <app-verification-detail _nghost-sc6="" class="ng-star-inserted">
            <div _ngcontent-sc6="" class="main">
            <router-outlet _ngcontent-sc6=""></router-outlet>
            <app-about-us _nghost-sc25="">
                <div _ngcontent-sc25="" class="container">
                    <h2 _ngcontent-sc25="" class="text-center my-5">VISION &amp; MISSION</h2>
                    <h5 _ngcontent-sc25="" class="my-3">VISION</h5>
                    <p _ngcontent-sc25=""> Our vision is to provide cutting edge, state of the art and best in
                        industry verification services and become an industry leader as we excel in the field of
                        verification services. We provide foolproof verification and ensure that you get
                        comprehensive reports and our vision is to establish ourselves as a leading verification
                        service provider. </p>
                    <h5 _ngcontent-sc25="" class="my-3 mt-5">MISSION – Our Values</h5><strong _ngcontent-sc25="" style={{fontSize:'18px'}}>As
                        we move forward to an era of transparency, these are our values: </strong>
                    <ul _ngcontent-sc25="">
                        <li _ngcontent-sc25=""> Honoring commitments </li>
                        <li _ngcontent-sc25=""> Ensuring the business is done with the highest levels of ethics and
                            performance standards </li>
                        <li _ngcontent-sc25=""> Maintaining complete privacy in handling data </li>
                        <li _ngcontent-sc25=""> Maintaining integrity </li>
                    </ul>
                    <p _ngcontent-sc25="">Following a stringent code of conduct and complying with all legal and
                        professional standards when dealing with clients and surveyors</p>
                </div>
            </app-about-us>
        </div>
        //  </app-verification-detail>
        // </app-root> 
      
         );
    }
}

function mapStateToProps(state){
    return state;
    }
    
    const connectedVisionMission=connect(mapStateToProps)(VisionMission);
    export {connectedVisionMission as VisionMission};
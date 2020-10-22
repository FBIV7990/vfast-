import React from 'react';
import {connect} from 'react-redux';

class Career extends React.Component{

    render(){

        return(  
            <>
                {/* <app-root _nghost-sc0="" ng-version="7.2.12">
        <router-outlet _ngcontent-sc0=""></router-outlet>
        <app-verification-detail _nghost-sc6="" class="ng-star-inserted"> */}
            <div _ngcontent-sc6="" class="main">
                <router-outlet _ngcontent-sc6=""></router-outlet>
                <app-career _nghost-sc38="">
                    <div _ngcontent-sc38="" class="container">
                        <h2 _ngcontent-sc38="" class="my-4">CAREER WITH US</h2>
                        <p _ngcontent-sc38="">VFAST has challenging assignments, a world-class friendly work environment
                            &amp; a workplace full of energy. VFAST provides the right mix of professional challenges,
                            knowledge and totally amusing at work. VFAST gives its employees ample opportunity to be a
                            part of the world-class leadership development business. It also encourages the
                            cross-functional movement for its employees to gain meaningful and learning exposure. </p>
                        <p _ngcontent-sc38="">VFAST is a highly energetic company filled with people who want to be
                            challenged and rewarded for the meeting of those challenges. Strong and unified teams, a
                            tranquil but disciplined environment and a never say die spirit makes everyone feel the
                            solidarity at the workplace. Regular pieces of trainings and practices by the senior experts
                            to enhance the team’s realm knowledge and keep them abreast of the latest business tools.
                        </p>
                        <div _ngcontent-sc38="" class="box">
                            <div _ngcontent-sc38="" class="row">
                                <div _ngcontent-sc38="" class="col-md-6">
                                    <p _ngcontent-sc38="">VFAST is the fastest leading and evolving verification product
                                        by FBIV Infocomm Pvt Ltd. It’s emerging rapidly and making an impact in the
                                        background verification sector. We have various background check services which
                                        are the most comprehensive and authentic services required in the market.</p>
                                </div>
                                <div _ngcontent-sc38="" class="col-md-6">
                                    <p _ngcontent-sc38="">We have a dedicated and optimum useful Human Resource who
                                        creates a friendly environment for the new employee and provides the best
                                        support &amp; help. VFAST has an adequate company and H.R policies which make
                                        this company a unique &amp; reliable.</p>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-sc38="" class="row">
                            <div _ngcontent-sc38="" class="col-md-12">
                                <p _ngcontent-sc38="" class="mt-2">VFAST has a friendly and learning culture which bonds
                                    everyone to work together and help each other with profound interest. We create a
                                    healthy and positive work environment that helps the team to work peacefully and
                                    deliver 100%. We have always great inductions and celebrations regarding the
                                    achievements, birthday’s, etc. which motivates not only the new comers but also the
                                    entire team members.</p>
                            </div>
                        </div>
                        <div _ngcontent-sc38="" class="col-md-12">
                            <p _ngcontent-sc38="" class="mt-2">VFAST has a great strength of manpower which designates
                                that it’s growing and progressing towards success rapidly. It is accomplishing its goals
                                and targets consecutively. VFAST takes care of everything which an employee basically
                                expects from a company in his/her tenure. VFAST provides the best training and with the
                                best tech support to execute your prime strategies for business success and for personal
                                career growth. Simply, it’s just the best place to work within this company.</p>
                        </div>
                        <div _ngcontent-sc38="" class="text-center col-md-12  my-5 "><button _ngcontent-sc38=""
                                color="primary" mat-raised-button="" routerlink="/home/career-form" tabindex="0"
                                class="mat-raised-button mat-primary _mat-animation-noopable"><span
                                    class="mat-button-wrapper">Join Us Now</span>
                                <div class="mat-button-ripple mat-ripple" matripple=""></div>
                                <div class="mat-button-focus-overlay"></div>
                            </button></div>
                    </div>
                </app-career>
            </div>
            {/* </app-verification-detail>
            </app-root> */}
            </>
        );
    }


}

function mapStateToProps(state){
    return state;
    }
    
    const connectedCareer=connect(mapStateToProps)(Career);
    export {connectedCareer as Career};
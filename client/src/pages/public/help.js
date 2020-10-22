import React from 'react';
import {connect} from 'react-redux';

class Help extends React.Component{
    render(){
        return( 
            // <app-root _nghost-sc0="" ng-version="7.2.12">
            // <router-outlet _ngcontent-sc0=""></router-outlet>
            // <app-verification-detail _nghost-sc6="" class="ng-star-inserted">
            <div _ngcontent-sc6="" class="main">
            <router-outlet _ngcontent-sc6=""></router-outlet>
            <app-help _nghost-sc31="">
                <div _ngcontent-sc31="" class="container">
                    <h2 _ngcontent-sc31="" class="text-center my-5">HELP</h2>
                    <p _ngcontent-sc31=""> We are connected to the end number of users through many platforms like
                        our VFAST App, Live Chat, Tele-Communication, Social Media Networks and offers them the
                        Optimum, Convenient, Inexpensive and Comprehensive background verification services. </p>
                    <p _ngcontent-sc31=""> Users can reach us at any point of time and on any platform we are
                        available. Every platform has created to reach and communicate with the users easily which
                        will help them to get the necessary help regarding the services they have opted. </p>
                </div>
            </app-help>
        </div>
        // </app-verification-detail>
        // </app-root>
        );
    }
}

function mapStateToProps(state){
    return state;
    }
    
    const connectedHelp=connect(mapStateToProps)(Help);
    export {connectedHelp as Help};
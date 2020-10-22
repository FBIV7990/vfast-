import React from 'react';
import {connect} from 'react-redux';

class WhyUs extends React.Component{

    render(){
        return(
            // <app-root _nghost-sc0="" ng-version="7.2.12">
            // <router-outlet _ngcontent-sc0=""></router-outlet>
            // <app-verification-detail _nghost-sc6="" class="ng-star-inserted">
            <div _ngcontent-sc6="" class="main">
            <router-outlet _ngcontent-sc6=""></router-outlet>
            <app-why-us _nghost-sc9="">
                <div _ngcontent-sc9="" class="container">
                    <h2 _ngcontent-sc9="" class="text-center my-5">Why Us</h2>
                    <p _ngcontent-sc9="">VFAST&nbsp;is an online verification product by&nbsp;FBIV&nbsp;Infocomm Pvt
                        Ltd which provides services one&nbsp;of its kind&nbsp;and all together. A
                        leading&nbsp;background&nbsp;verification company, we provide complete background
                        verification concerning everything from a tenant to Bride/Groom to a contractor!</p>
                    <p _ngcontent-sc9="">We are technologically advanced and make sure that we follow this
                        innovative technology to provide you the optimum verification services in the industry. Our
                        services surpass mere employee verification as we provide all sorts of verification services
                        for every facet on life. Moreover, we have created a simple app for you&nbsp;So,&nbsp;you
                        can place your orders at the comfort of your home and get the report in an instant.</p>
                    <p _ngcontent-sc9="">At&nbsp;VFAST, we uphold values that make us&nbsp;superior to&nbsp;our
                        competitors and make our services more innovative. The cutting edge advantage we have is
                        that our services are backed by a new&nbsp;state-of-the-art&nbsp;technology which our
                        competitors&nbsp;don't&nbsp;have.</p>
                </div>
            </app-why-us>
        </div>
        /* </app-verification-detail>
        </app-root> */
         );
    }
}
function mapStateToProps(state){
    return state;
    }
    
    const connectedWhyUs=connect(mapStateToProps)(WhyUs);
    export {connectedWhyUs as WhyUs};


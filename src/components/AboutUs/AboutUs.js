import React from 'react';
import './AboutUs.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import aboutimg from '../../assets/about/about.jpg';
const AboutUs = () => {
    return (
        <div className="container">
            <SectionHeading>About Us</SectionHeading>
            <div className="row">
                <div className="col-md-6 mb-5">
                    <img src={aboutimg} className="img-fluid image-thumbnail" alt=".." />
                </div>
                <div className="col-md-6 mb-5" style={{textAlign:'justify'}}>
                    <h2>Welcome To <span style={{fontWeight:'700'}}>Fresh <span style={{color:'purple'}}>Trip</span></span></h2>
                    <p className="text-capitalize"><span style={{fontWeight:'700'}}>Fresh <span style={{color:'purple'}}>Trip</span></span> is a Trusted And reliable tour and travel agency amoung all the leading and updated tour-operating service in Bangladesh. we are here to bring the luxury to your traveling. fresh trip is a proud member of Association of travel agents of bangladesh-atab and tour operators association of bangladesh. </p>

                    <p className="text-capitalize"><span style={{fontWeight:'700'}}>Fresh <span style={{color:'purple'}}>Trip</span></span> is Providing safe traveling, experienced and expert traveling guides ensure that you do not need to move an inch from your comfort zone and make sure that you always hav a beautiful satisfactory smail on your face. we believe tht your smail is our success an fresh trip will do anything to keep you smiling. </p>

                    <p className="text-capitalize">by the grace of almighty allah, we are ver pleased to say that the umrah service is the most seccessful program from fresh trip being honest and fair is our main motive towards our customers and therefore we deliver you the best service during the umrah.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
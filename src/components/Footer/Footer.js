import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer-section'>
                <div className="container">
                    <div className="row text-white py-3">
                        <div className="col-md-4 mb-2">
                            <p className="text-uppercase py-2"><span className="footer-border" style={{fontWeight:'700'}}>Fresh <span style={{color:'red'}}>Trip</span></span></p>
                            <p>Fresh Trip is a Trusted And reliable tour and travel agency amoung all the leading and updated tour-operating service in Bangladesh.</p>

                            <div>
                                <span><i className="fab fa-instagram"></i></span>
                                <span className='ps-3'><i className="fab fa-facebook-square"></i></span>
                                <span className='ps-3'><i className="fab fa-twitter-square"></i></span>
                                <span className='ps-3'><i className="fab fa-linkedin"></i></span>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <p className="text-uppercase py-2"><span className="footer-border"> Popular</span> destination</p>
                            <p>Indonesia</p>
                            <p>Canada</p>
                            <p>japan</p>
                            <p>America</p>
                        </div>
                        <div className="col-md-4 icon-color mb-2">
                            <p className="text-uppercase py-2"><span className="footer-border">Contact</span> Info</p> 
                            <p><i className="fas fa-map-marker-alt" ></i>  4127 Raoul Wallenber 45b-c Gibraltar</p>

                            <p><i className="fas fa-phone-volume"></i>  2556-808-8613</p>

                            <p><i className="fas fa-envelope-open-text"></i>  contactme@gmail.com</p>

                            <p><i className="fas fa-globe"></i>  www.freshtrip.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:'#000C18'}}>
                <span className='d-block text-center text-white py-3'>copyright &copy; 2021 all right reserve by fresh trip.</span>
            </div>
        </>
    );
};

export default Footer;
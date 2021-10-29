import React from 'react';
import './Contact.css';
import SectionHeading from '../SectionHeading/SectionHeading';

const Contact = () => {
    return (
        <div className="contact-banner mt-3">
            <div className="container">
                <SectionHeading>Get in Touch</SectionHeading>
                <form className="pt-3 pb-5">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="input-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="input-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="email" className="input-control" placeholder="Email" aria-label="First name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <textarea className="textarea-control" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <button className="send-btn">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
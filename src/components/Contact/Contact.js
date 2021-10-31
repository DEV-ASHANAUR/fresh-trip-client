import React from 'react';
import './Contact.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
    const [buffer,setBuffer] = useState(false);
    const [data,setData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        message:''
    });
    //handle input
    const InputEvent = (event) => {
        const{name,value} = event.target;
        setData((prev)=>{
            return {
                ...prev,
                [name] : value,
            }
        });
    }
    //handleMessage
    const handleMessage = async(e) => {
        setBuffer(true);
        e.preventDefault();
        try {
            const response = await axios.post('https://gory-coffin-65717.herokuapp.com/message',data);
            if(response.status === 200){
                setBuffer(false);
                setData({
                    firstName:'',
                    lastName:'',
                    email:'',
                    message:''
                });
                toast.success('Thanks For Your Message!');
            }
        } catch (error) {
            setBuffer(false);
            console.log(error);
        } 
    }
    return (
        <>
            <div className="contact-banner mt-3">
                <div className="container">
                    <SectionHeading>Get in Touch</SectionHeading>
                    <form onSubmit={handleMessage} className="pt-3 pb-5">
                        <div className="row">
                            <div className="col">
                                <input type="text" name="firstName" value={data.firstName} onChange={InputEvent} className="input-control" placeholder="First name" required />
                            </div>
                            <div className="col">
                                <input type="text" name="lastName" value={data.lastName} onChange={InputEvent}  className="input-control" placeholder="Last name" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="email" name="email" value={data.email} onChange={InputEvent} className="input-control" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <textarea name="message" value={data.message} onChange={InputEvent} className="textarea-control" cols="30" rows="10" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="send-btn">{ buffer?'SENDING..':'SEND MESSAGE'}</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Contact;
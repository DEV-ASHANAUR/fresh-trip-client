import React, { useEffect, useState } from 'react';
import './Booking.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Booking = () => {
    const history = useHistory();
    const [service,setService] = useState({});
    const {id} = useParams();
    const {user} = useAuth();
    const [data,setData] = useState({
        name:user.displayName,
        email:user.email,
        phone:'',
        address:''
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
    //handle order
    const handleOrder = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/order`,{
                ...data,
                service_id:service._id,
                destination:service.destination,
                duration:service.duration,
                price:service.price,
                status:'pending'
            });
            if(res.data.insertedId){
                setData({
                    name:user.displayName,
                    email:user.email,
                    phone:'',
                    address:''
                });
                toast.success('Your Order Placed SuccessFully!');
                setTimeout(() => {
                    history.push('/myorder');
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    }
    // console.log(service);
    //fetch single data 
    useEffect(()=>{
        axios.get(`http://localhost:5000/service/${id}`)
        .then(res=>{
            setService(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    return (
        <>
            <Breadcrumb pageName='Booking' formPage='Home' toPage='Booking'></Breadcrumb>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-8">
                        <img src={service.image} className="img-fluid image-thumbnail" alt=".." />
                        <div className='details'>
                            <h3 className='text-capitalize'>{service.destination}</h3>
                            <span><i className="far fa-clock"></i> {service.duration}</span>
                            <h3 className='py-2'>${service.price}</h3>
                            <p>{service.details}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='bookArea'>
                            <h3 className='text-center'>Booking Now</h3>
                            <form onSubmit={handleOrder} className="mt-5">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" name="name" value={data.name} onChange={InputEvent} className="input-control" placeholder="Full Name" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="email" value={data.email} className="input-control" placeholder="Email" readOnly required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" name="phone" value={data.phone} onChange={InputEvent} className="input-control" placeholder="Phone" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <textarea name="address" value={data.address} onChange={InputEvent} className="textarea-control" cols="30" rows="5" placeholder="Enter Address" required></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="send-btn"> Place Order </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Booking;
import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const AddService = () => {
    const [buffer,setBuffer] = useState(false);
    const [data,setData] = useState({
        name:'',
        image:'',
        duration:'',
        price:'',
        details:''
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
    //handle add service
    const handleAddService = async(e) => {
        setBuffer(true);
        e.preventDefault();
        try {
            const res = await axios.post(`https://fresh-trip.onrender.com/service`,{
                destination : data.name,
                image : data.image,
                duration : data.duration,
                price : data.price,
                details : data.details 
            });
            // console.log(res);
            if(res.data.insertedId){
                setBuffer(false);
                setData({
                    name:'',
                    image:'',
                    duration:'',
                    price:'',
                    details:''
                });
                toast.success('Service Added Succesfully');
            }
        } catch (error) {
            setBuffer(false);
            console.log(error)
        }
    }
    return (
        <>
            <Breadcrumb pageName='Add Service' formPage='Home' toPage='Add Service'></Breadcrumb>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-10 m-auto">
                        <div className='myOrderArea pb-5'>
                            <h3 className='text-center'>Add New Service</h3>
                            <form onSubmit={handleAddService} className="mt-5">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" value={data.name} name="name" onChange={InputEvent} className="input-control" placeholder="Enter Destination Name" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" value={data.image} name="image" onChange={InputEvent} className="input-control" placeholder="Enter Destination Image Url" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" value={data.duration} name="duration" onChange={InputEvent} className="input-control" placeholder="Duration Ex:(3 days 2 night)" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" name="price" value={data.price} onChange={InputEvent} className="input-control" placeholder="Package Price in dollar Ex:(430)" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <textarea name="details" value={data.details} onChange={InputEvent} className="textarea-control" cols="30" rows="5" placeholder="Enter description" required></textarea>
                                    </div>
                                </div>
                                <button className="send-btn" type="submit">{ buffer?'Adding..':'Add Service'}  </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default AddService;
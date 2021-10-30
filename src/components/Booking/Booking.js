import React from 'react';
import './Booking.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import aboutimg from '../../assets/service/adventure.jpg';
const Booking = () => {
    return (
        <>
            <Breadcrumb pageName='Booking' formPage='Home' toPage='Booking'></Breadcrumb>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-8">
                        <img src={aboutimg} className="img-fluid image-thumbnail" alt=".." />
                        <div className='details'>
                            <h3>Beauty of Solomon Island</h3>
                            <span><i className="far fa-clock"></i> 3 days 2 night</span>
                            <h3 className='py-2'>$430</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eligendi nobis velit sed nam consequuntur saepe earum ratione, voluptate, dolores quis, pariatur voluptatem eius nemo ab voluptas accusamus ullam perspiciatis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eligendi nobis velit sed nam consequuntur saepe earum ratione, voluptate, dolores quis, pariatur voluptatem eius nemo ab voluptas accusamus ullam perspiciatis.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='bookArea'>
                            <h3 className='text-center'>Booking Now</h3>
                            
                            <form action="" className="mt-5">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="input-control" placeholder="Full Name" aria-label="First name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="email" className="input-control" placeholder="Email" aria-label="First name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="email" className="input-control" placeholder="Phone" aria-label="First name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <textarea className="textarea-control" name="" id="" cols="30" rows="5" placeholder="Enter Address"></textarea>
                                    </div>
                                </div>
                                <button className="send-btn"> Place Order </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;
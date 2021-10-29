import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Booking = () => {
    return (
        <>
            <Breadcrumb pageName='Booking' formPage='Home' toPage='Booking'></Breadcrumb>
            <div className="container">
                <h1>This is Booking Page</h1>
            </div>
        </>
    );
};

export default Booking;
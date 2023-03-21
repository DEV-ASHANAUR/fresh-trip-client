import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='bg-banner'>
            <div className="overly">
                <div className="container text-center">
                    <h4 className='text-uppercase text-white'>Let's Start Your Journey With Us.</h4>
                    <h1 className='my-3' style={{fontWeight:'700'}}>Discover Your Favourite Place.</h1>
                    <a href='#package' className='discover-btn'>Explore Destination</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
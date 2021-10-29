import React from 'react';
import './ServiceArea.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import image from '../../assets/service/adventure.jpg';
const ServiceArea = () => {
    return (
        <div className="container">
            <SectionHeading>Choses Your Package</SectionHeading>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center pb-5">
                <div className="col">
                    <div className="card servicecard h-100">
                    <div className='service-img m-2'>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Beauty of Solomon Island</h3>
                        <p className="card-text text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quas. Adipisci nulla suscipit,?</p>
                        <hr />
                        <span><i className="far fa-clock"></i> 3 days 2 night</span>
                        <div className="service-footer mt-3">
                            <h3>$430</h3>
                            <button className='book-btn'>Book Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card servicecard h-100">
                    <div className='service-img m-2'>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Beauty of Solomon Island</h3>
                        <p className="card-text text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quas. Adipisci nulla suscipit,?</p>
                        <hr />
                        <span><i className="far fa-clock"></i> 3 days 2 night</span>
                        <div className="service-footer mt-3">
                            <h3>$430</h3>
                            <button className='book-btn'>Book Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card servicecard h-100">
                    <div className='service-img m-2'>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Beauty of Solomon Island</h3>
                        <p className="card-text text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quas. Adipisci nulla suscipit,?</p>
                        <hr />
                        <span><i className="far fa-clock"></i> 3 days 2 night</span>
                        <div className="service-footer mt-3">
                            <h3>$430</h3>
                            <button className='book-btn'>Book Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card servicecard h-100">
                    <div className='service-img m-2'>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Beauty of Solomon Island</h3>
                        <p className="card-text text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quas. Adipisci nulla suscipit,?</p>
                        <hr />
                        <span><i className="far fa-clock"></i> 3 days 2 night</span>
                        <div className="service-footer mt-3">
                            <h3>$430</h3>
                            <button className='book-btn'>Book Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card servicecard h-100">
                    <div className='service-img m-2'>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Beauty of Solomon Island</h3>
                        <p className="card-text text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quas. Adipisci nulla suscipit,?</p>
                        <hr />
                        <span><i className="far fa-clock"></i> 3 days 2 night</span>
                        <div className="service-footer mt-3">
                            <h3>$430</h3>
                            <button className='book-btn'>Book Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card servicecard h-100">
                    <div className='service-img m-2'>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Beauty of Solomon Island</h3>
                        <p className="card-text text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quas. Adipisci nulla suscipit,?</p>
                        <hr />
                        <span><i className="far fa-clock"></i> 3 days 2 night</span>
                        <div className="service-footer mt-3">
                            <h3>$430</h3>
                            <button className='book-btn'>Book Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ServiceArea;
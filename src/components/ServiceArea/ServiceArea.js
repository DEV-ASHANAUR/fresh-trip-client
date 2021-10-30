import React, { useEffect, useState } from 'react';
import './ServiceArea.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import image from '../../assets/service/adventure.jpg';
import Service from '../Service/Service';
const ServiceArea = () => {
    const [loading,setLoading] = useState(true);
    const [service,setService] = useState([]);
    //fetch data
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => {
            setService(data);
            setLoading(false);
        });
    },[]);
    return (
        <div className="container">
            <SectionHeading>Choses Your Package</SectionHeading>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center pb-5">
                {
                    loading?
                    <div className="col text-center">
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                    :
                    service.map(item => <Service key={item._id} data={item}></Service>)
                }
                
            </div>
        </div>
    );
};

export default ServiceArea;
import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
    const history = useHistory();
    const {_id,destination,details,price,duration,image} = props.data;
    //handleOrderpage
    const handleOrder = ()=>{
        history.push(`/booking/${_id}`);
    }
    return (
        <div className="col">
            <div className="card servicecard h-100">
                <div className='service-img m-2'>
                    <img src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{destination}</h3>
                    <p className="card-text text-description">{details.slice(0, 100) }..</p>
                    <hr />
                    <span><i className="far fa-clock"></i> {duration}</span>
                    <div className="service-footer mt-3">
                        <h3>${price}</h3>
                        <button onClick={handleOrder} className='book-btn'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
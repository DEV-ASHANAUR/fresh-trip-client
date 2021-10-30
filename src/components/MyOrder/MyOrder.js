import React from 'react';
import './MyOrder.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
const MyOrder = () => {
    return (
        <>
            <Breadcrumb pageName='My Order' formPage='Home' toPage='My Order'></Breadcrumb>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-10 m-auto">
                        <div className='myOrderArea'>
                            <h3 className='text-center'>My All Order</h3>
                            <div class="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Order_id</th>
                                            <th>item_name</th>
                                            <th>Package</th>
                                            <th className='text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#595656hfhh49766</td>
                                            <td>Beauty of Solomon Island</td>
                                            <td>3 days 2 night $450</td>
                                            <td className='text-center'>
                                                <button className='btn-logout' title='logout'><i className="fas fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#595656hfhh49766</td>
                                            <td>Beauty of Solomon Island</td>
                                            <td>3 days 2 night $450</td>
                                            <td className='text-center'>
                                                <button  className='btn-logout' title='logout'><i className="fas fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#595656hfhh49766</td>
                                            <td>Beauty of Solomon Island</td>
                                            <td>3 days 2 night $450</td>
                                            <td className='text-center'>
                                                <button  className='btn-logout' title='logout'><i className="fas fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrder;
import React, { useEffect, useState } from 'react';
import './MyOrder.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
const MyOrder = () => {
    const [loader,setLoader] = useState(true);
    const {user} = useAuth();
    const [myOrder,setMyOrder] = useState([]);
    //fetch only login user order
    useEffect(()=>{
        axios.get(`https://gory-coffin-65717.herokuapp.com/myorder/${user.email}`)
        .then(res=>{
            setLoader(false)
            setMyOrder(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    //handle delete item
    const deleteItem = (id) => {
        confirmAlert({
            message: 'Are you sure! You want to Delete this ..',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios.delete(`https://gory-coffin-65717.herokuapp.com/order/${id}`)
                    .then(res=>{
                        if(res.status === 200){
                            const remainOrder = myOrder.filter(item => item._id !== id);
                            setMyOrder(remainOrder);
                            toast.success("Order Deleted Successfully");
                        }
                    }).catch(err=>{
                        console.log(err);
                    });
                }
              },
              {
                label: 'No',
                onClick: () => {
                    toast('Your Item is safe :)');
                }
              }
            ],
            overlayClassName: "overley"
        });
    }
    return (
        <>
            <Breadcrumb pageName='My Order' formPage='Home' toPage='My Order'></Breadcrumb>
            {
            loader?
            <div className="col text-center">
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
            :
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 m-auto">
                        <div className='myOrderArea'>
                            <h3 className='text-center'>My All Order ({myOrder.length})</h3>
                            <div className="table-responsive">
                                {
                                    myOrder.length > 0 ?
                                    <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Order_id</th>
                                            <th>Tourist Name</th>
                                            <th>Desitination</th>
                                            <th>Package</th>
                                            <th>Order_status</th>
                                            <th className='text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myOrder.map(item=>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.destination}</td>
                                                    <td>{item.duration} ${item.price}</td>
                                                    <td>
                                                        {
                                                            item.status === 'pending' ?
                                                            <span className="badge rounded-pill bg-warning text-dark">{item.status}</span>
                                                            :
                                                            <span className="badge rounded-pill bg-success text-white">{item.status}</span>
                                                        }
                                                    </td>
                                                    <td className='text-center'>
                                                        <button
                                                        onClick={()=>deleteItem(item._id)}
                                                        className='btn-logout' title='delete'><i className="fas fa-trash-alt"></i></button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        
                                    </tbody>
                                </table>
                                :
                                <h4 className="text-center py-5">Your Order Summery is Empty</h4>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            <ToastContainer />
        </>
    );
};

export default MyOrder;
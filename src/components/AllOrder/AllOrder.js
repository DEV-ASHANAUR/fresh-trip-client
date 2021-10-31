import React, { useEffect, useState } from 'react';
// import './MyOrder.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const AllOrder = () => {
    const [buffer,setBuffer] = useState(false);
    const [allOrder,setAllOrder] = useState([]);
    //fetch only login user order
    useEffect(()=>{
        axios.get(`https://gory-coffin-65717.herokuapp.com/myorder/`)
        .then(res=>{
            setAllOrder(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[allOrder]);
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
                            const remainOrder = allOrder.filter(item => item._id !== id);
                            setAllOrder(remainOrder);
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
    //update order
    const updateStatus = (id) => {
        setBuffer(true);
        // console.log(id);
        const selectedItem = allOrder.find(item => item._id === id);
        if(selectedItem.status === 'pending'){
            selectedItem.status = 'confirm';
            axios.put(`https://gory-coffin-65717.herokuapp.com/order/${id}`,selectedItem)
            .then(res=>{
                if(res.data.modifiedCount > 0){
                    setBuffer(false);
                    toast('order is confirmed');
                }
            }).catch(err=>{
                setBuffer(false);
                console.log(err)
            });
        }else{
            selectedItem.status = 'pending';
            axios.put(`https://gory-coffin-65717.herokuapp.com/order/${id}`,selectedItem)
            .then(res=>{
                if(res.data.modifiedCount > 0){
                    setBuffer(false)
                    toast.success('order is revert to pending');
                }
            }).catch(err=>{
                setBuffer(false)
                console.log(err);
            });
        }
    }
    return (
        <>
            <Breadcrumb pageName='Manage All Order' formPage='Home' toPage='Manage All Order'></Breadcrumb>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 m-auto">
                        <div className='myOrderArea'>
                            <h3 className='text-center'>All Order ({allOrder.length})</h3>
                            <div className="table-responsive">
                                {
                                    allOrder.length > 0 ?
                                    <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Order_id</th>
                                            <th>Tourist Name</th>
                                            <th>Desitination</th>
                                            <th>Package</th>
                                            <th>Order_status</th>
                                            <th className='text-center'>Update Order</th>
                                            <th className='text-center'>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allOrder.map(item=>
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
                                                        {
                                                            item.status === 'pending' ?
                                                            <button
                                                                onClick={()=>updateStatus(item._id)}
                                                                className='btn btn-success' title='confirm-order'>{buffer?'processing':'Confirm'}
                                                            </button>
                                                            :
                                                            <button
                                                                onClick={()=>updateStatus(item._id)}
                                                                className='btn btn-danger' title='confirm-order'>{buffer?'processing':'Revert'}
                                                            </button>
                                                        }
                                                        
                                                    </td>
                                                    <td className='text-center'>
                                                        <button
                                                            onClick={()=>deleteItem(item._id)}
                                                            className='btn-logout' title='delete'><i className="fas fa-trash-alt"></i>
                                                        </button>

                                                    </td>
                                                </tr>
                                            )
                                        }
                                        
                                    </tbody>
                                </table>
                                :
                                <h4 className="text-center py-5">Order Summery is Empty</h4>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default AllOrder;
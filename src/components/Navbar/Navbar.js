import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css';
const Navbar = () => {
    const {user,logOut} = useAuth();
    // console.log(user);
    return (
        <>
            <div className="top-section">
                <div className='container top-content py-3 text-white'>
                    <div>
                        <span><i className="fas fa-phone-square-alt"></i> 1 (900) 245 8547</span>
                        <span className='ps-3'><i className="fas fa-envelope-open-text"></i> freshtrip8811@gmail.com</span>
                    </div>
                    <div>
                        <span><i className="fab fa-instagram"></i></span>
                        <span className='ps-3'><i className="fab fa-facebook-square"></i></span>
                        <span className='ps-3'><i className="fab fa-twitter-square"></i></span>
                        <span className='ps-3'><i className="fab fa-linkedin"></i></span>
                    </div>
                </div>
            </div>
            <header className='header sticky-top'>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container">
                        <NavLink className="navbar-brand logo" to="/">Fresh <span style={{color:'purple'}}>Trip</span></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-uppercase middle-part">
                            <li className="nav-item px-3">
                                <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link" aria-current="page" to="/booking">booking</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link" aria-current="page" to="/myorder">My Order</NavLink>
                            </li>
                            
                            {
                                user.displayName &&
                                <li className="nav-item userArea">
                                    <img src={user.photoURL} className="userImg" alt=".." />
                                    <NavLink className="nav-link user mx-3" aria-current="page" to="#">{user.displayName}</NavLink>
                                </li>
                            }
                            {
                                user.email ? 
                                <li className="nav-item">
                                    <button onClick={logOut} className='btn-logout' title='logout'><i className="fas fa-sign-out-alt"></i></button>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className="nav-link login" aria-current="page" to="/login">Login</NavLink>
                                </li>
                            }
                            
                         </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
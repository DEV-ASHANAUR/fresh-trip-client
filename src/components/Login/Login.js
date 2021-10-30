import React from 'react';
import './Login.css';
import gopng from '../../assets/google-removebg-preview.png';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const {googleLogIn,setIsLoading} = useAuth();
    //history 
    const history = useHistory();
    //useLocation
    const location = useLocation();
    //condition 
    const location_uri = location.state?.from || '/';
    //handle login 
    const handleGoogleSignIn = () => {
        googleLogIn()
        .then((result)=>{
            history.push(location_uri);
        }).catch(err=>{
            console.log(err);
        }).finally(()=>{
            setIsLoading(false);
        });
    }
    return (
        <>
            <div className='login-banner'>
                <div className='container '>
                    <div className="row pt-5">
                        <div className="col-md-12">
                            <div className="card m-auto my-5 pb-5" style={{maxWidth: '25rem'}}>
                                <div className="card-body">
                                <span style={{display:'block',textAlign:'center',margin: '15px 0',color:'purple',fontSize:'20px',textDecoration:'none',fontWeight:'700'}}>Log In Here</span>
                                    <hr />
                                    <button onClick={handleGoogleSignIn} className="google-btn"><img src={gopng} className="img-fluid" width="50" alt=".." /> Sign In With Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
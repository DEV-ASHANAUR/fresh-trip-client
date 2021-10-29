import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initializeFirebase from '../firebase/firebase.init';
initializeFirebase();
const useFirebase = () => {
    const [user,setUser] = useState([]);
    //loader
    const[isLoading,setIsLoading] = useState(true);
    //google provider
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    //google sign in and login function
    const googleLogIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    // useEffect for monitoring user login or not
    useEffect(()=>{
        const notUnsubscibe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                setUser(user);
            } else {
                // User is signed out
                setUser({}); 
                console.log('user is Sign out');
            }
            setIsLoading(false)
        });
        return() => notUnsubscibe;
    },[]);
    //logout user
    const logOut = ()=>{
        setIsLoading(true)
        signOut(auth)
        .then(res=>{
            setUser({});
            console.log('log out Success');
        }).catch(err => {
            console.log(err);
        }).finally(()=>{
            setIsLoading(false);
        });
    }
    //return
    return {user,setUser,isLoading,setIsLoading,googleLogIn,logOut}
};

export default useFirebase;
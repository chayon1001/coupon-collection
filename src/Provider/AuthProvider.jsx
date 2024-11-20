import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import  { Toaster } from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
  

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut
    }

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unSubscribed()
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            <Toaster></Toaster>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
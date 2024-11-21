import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import  { Toaster } from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
  

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const updatedUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut,
        loading,
        updatedUserProfile
    }

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
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
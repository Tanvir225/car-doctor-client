import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import auth from "../Firebase/firebase.config";

//context
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    //user state
    const [user, setuser] = useState(null)
    //loading state
    const [loading, setLoading] = useState(true)

    //crate user
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //loginUser
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logOut user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //googleLogin
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    //useEffect observe user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,cuurentUser =>{
            setuser(cuurentUser)
            console.log('observer user',cuurentUser)
            setLoading(false)
        })

        return ()=> unSubscribe()
    },[])


    //authInfo Object
    const authInfo = { creatUser, loginUser, logOut,googleLogin,user,loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;
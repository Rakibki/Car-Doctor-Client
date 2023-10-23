import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import auth from "../firebase/firebase.config"

export const authContext = createContext(null)


const AuthProvider = ({children}) => {
    const [lodding, setLodding] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    } 

    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const disConnect = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        return () => {
          disConnect()
        }
      })
    },[])
    console.log(user);


    const userIngo = {lodding, loginUser, createUser, user}

  return (
    <authContext.Provider value={userIngo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider
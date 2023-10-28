import React, { createContext, useEffect, useState } from 'react'
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import auth from "../firebase/firebase.config"

export const authContext = createContext(null)


const AuthProvider = ({children}) => {
    const [lodding, setLodding] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
      setLodding(true)
      return createUserWithEmailAndPassword(auth, email, password)
    } 

    const loginUser = (email, password) => {
      setLodding(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    const gooogleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
      return signInWithPopup(auth, gooogleProvider)
    }


    const githubProvider = new GithubAuthProvider();
    const loginwithGithub = () => {
      return signInWithPopup(auth, githubProvider)
    } 

    const facebookprovider = new FacebookAuthProvider();
    const loginWithFacebook = () => {
      return signInWithPopup(auth, facebookprovider)
    }

    useEffect(() => {
      const disConnect = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLodding(false)
        return () => {
          disConnect()
        }
      })
    },[])


    const userIngo = {lodding, loginWithGoogle, loginwithGithub, loginWithFacebook, loginUser, createUser, user}

  return (
    <authContext.Provider value={userIngo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider
import React, { createContext, useState } from 'react'

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [lodding, setLodding] = useState(true)
    const [user, setUser] = useState(null)

    const userIngo = {lodding, user}

  return (
    <authContext.Provider value={userIngo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider
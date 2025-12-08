// import React, { useEffect } from 'react'
// import { useState } from 'react'
import React, { createContext, useState,useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
// localStorage.clear()
    // const data=getLocalStorage()
    // console.log(data.employees);

    
    const[userData,setUserData]=useState(null)

        useEffect(()=>{
            setLocalStorage()
        const{employees}=getLocalStorage()
        setUserData(employees)
    },[])


  return (
    <div>
      {/* {children} */}
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

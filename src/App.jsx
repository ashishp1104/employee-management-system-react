import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './other/Header'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import {AuthContext} from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
const App = () => {

  // useEffect(()=>{
  //   setLocalStorage()
  // },)

  // useEffect(()=>{
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)
  // const authData = useContext(AuthContext)
  // console.log(authData.employees);
  const [userData,setUserData] =useContext(AuthContext)
  const[loggedInUserData, setLoggedInUserData]=useState(null)
  // console.log();

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')
    
    
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      
    }
  },[])
  


  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser=localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
 
  
  

  const handleLogin=(email,password)=>{
    if(email == 'admin@me.com' && password=='123'){
      // console.log("this is mail");
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      // console.log(user);
      
      
    }else if(userData){
      // console.log("this is user");
        const employee=userData.find((e)=>email == e.email && e.password == password)
        if(employee){
           setUser('employee')
           setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        }
     
      // console.log(user);
      
    }else{
      alert("Invalid cre")
    }
    
  }
  // handleLogin('user@me.com',123)

  // const data=useContext(AuthContext)
  // console.log(data);
  

  return (
    <>
    
    {!user ? <Login handleLogin={handleLogin}/>:'' }
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    {/* <EmployeeDashboard/> */}
    

   {/* <AdminDashboard/> */}
   {/* <AuthContext/> */}
    </>
  )
}

export default App

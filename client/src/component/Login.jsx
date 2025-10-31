import React, { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'
function Login() {
    let [formdata,setformdata]=useState({
        email:"",username:"",password:""
    })
    const nav=useNavigate()
    const handle=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})

    }
    const submit=async(e)=>{
        e.preventDefault()
        try{
            const res=await api.post("/login",formdata)
            console.log(res.data.message)
            console.log(res.data.user)
            localStorage.setItem('user',JSON.stringify(res.data.user))
            if(res.data.user.usertype==="admin"){
                nav("/admin")
            }
            else{
                nav("/common")
            }
        }
        catch(err){
            console.log(err.message)
        }
    }
  return (
    <div>
        <form onSubmit={submit}>
          
            <input type="email" name="email" placeholder='Email' onChange={handle}></input>
            <br></br>
            <input type="text" name="username" placeholder='User Name' onChange={handle}></input>
            <br></br>
            <input type="password" name="password" placeholder='PassWord' onChange={handle}></input>
            <br></br>
         
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login
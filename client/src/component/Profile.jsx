import React from 'react'
import {useState,useEffect} from 'react'
import api from '../api'
import {useNavigate} from "react-router-dom"


function Profile() {
    const [user,setUser]=useState([])
   const nav=useNavigate()
    useEffect(()=>{
        const fetchProfile=async ()=>{
            try{
                const res=await api.get('/profile')
                console.log(res)
                setUser(res.data.user)
            }
            catch(err){
                console.log(err.message)
                nav('/login')
            }
        }
        fetchProfile()
    },[nav])
  return (
    <div>
        <h2>Profile Details</h2>
        <p>Id:{user.id}</p>
        <p>Username :{user.username}</p>
        <p>Role : {user.usertype}</p>
    </div>
  )
}

export default Profile
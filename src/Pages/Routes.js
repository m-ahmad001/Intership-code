import React from 'react'
import {Routes, Route } from "react-router-dom"
import Home from './Home/Home'
import Nopage from './NoPage/Nopage'
import Header from "../components/Header/Header"
import Login from './Login/out/Login'
import UserData from './userData/UserData'

export default function Index() {
  return (
    <>
    
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/users" element={<UserData/>}/>
        
        <Route path="*" element={<Nopage/>}/>

    </Routes>
    </>
      
    
  )
}

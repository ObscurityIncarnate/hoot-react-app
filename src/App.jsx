import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from "react-router"
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import SignIn from './component/Sign-in/SignIn'
import SignUp from './component/SignUp/SignUp'
import './App.css'

const App = ()=>{
  return(
    <>
      <h1>Hello World</h1>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
        </Routes>

      </main>
      
    </>
    
  )
}
export default App

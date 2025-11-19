import {Routes, Route} from "react-router"
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import SignIn from './component/Sign-in/SignIn'
import SignUp from './component/SignUp/SignUp'
import './App.css'

const App = ()=>{
  return(
    <>
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

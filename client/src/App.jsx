import { useState, con, createContext } from 'react'
import './App.css'
import "./responsive.css"
import Home from './pages/Home'
import Register from './pages/Register'
import {Route, Routes,BrowserRouter} from "react-router-dom"
import Status from './pages/Status'

export const competitionDetails = createContext();
export const competitionResistrationStatus = createContext();
function App() {
  const [details , setDetails] = useState({});
  const [resistrationResponse , setResistrationResponse] = useState({});
  return (
    <>
    <competitionDetails.Provider value={{details , setDetails}}>
    <competitionResistrationStatus.Provider value={{resistrationResponse , setResistrationResponse}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/register/:slug' element={<Register/>}/>
        <Route path='/status' element={<Status/>}/>
      </Routes>
   </BrowserRouter>
   </competitionResistrationStatus.Provider>
   </competitionDetails.Provider>
    </>

  )
}

export default App

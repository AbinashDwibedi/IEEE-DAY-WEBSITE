import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Competitions from '../components/Competitions'
function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Competitions/>
    <About/>
    <Contact/>
    <div className="copyright" style={{width: "100%", font:"20px", padding:"5px", textAlign:"center", backgroundColor:"var(--accent-color-1)"}}>&copy; IEEE VSSUT Student Branch</div>
    </>
  )
}

export default Home
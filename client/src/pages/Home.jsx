import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Competitions from '../components/Competitions'
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
function Home() {
  useGSAP(()=>{
    let tl = gsap.timeline();
    let windowWidth = window.innerWidth;
    tl.from(`.navbar a img `,{
      opacity : 0,
      y: 30,
      duration: .5 ,
      // stagger: .3,
    })
    if(windowWidth<800){
      tl.from(` .menu`,{
        opacity : 0,
        y: 20,
        duration: .5 ,
        // stagger: .3,
      })
    }
    else{
      tl.from(`.navbar-list `,{
        opacity : 0,
        y: 20,
        duration: .5 ,
        stagger: .1,
      })
    }
    tl.from(".hero-heading-1, .hero-para, .right-hero a",{
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: .2,
    },"-=1")
    tl.from(".left-hero", {
      opacity: 0,
      scale: 1.5,
      
    } , "-=1")
  },[])
  return (
    <>
    <Navbar />
    <Hero/>
    <Competitions/>
    <About/>
    <Contact/>
    <div className="credit">
    <div><a href="https://abinash-dwibedi.web.app/" target='_blank'><i className="fa-solid fa-globe"></i></a><h2>made by Abinash</h2></div>
    </div>
    <div className="copyright" style={{width: "100%", font:"20px", padding:"5px", textAlign:"center", backgroundColor:"var(--accent-color-1)"}}>&copy; IEEE VSSUT Student Branch</div>
    </>
  )
}

export default Home
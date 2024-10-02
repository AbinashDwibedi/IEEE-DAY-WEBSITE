import React from 'react'
import styled from 'styled-components'
function About() {
  return (
    <>
        <AboutContainer id='ABOUT'>
            <h1 className="universal-heading">About</h1>
            <p><span><i className="fa-solid fa-quote-left"> </i></span>The <span className="highlight-text">IEEE VSSUT STUDENT BRANCH BURLA</span>  Burla, received approval for its establishment on 6th November 2018. It was then inaugurated on 14th February 2019 by Prof. T. Srinivas from IISc, Bangalore, in the presence of the Hon’ble Vice-Chancellor of VSSUT, Burla, Prof. Atal Chaudhuri, the IEEE Branch Counselor, Dr. Harish Kumar Sahoo, and the Faculty Advisor, Dr. Papia Ray. By March, it became the largest group, including faculty members and students from the Electrical, Electronics, and Computer Science branches. Presently, it is actively operating with 80 members and 20 office bearers.</p>
        </AboutContainer>
    </>
  )
}

export default About
const AboutContainer = styled.div`
padding:0 20px;
    p{
        span{
            font-size: 30px;
        }
        font-weight:500;
        font-size: 18px;
        padding: 10px;
        line-height: 30px;
        margin: 0 0 80px;
        /* background-color: var(--accent-color-1); */
        /* border-radius: 10px; */
    }
`
import React from 'react'
import styled from 'styled-components'
function About() {
  return (
    <>
        <AboutContainer id='ABOUT'>
            <h1 className="universal-heading">About</h1>
            <p><span><i className="fa-solid fa-quote-left"> </i></span>The <span className="highlight-text">IEEE VSSUT STUDENT BRANCH BURLA</span> Got The Petition For Its Approval To Establish On 6th November 2018.It Was Then Inaugurated On 14th February 2019 By Prof. T.Srinivas From IISC, Bangalore In The Presence Of Hon'ble Vice Chancellor Of VSSUT, Burla, Prof. Atal Chaudhuri, The IEEE Branch Councilor, Dr. Harish Kumar Sahoo And The Faculty Advisor Dr. Papia Ray. By March It Became The Largest Group With Faculty Members And Students From Electrical, Electronic And Computer Science Branch. Presently It Is Actively Running With 80 Members And 20 Office Bearers.</p>
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
        /* background-color: var(--accent-color-1); */
        /* border-radius: 10px; */
    }
`
import React from 'react'
import styled from 'styled-components'
function About() {
  return (
    <>
        <AboutContainer id='ABOUT'>
            <h1 className="universal-heading">About</h1>
            <p><span><i className="fa-solid fa-quote-left"> </i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore odio voluptate sed eligendi! Vero corporis culpa dignissimos praesentium rem natus a quo harum! Aliquam laborum eum facere optio nihil laboriosam vero, delectus consequatur? Eligendi totam laboriosam odio vero. Voluptatibus, explicabo ipsum vel a asperiores quos possimus omnis iste aliquid.</p>
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
        font-size: 20px;
        padding: 10px;
        /* background-color: var(--accent-color-1); */
        /* border-radius: 10px; */
    }
`
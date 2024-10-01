import React from "react";
import styled from "styled-components";
import heroImg from "../assets/IEEE-Day.svg";

function Hero() {
  
  return (
    <HeroContainer id="HOME">
      <div className="right-hero">
        <h1 className="hero-heading-1">
          <span className="highlight-text">IEEE Day: </span> Celebrating the Power of Technology and Innovation
        </h1>
        {/* <h2 className="hero-heading-2">Lorem ipsum dolor sit amet.</h2> */}
        <p className="hero-para">
        On IEEE Day, we come together to celebrate the global community of engineers and technologists who are pushing the boundaries of innovation. This special day highlights the vital role that technology plays in shaping our future and recognizes the contributions of IEEE members who are driving advancements in various fields. Whether it's through cutting-edge research, groundbreaking projects, or fostering collaboration, IEEE Day is a tribute to the spirit of ingenuity and the pursuit of excellence. Join us in honoring the achievements of those who are making a difference in the world through technology.
        </p>
        <a href="#COMPETITIONS" style={{opacity: 1}}>check competitions</a>
      </div>
      <div className="left-hero">
        <img src={heroImg} alt="" className="hero-image" />
      </div>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
overflow: hidden;
  display: flex;
  font-size: 10px;
  min-height: 100vh;
  padding: 80px 20px 30px;
  .right-hero {
    min-width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    /* h1 span {
      color: var(--accent-color-1);
    } */
    h1{
        font-size: 4.5em;
        font-weight: 900;
    }
    p{
        margin-top: 10px;
        font-size:1.8em;
        font-weight:200;
    }
    a{
        /* margin-top: 20px; */
        cursor: pointer;
        background: var(--accent-color-1);
    color: white;
    padding: 10px;
    font-size: 2em;
    border-radius: 20px;
    border: 2px solid var(--primary-text-color);
    transition: all .1s linear;
    margin-bottom: 30px;
    }
    a:hover{
        background-color: var(--background-color);
        color:var(--primary-text-color);
        transition: all .1s linear;
    }
  }
  .left-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40%;

    .hero-image {
      height: auto;
      width: 90%;   
    }
    
  }
`;

import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <ContactContainer id="CONTACT">
      <h1 className="universal-heading">contact</h1>
      <div className="contact-no">
        <ul>
          <li>Shubhranshu Sekhar Panda : 6372739018</li>
          <li>Debabrata Sahoo : 9560900718</li>
        </ul>
        <div className="social-links">
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
          <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact;
const ContactContainer = styled.div`
  margin: 20px 0;

  .contact-no {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    ul {
      font-weight: 300;
      font-size: 20px;
      text-align: center;
    }
    .social-links {
      display: flex;
      align-items: center;
      gap: 5px;
      a {
        height: 40px;
        display: block;
        width: 40px;
        font-size: 30px;
        color: var(--primary-text-color);
      }
      i:hover{
        color: var(--accent-color-1);
        transition: all .2s linear;
      }
    }
  }
`;

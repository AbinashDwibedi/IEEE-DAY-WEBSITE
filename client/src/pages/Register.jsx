import React, { useContext, useEffect, useState } from "react";
import { competitionDetails, competitionResistrationStatus } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import loaderGif from "../assets/Spinner.gif"
import axios from "axios";
function Register() {
  const nameRegex = /^[a-zA-Z\s'-]{3,40}$/;
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const navigate = useNavigate();
  const { setResistrationResponse } = useContext(competitionResistrationStatus);
  const [isLoaded, setisLoaded] = useState(true)
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: null,
    theme: "colored",
    // "icon": "🚀",
    className: "custom-toast",
  };
  const { details } = useContext(competitionDetails);
  const [regData, setRegData] = useState({
    fullname: "",
    email: "",
    mob: "",
    department: "",
    college: "",
  });
  useEffect(() => {
    if (Object.keys(details).length == 0) {
      navigate("/");
    }
  }, []);
  async function handleSubmit(e) {
    
    e.preventDefault();
    if (checkFields()) {
      setisLoaded(false);
      setRegData({
        fullname: "",
        email: "",
        mob: "",
        department: "",
        college: "",
      });
      const { data } = await axios.post(
        "https://ieee-day-website.vercel.app/api/competitions/register",
        {
          fullname: regData.fullname,
          email: regData.email,
          mob: regData.mob,
          department: regData.department,
          college: regData.college,
          competition: details.title,
        }
      );
      await setResistrationResponse(data);
      setisLoaded(true);
      navigate("/status");
    }
  }

  function checkFields() {
    if (regData.fullname.length < 3) {
      toast.error("name must be above three letters", options);
      return false;
    } else if (!nameRegex.test(regData.fullname)) {
      toast.error("name contains invalid character", options);
      return false;
    } else if (regData.email.length == 0) {
      toast.error("email can't be empty", options);
    } else if (!emailRegex.test(regData.email)) {
      toast.error("enter appropiate email", options);
      return false;
    } else if (!phoneRegex.test(regData.mob)) {
      toast.error("enter a valid mobile number", options);
      return false;
    } else {
      return true;
    }
  }
  function handleChange(e) {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  }
  return (
    <>
      <RegisterContainer className="register-container">
        <div className="competition-details">
          <div>
            <img src={details.image} alt="" />
            <h1>{details.title}</h1>
            <p>{details.description}</p>
          </div>
        </div>
        <div className="competition-form">
          <form id="registerForm" action="" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Enter your name"
                name="fullname"
                value={regData.fullname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <input
                placeholder="Enter your email"
                type="text"
                name="email"
                value={regData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <i className="fa-solid fa-mobile"></i>
              <input
                placeholder="Enter your mobile number"
                type="tel"
                name="mob"
                value={regData.mob}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <i className="fas fa-university"></i>
              <input
                placeholder="Enter your college name"
                type="text"
                name="college"
                value={regData.college}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <i className="fa-solid fa-list"></i>
              <input type="text" disabled value={details.title} />
            </div>
            <div>
              <i className="fa-solid fa-list"></i>
              <select
                name="department"
                id=""
                value={regData.department}
                onChange={(e) => handleChange(e)}
              >
                <option value="">select branch</option>
                <option value="Electronics and Telecommunication Engineering">
                  Electronics and Telecommunication Engineering
                </option>
                <option value="computer science and engineering">
                  computer science and engineering
                </option>
                <option value="electrical engineering">
                  electrical engineering
                </option>
                <option value="metallurgical and material engineering">
                  metallurgical and material engineering
                </option>
                <option value="information technology">
                  information technology
                </option>
                <option value="civil engineering">civil engineering</option>
                <option value="mechanical engineering">
                  mechanical engineering
                </option>
              </select>
            </div>
            {isLoaded ? <button type="submit">Register Now</button> : <div className="loader"><img src={loaderGif} alt="" /></div>}
          </form>
        </div>
      </RegisterContainer>
      <ToastContainer />
    </>
  );
}

export default Register;
const RegisterContainer = styled.div`
  padding: 30px 20px;
  min-height: 100vh;
  /* padding: 0 20px; */
  width: 100%;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .competition-details {
    min-width: 50%;
    img {
      width: 100%;
      border-radius: 10px;
      height: auto;
    }
    h1 {
      margin-top: 10px;
      padding: 10px;
    }
    p {
      padding: 0 10px;
    }
  }
  .competition-form {
    width: 100%;
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      div {
        display: flex;
        justify-content: space-between;
        /* background: white; */
        padding: 8px 10px;
        gap: 10px;
        border-radius: 10px;
        i {
          font-size: 20px;
          color: var(--secondary-text-color);
          height: 40px;
          width: 45px;
          text-align: center;
          line-height: 40px;
          background: var(--primary-text-color);
          border-radius: 25px;
        }
        input,
        select {
          width: 100%;
          /* background-color: cyan; */
          color: var(--primary-text-color);
          height: 40px;
          font-size: 16px;
          font-weight: 600;
          padding-left: 5px;
          outline: none;
          background: transparent;
          /* border: 2px solid var(--primary-text-color); */
          border: none;
          border-bottom: 3px solid var(--accent-color-1);
          /* border-radius: 10px; */
          &::placeholder{
            padding-left: 5px;
          }
          &:focus{
            border-bottom: 3px solid var(--accent-color-2);
          }
        }

        select {
          color: #757794;
          cursor: pointer;
        }
        option {
          /* cursor: pointer; */
          color: var(--secondary-text-color);
        }
      }
      button {
        color: var(--secondary-text-color);
        font-size: 20px;
        padding: 7px;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        font-weight: 700;
        position: relative;
        transition: all 0.1s linear;
        &:hover {
          background-color: var(--accent-color-1);
          color: var(--primary-text-color);
          transition: all 0.1s linear;
        }
      }
      .loader {
        padding: 7px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    position: relative;
    transition: all 0.1s linear;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
        img{
          height: 26px;
    scale: 1.8;
        }
    }
  }
`;

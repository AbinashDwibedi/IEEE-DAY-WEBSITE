import React, { useContext, useEffect, useState } from "react";
import { competitionDetails, competitionResistrationStatus } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import loaderGif from "../assets/Spinner.gif";
import axios from "axios";
function Register() {
  const nameRegex = /^[a-zA-Z\s'-]{3,40}$/;
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const navigate = useNavigate();
  const { setResistrationResponse } = useContext(competitionResistrationStatus);
  const [isLoaded, setisLoaded] = useState(true);
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

    whatsappNo: "",
    instagramId: "",
    yearOfPassout: "",
    collegeId: "",
    degree: "",
    ieeeDayExpectation: "",
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
        whatsappNo: "",
        instagramId: "",
        yearOfPassout: "",
        collegeId: "",
        degree: "",
        ieeeDayExpectation: "",
      });
      const { data } = await axios.post(
        // "https://ieee-day-website.vercel.app/api/competitions/register",
        "http://localhost:3001/api/competitions/register",
        {
          fullname: regData.fullname,
          email: regData.email,
          mob: regData.mob,
          department: regData.department,
          college: regData.college,
          competition: details.title,
          whatsappNo: regData.whatsappNo,
          instagramId: regData.instagramId,
          yearOfPassout: regData.yearOfPassout,
          collegeId: regData.collegeId,
          degree: regData.degree,
          ieeeDayExpectation:regData.ieeeDayExpectation,
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
    } else if (!phoneRegex.test(regData.whatsappNo)) {
      toast.error("enter a valid whatsapp number", options);
      return false;
    } else if (regData.college.length < 5) {
      toast.error("invalid college name", options);
      return false;
    } else if (regData.collegeId.length < 5) {
      toast.error("invalid college id", options);
      return false;
    } else if (regData.yearOfPassout.length < 4) {
      toast.error("invalid year", options);
      return false;
    } else if (regData.instagramId.length < 3) {
      toast.error("invalid instagram id", options);
      return false;
    } else if (regData.degree.length < 2) {
      toast.error("invalid degree name", options);
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
              {/* <i className="fa-solid fa-user"></i> */}
              <input
                type="text"
                placeholder="Enter your name"
                name="fullname"
                value={regData.fullname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              {/* <i className="fa-solid fa-envelope"></i> */}
              <input
                placeholder="Enter your email"
                type="text"
                name="email"
                value={regData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* <div>
              <i className="fa-solid fa-mobile"></i>
              <input
                placeholder="mobile number"
                type="tel"
                name="mob"
                value={regData.mob}
                onChange={(e) => handleChange(e)}
              />
            </div> */}
            <div>
              {/* <i class="fa-brands fa-whatsapp"></i> */}
              <input
                placeholder="mobile number"
                type="tel"
                name="mob"
                value={regData.mob}
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="Whatsapp number"
                type="tel"
                name="whatsappNo"
                value={regData.whatsappNo}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* <div>
              <i className="fas fa-university"></i>
              <input
                placeholder="Enter your college name"
                type="text"
                name="college"
                value={regData.college}
                onChange={(e) => handleChange(e)}
              />
            </div> */}
            <div>
              {/* <i class="fa-brands fa-whatsapp"></i> */}
              <input
                placeholder="college name"
                type="text"
                name="college"
                value={regData.college}
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="college Id"
                type="tel"
                name="collegeId"
                value={regData.collegeId}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              {/* <i class="fa-brands fa-whatsapp"></i> */}
              <input
                placeholder="Passout Year"
                type="tel"
                name="yearOfPassout"
                value={regData.yearOfPassout}
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="Branch"
                type="text"
                name="department"
                id=""
                value={regData.department}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              {/* <i class="fa-brands fa-instagram"></i> */}
              <input
                placeholder="instagram Id"
                type="tel"
                name="instagramId"
                value={regData.instagramId}
                onChange={(e) => handleChange(e)}
              />
              {/* <input type="text" disabled value={details.title} /> */}
              <input
                type="text"
                placeholder="Degree"
                name="degree"
                value={regData.degree}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <textarea
                rows={4}
                name="ieeeDayExpectation"
                id=""
                value={regData.ieeeDayExpectation}
                placeholder="What do you expect from IEEE Day..."
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            {/* <div>
              <i className="fa-solid fa-list"></i>
              <input type="text" disabled value={details.title} />
            </div> */}
            {/* <div>
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
                
              </select> 
              <input placeholder="Enter your branch" type="text" name="department" id="" value={regData.department} onChange={(e)=> handleChange(e)}/>
            </div> */}
            {isLoaded ? (
              <button type="submit">Register Now</button>
            ) : (
              <div className="loader">
                <img src={loaderGif} alt="" />
              </div>
            )}
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
        textarea {
          resize: none;
          outline: none;
          width: 100%;
          background: transparent;
          border: 2px solid var(--primary-text-color);
          border: none;
          border: 3px solid var(--accent-color-1);
          font-size: 16px;
          font-weight: 600;
          padding: 10px;
          border-radius: 5px;
        }
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
          &::placeholder {
            padding-left: 5px;
          }
          &:focus {
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
        color: var(--accent-color-1);
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
        img {
          height: 26px;
          scale: 1.8;
        }
      }
    }
  }
`;

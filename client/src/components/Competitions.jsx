import React, { useContext } from "react";
import styled from "styled-components";
import { competitions } from "../data/competition.js";
import { competitionDetails } from "../App.jsx";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Competitions() {
  const navigate = useNavigate();
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

  const { details, setDetails } = useContext(competitionDetails);
  function handleDetails(competition) {
    setDetails(competition);

    navigate(`/Register/${competition.title}`);
  }
  return (
    <>
      <CompetitionsContainer
        className="competitions-container"
        id="COMPETITIONS"
      >
        <h1 className="universal-heading">Event's</h1>
        <div className="competitions">
         <div className="competition">
                <img src="/assets/IEEE DAY 2K24.png" alt="" />
                <div>
                  <h2>Tech summit 2024</h2>
                  <p>In the celebration of IEEE Day 2024, the IEEE VSSUT Student Branch proudly presents the IEEE VSSUT Tech Summit 2024! Join us for two days filled with insightful talks, inspiring speakers, and cutting-edge technology discussions featuring professionals from prominent institutions. </p>
                  {/* <p style={{fontStyle: "italic" , color: "red" , fontWeight: 600}}></p>
                  <a target="_blank" style={{textDecoration: "underline" , overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}} href={competition.link}></a> */}
                  <a href="https://forms.gle/zhYcFRfsyLPueewg7" target="_blank"><button style={{width: "100%"}}>
                    click here to register
                  </button>
                  </a>
                </div>
              </div>
          {competitions.map((competition, index) => {
            return (
              <div className="competition" key={index}>
                <img src={competition.image} alt="" />
                <div>
                  <h2>{competition.title}</h2>
                  <p>{competition.description}</p>
                  {competition.linkText&& <p style={{fontStyle: "italic" , color: "red" , fontWeight: 600}}>{competition.linkText}</p>}
                  {competition.link&& <a target="_blank" style={{textDecoration: "underline" , overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}} href={competition.link}>{competition.link}</a>}
                  <button onClick={(e) => handleDetails(competition)}>
                    click here to register
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </CompetitionsContainer>
      <ToastContainer />
    </>
  );
}

export default Competitions;

const CompetitionsContainer = styled.div`
  margin: 0 20px;
  
  .competitions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    margin: 50px 0;
    gap: 10px;
    .competition {
      padding: 15px;
      border-radius: 2px 10px 2px 10px;
      display: flex;
      gap: 20px;
      
      &:hover > img{
          mix-blend-mode: luminosity;
          transition: all .1s linear;
      }
      /* background: var(--accent-color-1); */
      /* height: 400px; */
      /* border:2px solid var(--accent-color-1); */
      div {
        width: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        p {
          margin-top: 10px;
    font-weight: 200;
    /* height: 175px; */
    /* overflow-y: auto;
    overflow-x: hidden; */
    padding-right: 10px;
        }
        button {
          margin-top: 20px;
          border: none;
          color: var(--tertiary-text-color);
          padding: 10px;
          font-size: 17px;
          border-radius: 4px;
          font-weight: 700;
          cursor: pointer;
          &:hover {
            background-color: var(--accent-color-1);
            color: var(--primary-text-color);
          }
        }
      }
      img {
        width: 50%;
        height: 280px;
        border-radius: 5px;
        
      }
    }
  }
  @media screen and (max-width: 600px) {
    margin: 0 10px;
    .competitions {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      .competition {
        flex-direction: column;
        gap: 10px;
        div,
        img {
          width: 100%;
        }
      }
    }
  }
`;

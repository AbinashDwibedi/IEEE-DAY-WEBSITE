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
      <CompetitionsContainer className="competitions-container" id="COMPETITIONS">
        <h1 className="universal-heading">Competitions</h1>
        <div className="competitions">
          {competitions.map((competition, index) => {
            return (
              <div className="competition" key={index}>
                <img src={competition.image} alt="" />
                <div>
                  <h2>{competition.title}</h2>
                  <p>{competition.description}</p>
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
      /* background: var(--accent-color-1); */
      /* height: 400px; */
      /* border:2px solid var(--accent-color-1); */
      div {
        width: 50%;
        p {
          margin-top: 10px;
          font-weight: 200;
        }
        button {
          margin-top: 20px;
          border: none;
          color: var(--secondary-text-color);
          padding: 7px;
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
        height: auto;
        border-radius: 5px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    margin: 0 10px;
    .competitions{
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  .competition{
    gap: 10px;
  }

  }
`;

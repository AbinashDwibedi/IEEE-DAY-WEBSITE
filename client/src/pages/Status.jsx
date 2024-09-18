import React, { useContext, useEffect } from 'react'
import { competitionResistrationStatus } from '../App'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Status() {
    const {resistrationResponse} = useContext(competitionResistrationStatus);
    const navigate = useNavigate();
    useEffect(()=>{
      if(Object.keys(resistrationResponse).length ==0){
        navigate("/")
      }
    },[])
  return (
    <StatusContainer>
        <h1>{resistrationResponse.message} !</h1>
        {/* {!resistrationResponse.status && <button onClick={()=> navigate("/")}>goto homepage</button>} */}
        <button onClick={()=> navigate("/")}>goto homepage</button>
    </StatusContainer>
  )
}

export default Status
const StatusContainer = styled.div`
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    h1{
        font-size: 40px;
        text-align: center;
    }
    button{
        color: var(--secondary-text-color);
        font-size: 16px;
        padding: 10px 20px;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        font-weight: 400;
        position: relative;
        transition: all 0.1s linear;
        &:hover {
          background-color: var(--accent-color-1);
          color: var(--primary-text-color);
          transition: all 0.1s linear;
        }
    }
`
import React from 'react'
import styled from "styled-components"


const Wrapper = styled.div`
  background: #3e4a61;
  height: 100vh;
  width: 100%;

  .flex {
    display: flex;
    justify-content: space-around;
    width: 100%;
    /* height: 100vh */
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 10vh;
    margin-left: 0.75em;
    color: #e2ded3;
    padding: 0;
    margin-top: 0
  }

  .box {
    height: 25vh;
    width: 25vw;
    margin: 4%;
    padding-bottom: 25%;
    background: #3e4a61;
    border-radius: 15%;
    box-shadow: inset 9.91px 9.91px 12px #384358,
      inset -9.91px -9.91px 12px #44516a;
  }
`;

function Homepage() {
    return (
      <Wrapper>
        <h1>Logs</h1>
          <div className="flex">
            <div className="box" ></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
       
      </Wrapper>
    );
}

export default Homepage


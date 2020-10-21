import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap");
  background: linear-gradient(145deg, #7a385b, #a44c7b);
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  padding-top: 2em;
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    color: #fccde2;
    font-size: 100px;
  }

  .body {
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .form {
    width: 90%;
    height: 90%;
    background: pink;
    margin: auto;
    background: linear-gradient(145deg, #7a385b, #a44c7b);
    box-shadow: 9.91px 9.91px 12px #823c61, -9.91px -9.91px 12px #9c4875;
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding-top: 4em;
    padding-left: 3em;
    border-radius: 10px;
    margin-top: 1.5em
  }

  
  .inner-boxes {
    margin: 1em 0;
    background: linear-gradient(145deg, #7a385b, #a44c7b);
    box-shadow: 9.91px 9.91px 12px #823c61, -9.91px -9.91px 12px #9c4875;
    border-radius: 10px;
  }

  .boxes {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 2em;
    margin-top: 5%;
    
  }

  button {
    width: 220px;
    height: 60px;
    color: #fccde2;
    font-size: 32px;
    border: none;
    cursor: pointer;
    background: linear-gradient(145deg, #7a385b, #a44c7b);
    border-radius: 10px;
    box-shadow: 9.91px 9.91px 12px #823c61, -9.91px -9.91px 12px #9c4875;
  }

  button:focus {
    outline: none;
  }

  .flex {
    display: flex;
    margin: 4em 0;
  }

  p {
    font-size: 30px;
    color: #fccde2;
    margin-right: 2%;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
  }

  input {
    width: 50%;
    height: 60px;
    opacity: 0.9;
    border: none;
    background: linear-gradient(145deg, #7a385b, #a44c7b);
    border-radius: 10px;
    box-shadow: 9.91px 9.91px 12px #823c61, -9.91px -9.91px 12px #9c4875;
    font-size: 24px;
    padding-left: 1em;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
  }
  @media only screen and (max-width: 880px) {
    .boxes {
      display: flex;
      flex-direction: row;
      width: 300px;
      height: 300px;
    }

    .form {
      display: block;
    }
  }
`;


function Authform(){
    return (
      <Wrapper>
        <div className="body w3-animate-top">
          <div className="form">
            <div className="boxes w3-center w3-animate-left">
              <div
                className="inner-boxes"
                style={{
                  width: "50%",
                  paddingBottom: "50%",
                }}
              ></div>
              <div
                className="inner-boxes"
                style={{
                  width: "50%",
                  paddingBottom: "50%",
                }}
              ></div>
              <div
                className="inner-boxes navy"
                style={{
                  width: "50%",
                  paddingBottom: "50%",
                }}
              ></div>
            </div>
            <form>
              <h1>Live Right</h1>
              <div className="flex">
                <p>Username:</p>
                <input type="text" />
              </div>
              <div className="flex">
                <br />
                <p>Password:</p>
                <input
                  style={{ marginLeft: ".75em" }}
                  type="text"
                  className="btm"
                />
              </div>
              <br />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </Wrapper>
    );
}

export default Authform
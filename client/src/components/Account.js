
import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #967248;
  color: #3e4a61;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;

    /* margin-bottom: 1em */
  }

  p, h1{
      display: block
    
    }
  .title {
    font-size: 10vh;
    margin-left: 0.75em;
    padding-top: 1em;
    margin-bottom: 1em;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 90%;
    margin: 0 auto;
  }

  .account-image {
    width: 40vh;
    height: 40vh;
    background: #967248;
    border-radius: 16px;
    box-shadow: 9.91px 9.91px 15px #896842, -9.91px -9.91px 15px #a47c4e;
    /* margin: 2em; */
  }

  .info-pane {
    width: 60vw;
    height: 40vh;
    background: #967248;
    border-radius: 16px;
    box-shadow: 9.91px 9.91px 15px #896842, -9.91px -9.91px 15px #a47c4e;
  }

  img {
    border: none;
    background: cover;
    overflow: hidden;
    background-size: cover;
    height: 100%;
    border-radius: 16px;
  }
  button {
    padding: 0.75em 0.5em;
    background: #967248;
    border-radius: 16px;
    box-shadow: 9.91px 9.91px 15px #896842, -9.91px -9.91px 15px #a47c4e;
    margin: 2em .5em;
    border: none;
    color: #3e4a61;
    cursor: pointer;
  }

  button:focus{
      outline: none;
  }

  .flex{
      width: 100%;
      justify-content: space-around
  }
  .flex-2{
      display: grid;
      /* grid-template-columns: repeat(2, 1fr) */
  }
`;

export default function Account() {
    return (
      <Wrapper>
        <div className="container">
          <h1 className="title">Your account</h1>
          <div className="grid-container">
            <div className="account-image" src="">
              <img
                src="https://images.pexels.com/photos/2721992/pexels-photo-2721992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex-2">
              <div className="info-pane">
                <h1 style={{ marginLeft: ".5em" }}>Jared Manwaring</h1>
                <p style={{ marginLeft: "1.5em" }}>Birthday: 4/28/1989</p>
                <p style={{ marginLeft: "1.5em" }}>Weight: 260lb</p>
                <p style={{ marginLeft: "1.5em" }}>Height: 6ft</p>
              </div>
              <div className="info-pane-right">
                  <p>City: Denver, CO</p>
              </div>
            </div>
            <div className="flex">
              <button type="submit">Delete Account</button>
              <button type="submit">Edit information</button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}

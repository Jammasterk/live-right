import React from 'react'
import styled from "styled-components"
import Nav from "./Nav"
var randomColor = require('randomcolor');


const color = randomColor({
  luminosity: "dark",
  hue: "purple",
});

const color2 = randomColor({
  count: 10,
  hue: "red",
});

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap");
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  width: 100%;
  background: #e2ded3;
  /* background: ${color2}; */

  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 10vh;
    margin-left: 0.75em;
    color: #7a385b;
  }

  .page {
    padding: 2em 0;
  }

  .container {
    width: 90%;
    height: 30vh;
    margin: auto;
    background: linear-gradient(145deg, ${color2}, #fffff3);
    border-radius: 25px;
    box-shadow: 9.91px 9.91px 15px #cecac0, -9.91px -9.91px 15px #f6f2e6;
  }

  input {
    width: 50%;
    height: 3em;
    border: none;
    background: linear-gradient(145deg, #c0bdb3, #fffff3);
    border-radius: 15px;
    box-shadow: 9.91px 9.91px 15px #cecac0, -9.91px -9.91px 15px #f6f2e6;
    margin: 0 4.5em;
    padding-left: 1em;
    color: ${color};
  }

  button {
    height: 3em;
    padding: 0 3em;
    background: linear-gradient(145deg, #c0bdb3, #fffff3);
    border-radius: 15px;
    box-shadow: 9.91px 9.91px 15px #cecac0, -9.91px -9.91px 15px #f6f2e6;
    margin: 0 4.5em;
    border: none;
    color: #3e4a61;
  }

  button:focus {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  .flex {
    display: flex;
    margin-bottom: 3em;
  }
  a {
    color: #7a385b;
  }

  button {
    color: #7a385b;
  }

  .line {
    background: #7a385b;
  }
  @media only screen and (max-width: 880px) {
    .flex {
      flex-direction: column;
      margin: auto;
    }

    input,
    button {
      width: 90%;
      margin: 1em auto;
    }

    input {
      margin-bottom: 1em;
    }
  }
`;

export default function ShoppingList() {
    return (
      <Wrapper>
          <Nav style={{color: "blue"}}/>
        <div className="page">
            <h1>Find some food!</h1>
            <div className="flex">
            <input type="text"/>
            <button type="submit">Search</button>
        </div>
            <div className="container"></div>
        </div>
      </Wrapper>
    );
}

import React, {useState} from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
  ul {
    display: flex;
    list-style: none;
    width: 60%;
    position: absolute;
    right: 0;
    justify-content: space-around;
    margin-top: 5px;
  }
  a {
    text-decoration: none;
    font-size: 24px;
    color: #e2ded3;
  }

  .line {
    width: 35px;
    height: 2px;
    margin: 8px;
    background: #e2ded3;
  }
  .hamburger{
      height: 60px;
      position: absolute;
      cursor: pointer
  }
`;

function Nav() {

    const [show, setShow] = useState(false)

    function handleClick(){
        setShow(!show)
    }

    return (
      <Wrapper>
        <div>
          <div className="hamburger" onClick={handleClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul style={show ? {display: "block"} : {display: "none"}}>
            <li>
              <Link to="/">Auth</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/shopping">Cook</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    );
}

export default Nav

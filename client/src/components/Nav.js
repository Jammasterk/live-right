import React from 'react'
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
    margin-top: 5px
  }
  a {
    text-decoration: none;
    font-size: 24px;
    color: #e2ded3;
  }
`;

function Nav() {
    return (
      <Wrapper>
        <div>
          <ul>
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

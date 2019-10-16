import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Icon = styled.span`
height: 1.2em
width: 1.2em
border: 1px solid #ffff;
color: #ffff;
display: flex;
align-items: center;
justify-content: center;
margin: 0 .5em 0 .15em;
`;

const Wrapper = styled.div`
  background-color: #f58c47;
  height: 1.8em;
  display: flex;
  align-items: center;
  color: #1a1a1a;
  font-size: 0.8em;
  font-weight: 700;
`;

const Menu = () => {
    return (
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Icon>Y</Icon>
        </Link>
        Hacker News
      </Wrapper>
    );
  };

export default Menu;

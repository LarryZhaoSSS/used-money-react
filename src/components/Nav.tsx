import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0, 0.25);
  ul {
    display: flex;
    li {
      width: 33.33%;
      text-align: center;
      padding: 16px;
    }
  }
`;
export const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to='/tags'>tag</Link>
        </li>
        <li>
          <Link to='/money'>money</Link>
        </li>
        <li>
          <Link to='/statistics'>statistics</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

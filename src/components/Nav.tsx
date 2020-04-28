import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import x from '../assets/icons/dollar.svg';
import { Icon } from './Icon';
console.log(x);
const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0, 0.25);
  ul {
    display: flex;
    li {
      width: 33.33%;
      display: flex;
      padding: 4px 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
export const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name='label' />
          <Link to='/tags'>标签</Link>
        </li>
        <li>
          <Icon name='dollar' />
          <Link to='/money'>记账</Link>
        </li>
        <li>
          <Icon name='statistic' />
          <Link to='/statistics'>statistics</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

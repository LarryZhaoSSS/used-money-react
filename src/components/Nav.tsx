import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import x from '../assets/icons/dollar.svg';
import { Icon } from './Icon';
const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0, 0.25);
  background: #fff;
  ul {
    display: flex;
    li {
      width: 33.33%;
      text-align: center;
      > a {
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.selected {
          color: red;
        }
        .icon {
          width: 24px;
          height: 24px;
          fill: currentColor;
        }
      }
    }
  }
`;
export const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to='/money' activeClassName='selected'>
            <Icon name='dollar' />
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to='/tags' activeClassName='selected'>
            <Icon name='label' />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to='/statistics' activeClassName='selected'>
            <Icon name='statistic' />
            statistics
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

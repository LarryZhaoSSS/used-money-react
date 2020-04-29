import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

export const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>{props.children}</Main>
      <Nav />
    </Wrapper>
  );
};
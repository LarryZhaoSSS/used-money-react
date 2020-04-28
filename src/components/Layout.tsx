import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';
export const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Main = styled.div`
  border: 1px solid green;
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

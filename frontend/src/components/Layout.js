import React from 'react';
import styled from 'styled-components';

export const Layout = ({ children }) => {
  return (
    <Container>
      <LayoutForm>{children}</LayoutForm>
    </Container>
  );
};

export const GridLayout = ({ children }) => {
  return (
    <Container>
      <GridLayoutForm>{children}</GridLayoutForm>
    </Container>
  );
};

export const CenterLayout = ({ children }) => {
  return (
    <Container>
      <CenterLayoutForm>{children}</CenterLayoutForm>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  /* width: 1400px; */
  justify-content: center !important;
  padding-top: 9rem;
`;

const LayoutForm = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 3rem 0 3rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 5rem;
  ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  ${({ theme }) => theme.device.mobile} {
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const GridLayoutForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-top: 2.5rem;
  ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  ${({ theme }) => theme.device.mobile} {
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const CenterLayoutForm = styled.div`
  width: 100%;
  /* margin: 0 3rem 0 9.6rem; */
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  flex-direction: column;
  ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  ${({ theme }) => theme.device.mobile} {
    width: 100%;
    flex-wrap: wrap;
  }
`;

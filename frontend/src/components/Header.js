import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';

// components
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';

const Header = (props) => {
  return (
    <NavContainer>
      <NavDiv>
        <StyledGrid container spacing={1}>
          {/* <Grid item xs={10} md={9} lg={9}> */}
          <Grid item xs={9} md={9} lg={10}>
            <InnerDiv>
              <Logo />
              {props.page === 'main' ? <HeaderMenu /> : null}
            </InnerDiv>
          </Grid>
        </StyledGrid>
      </NavDiv>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: transparent;
`;

const NavDiv = styled.div`
  height: 7vh;
  min-height: 3.1rem;
  max-height: 5rem;
  width: 100%;
  position: absolute;
  top: 0;
`;

const StyledGrid = styled(Grid)`
  padding-top: 3.4rem;
  justify-content: center;
  background-color: transparent;
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;

import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// components
import { logo } from '../shared/textStyle';

const Logo = () => {
  const history = useHistory();

  return (
    <LogoWrap
      onClick={() => {
        history.push('/');
      }}
    >
      {LogoTitle}
    </LogoWrap>
  );
};

const LogoTitle = 'SEULKOK';

const LogoWrap = styled.header`
  ${logo}
  color: var(--main);
  cursor: pointer;
`;

export default Logo;

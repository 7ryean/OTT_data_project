import React from 'react';
import styled from 'styled-components';

const Template = ({ children }) => {
  return <MainForm>{children}</MainForm>;
};

const MainForm = styled.main`
  width: 100%;
  /* min-height: calc(120vh - 100px); */
  /* z-index: -1;
  background: radial-gradient(
      60% 55% at 50% 8%,
      var(--deepdarkred) 0%,
      var(--black) 100%
    ),
    var(--violet);
  ${({ theme }) => theme.device.mobile} {
    min-height: calc(140vh - 100px);
  } */
`;

export default Template;

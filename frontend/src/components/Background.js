import React from 'react';
import styled from 'styled-components';

const Background = () => {
  return (
    <div>
      <Bg />
    </div>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  background: radial-gradient(
      60% 55% at 50% 8%,
      var(--deepdarkred) 0%,
      var(--black) 100%
    ),
    var(--violet);
`;

export default Background;

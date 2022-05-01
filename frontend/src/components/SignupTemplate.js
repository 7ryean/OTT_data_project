import React from 'react';
import styled from 'styled-components';


const SignupTemplate = ({ children }) => {
  return(
    <SignupTemplateBlock>
      {children}
    </SignupTemplateBlock>)
}

const SignupTemplateBlock = styled.div`
  width: 580px;
  height: 310px;
  position: relative;

  background: linear-gradient(
    to bottom right,
    #541b22, black
  );
  border: 3px solid;
  border-radius: 16px;
  border-color: var(--main);

  margin: 0 auto;


  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export default SignupTemplate;
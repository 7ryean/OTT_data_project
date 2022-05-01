import React from 'react'
import styled from 'styled-components';

// components
import useMotion from '../utils/useMotion';

const SignupPage = () => {
  return (
    <>
    <SectionWrapper>
      <LogoTitle dark {...useMotion('down', 1, 0.3)}>
        SEULKOK
      </LogoTitle>

      <MainContent>
        <p dark {...useMotion('down', 1, 0.2)}>간단한 구독과 관리 <b>슬콕</b> <br/>
        <p2 dark {...useMotion('down', 1, 0.2)}> 이제 <span style={{color:'#e8384c'}}>슬콕</span>과 함께하세요</p2></p>

          <SignupFrom>
            <p>Sign up</p>
            <StyledInput autoComplete="email" name="email" placeholder="Email address"  />
            <StyledInput autoComplete="passward" name="passward" placeholder="Passward" />
            <FormButton><p2>Sign up</p2></FormButton>
            {/* <div>아직 <b>슬콕</b>을 이용 중이지 않으시다면? <span2 style={{color:'#e8384c'}}><b>Sign up</b></span2></div> */}
          </SignupFrom>
          </MainContent>

    </SectionWrapper>
    </>
  );
};

const SectionWrapper = styled.div`
  background: radial-gradient(
    60% 55% at 50% 8%,
    #2f1316 0%,
    #000000 100%
  ),
  #594fa9;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

const LogoTitle = styled.header`
  color: var(--main);
  font-size: 2rem;
  margin-top: 5%;
  margin-bottom: 30px;
`;

const MainContent = styled.div`
  font-size: 2.8rem;
  line-height: 3.8rem;
  color: #ffffff;

  p2 {
    font-size: 3.6rem;
    margin-top: 5px;
  };
`;


const SignupFrom = styled.div`

  width: 550px;
  height: 300px;
  position: absolute;
  text-align: center;


  p {
    color: var(--main);
    font-size: 1.3rem;
    font-weight: bold;
    text-align: left;
    margin-left: 15px;
  }
  div {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9rem;

    span2 {
      cursor: pointer;
    }
  }
`;

const StyledInput =styled.input`
  font-size: 1rem;
  color: white;

  border: 2px solid;
  border-color: var(--main);
  border-radius: 5px;

  margin-bottom: 20px;
  outline: none;

  width: 93%;
  height: 35px;

  background-color: rgba(255, 255, 255, 0.08);

  ::placeholder {
    color: rgba(255, 255, 255, 0.54);
    text-align: left;
    padding: 0 0.5rem;
  }
`;

const FormButton = styled.button`
  font-size: 1rem;
  color: #ffffff;

  border-radius: 5px;
  border: none;

  margin-bottom: 20px;

  width: 94.3%;
  height: 40px;
  cursor: pointer;

  background-color: var(--main);
  &:hover {
    background: linear-gradient(
      to right,
      var(--main), #5a292f
    );
  }
`




export default SignupPage

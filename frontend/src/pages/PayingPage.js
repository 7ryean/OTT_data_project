import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useMotion from '../utils/useMotion';
// import { useEffect, useState } from 'react';

// 짱멋진모듈(가로스크롤)
// import ScrollHorizontal from 'react-scroll-horizontal';

//components
// import SignupTemplate from '../components/SignupTemplate';

const PayingPage = () => {
  return (
    <>
      <SectionWrapper>
        <LoginSetion>
          <LogoTitle dark {...useMotion('down', 1, 0.3)}>
            SEULKOK
          </LogoTitle>

          <MainContent>
            <p dark {...useMotion('down', 2, 3)}>
              결제 완료 되었습니다.<br />
              <p2 dark {...useMotion('down', 1, 0.2)}>오늘도
                <span style={{ color: '#e8384c' }}> 편리하게 슬콕</span>
              </p2>
            </p>
          </MainContent>

          <LoginWrapper>
            <LoginForm>
                <Link to="mypage">
                  <FormButton>
                    <b style={{ textDecoration: 'none' }}>결제완료</b>
                  </FormButton>
                </Link>
            </LoginForm>
          </LoginWrapper>
        </LoginSetion>
      </SectionWrapper>
    </>
  );
};

const SectionWrapper = styled.div`
  background: radial-gradient(
    40% 40% at 50% 50%,
    #2f1316 0%,
    #000000 100%
  ),
  #594fa9;

  width: 100%;
  height: 110vh;

  display: flex;
  flex-direction: column;

  // justify-content:center;
  text-align: center;
`;

const LoginSetion = styled.div`
  margin-top: 5%;
`;


const LogoTitle = styled.header`
  color: var(--main);
  font-size: 2rem;
  margin-top: 5%;
  margin-bottom: 30px;
`;

const MainContent = styled.div`
  font-size: 2.3rem;
  line-height: 3.8rem;
  color: #ffffff;
  top: 10%;

  p2 {
    font-size: 3rem;
    margin-top: 5px;
  }
`;

const LoginWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
`;

const LoginForm = styled.div`
  width: 550px;
  text-align: center;

  div {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

const FormButton = styled.button`
  font-size: 1rem;

  border-radius: 5px;
  border: none;

  margin-bottom: 20px;

  width: 68%;
  height: 40px;

  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  cursor: pointer;

  &: hover {
    border: 2px solid var(--main);
    background-color: var(--main);
  }
`;

export default PayingPage;

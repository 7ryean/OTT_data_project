import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// components
import useMotion from '../utils/useMotion';

const PayForPage = () => {
  return (
    <>
      <SectionWrapper>
        <LoginSetion>
          <LogoTitle dark {...useMotion('down', 1, 0.3)}>
            SEULKOK
          </LogoTitle>

          <MainContent>
            <p dark {...useMotion('down', 1, 0.2)}>
              이번달은 <b>어떤 OTT</b>를 <b>구독</b>과 결제할까요? <br />
              <b>구독 예약</b>과 <b>결제</b>까지! <br />
              <p2 dark {...useMotion('down', 1, 0.2)}>
                <span style={{ color: '#e8384c' }}>슬콕</span>에서 편리하게 관리하세요!
              </p2>
            </p>
          </MainContent>

          <LoginWrapper>

            <Link to="/paying">
              <LoginForm>
                  <FormButton>
                    <b style={{ textDecoration: 'none' }}>공동인증서</b>로 한 번에 등록하기
                  </FormButton>

                  <FormButton>
                    <b style={{ textDecoration: 'none'}}>신용 및 체크카드</b>
                  </FormButton>

                  <FormButton>
                    <b style={{ textDecoration: 'none'}}>은행 계좌</b>
                  </FormButton>

                  <FormButton>
                    <b style={{ textDecoration: 'none'}}>네이버페이</b> 간편결제
                  </FormButton>

                  {/* <FormButton>
                    <b style={{ textDecoration: 'none'}}>완료</b>
                  </FormButton> */}
              </LoginForm>
            </Link>
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

  &:hover {
    border: 2px solid var(--main);
    background-color: var(--main);
  }
`;

export default PayForPage;

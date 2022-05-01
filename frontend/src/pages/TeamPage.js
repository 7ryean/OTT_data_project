
import React, {useState, useMemo} from 'react';
import styled, {keyframes} from 'styled-components';
import { Link, useParams } from 'react-router-dom';

// import { Grid } from '@mui/material';

// components
import Header from '../components/Header';
import useMotion from '../utils/useMotion';


// import Layout from '../components/Layout';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const TeamPage = (props) => {


  return (
    <>
    <MainScreen>
        <Header page="previewpage2" />

          <MainContent>
            <p dark {...useMotion('down', 1, 0.2)}>
            <b style={{color: 'var(--main)', fontSize: '20px'}}>PROJECT : SEULKOK</b> <br />
            <p2>슬기로운 집콕생활에서 <br /><sapn style={{color: 'var(--main)'}} >나에게 알맞은 OTT</sapn>를 콕! 집어가세요 </p2> <br />
            <br />
            COVID-19 이후, 필수 요소가 되어버린 OTT. <br />
            우리는 데이터 분석을 통해 어떤 유의미한 플랫폼을 고민하게 되었습니다.<br/>
            <b>원하는 컨텐츠</b>에 따라 반복되는 구독과 취소를 편리하게 관리할 수 있는 슬콕을 만들게 되었습니다.<br/>
            슬콕은 하나의 플랫폼 안에서 다양한 OTT를 구독 예약, 구독, 구독 취소, 결제까지 가능하게 만들자는<br />
            목표로 프로젝트가 진행되었습니다.</p>

            <ScrollImage>
            <span></span>
            </ScrollImage>

            <TeamContent>
              <p dark {...useMotion('up', 1, 0.2)}>
              <p2>오히려 좋은 <sapn style={{color: 'var(--main'}}>18팀</sapn></p2> <br />
              <br />
              <b style={{color: 'var(--main'}}>Team Leader</b> <span>혜원</span> <br />
              <b style={{color: 'var(--main'}}>Frontend</b> <span>진영, 혜원</span> &emsp;
              <b style={{color: 'var(--main'}}>Backend</b> <span>산하, 민정</span> &emsp;
              <b style={{color: 'var(--main'}}>Data science</b> <span>가연, 정인</span> </p>
            <FrontEnd>
              <p><b>혜원</b>&emsp;팀 케어와 UI, 프론트는 제가 할게요. 근데 이제 잡일을 곁들인.. 언젠가는 풀스택을 꿈꾸는 예비 개발자 <br />
              <b>진영</b>&emsp;걱정되지만 살짝 설레네요</p>
            </FrontEnd>
            <FrontEnd>
              <p><b>산하</b>&emsp;반가워요 재밌게해요 0930-1830은 부재중 <br />
              <b>민정</b>&emsp;백엔드 개발을 맡은 엘리스 3기 2반 서민정입니다. 멋진 개발자가 되는 그날까지 화이팅!</p>
            </FrontEnd>
            <FrontEnd>
              <p><b>가연</b>&emsp;누구나 재밌고 쉽게 이해할 수 있는 분석 결과를 만들기 위해 노력하는 감자,,, 빵도 만들고 칵테일도 만들면서 요리를 배우다 여행에 빠져 관광학 공부를 시작했습니다. 지금은 숫자로 세상을 읽는 법을 배우고 있어요. <br />
              <b>정인</b>&emsp;손이 느리지만 열심히 따라가는 중... 가끔은 굴러갈게욥🐢</p>
            </FrontEnd>

            </TeamContent>

            <Link to="/main" style={{textDecoration: 'none'}}>
              <BackButton><b>뒤로가기</b></BackButton>
            </Link>

          </MainContent>

    </MainScreen>
  </>
  );
};

const scroll = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
`;

const ScrollImage = styled.div`
  width: 100%;
  align-items: center;

  span {
    position: absolute;
    top: 88%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-left: -12px;
    border-left: 2px solid rgba(242, 38, 62, 0.41);
    border-bottom: 2px solid rgba(242, 38, 62, 0.41);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: ${scroll} 2.5s infinite;
    animation: ${scroll} 2.8s infinite;
    box-sizing: border-box;
  }
`;

const MainScreen = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;

  background: radial-gradient(
    40% 40% at 50% 50%,
    #2f1316 0%,
    #000000 100%
  ),
  #594fa9;
`;


const MainContent = styled.div`
  width: 1010px;
  font-size: 1.1rem;
  margin-top: 15%;
  margin-left: 15%;
  color: #ffffff;
  margin-bottom: 20px;
  line-height: 2.1rem;

  p2 {
    font-size: 2.3rem;
    margin-top: 5px;
    line-height: 3rem;
  }
`;

const TeamContent = styled.div `
  margin-top: 280px;
`;


const MovieItem = styled.div`
  margin: 0 auto;
  width: 1010px;
  top: 20%;
  left: 15%;
  text-align: left;
  position: absolute;

  span {
    b {
      color: var(--main);
    }
  };
`;


const FrontEnd = styled.div`
  color: #ffffff;
`;

const BackButton = styled.button`
  text-align: center;
  cursor: pointer;
  width: 8rem;
  height: 2.5rem;
  float: right;
  margin-top: 50px;

  background: transparent;
  border-radius: 12px;
  border: 2px solid var(--main);

  color: var(--main);
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    color: #ffffff;
    background: var(--main);
  };
`


export default TeamPage;
import React from 'react';
import styled, {keyframes} from 'styled-components';

// components
import Header from '../components/Header';
import useMotion from '../utils/useMotion';
import ComingSoonPage from './ComingSoonPage';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MainPage = () => {

  return (
    <>
    {/* muted */}
    <MainScreen>
        <MainVideo loop autoPlay>
          <source src={process.env.PUBLIC_URL + `/video/video00.mp4`} type="video/mp4" />
        </MainVideo>

        <Header page="main" />

          <MainItem>
            <p style={{fontSize: '20px', color: '#ffffff'}}><b>액션/아케이드</b></p>
            <p2 style={{fontSize: '40px', color: 'var(--main)'} }>Arcane: League of Legends</p2>
            <p style={{color: '#ffffff'}}>모든 전설엔 시작이 있다. 《리그 오브 레전드》 제작진이 만든 새로운 애니메이션 시리즈 《아케인》. 레전드가 된 두 챔피언과 전운에 가득 뒤덮인 한 도시의 시작을 따라간다.</p>
            <a href="/preview/4"
                style={{color:'#e8384c', textDecoration: 'none'}}>자세히보기</a>
          </MainItem>

          <ScrollImage>
            <span></span>
          </ScrollImage>

          <ComingSoonPage />

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

const MainScreen = styled.div`
  width: 100%;
  height: 235vh;
  background-color: black;
  display: flex;
`;

const MainVideo = styled.video`
  width: 100%;
  position: absolute;
`;

const MainItem = styled.div`
  z-index: 999999;
  width: 600px;
  height: 500px;

  top: 450px;
  left: 120px;

  justify-content: left;
  position: absolute;
  flex-direction: column;
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

export default MainPage;
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Background from '../components/Background';
import useMotion from '../utils/useMotion';

// import Template from '../components/Template';
import { CenterLayout } from '../components/Layout';
// import { MovieDummy, resultDummy} from '../data/dummy';
import { head_3, sub_3 } from '../shared/textStyle';

const cards = [...new Array(8)];

const ResultPage = (props) => {
  // const location = useLocation();
  const history = { useHistory };
  const location = useLocation();
  // const getParams = props.location.state.contents;
  // console.log('surveyResultData : ', getParams);

  const getParams = JSON.parse(localStorage.getItem('userSurvey')).contents;

  const [bCheckedArray, setCheckedArray] = useState(
    Array.from({ length: cards.length }, () => false),
  );

  const activeHandler = (idx) => {
    if (bCheckedArray[idx] === true) {
      return true;
    } else {
      return false;
    }
  };

  // console.log(bCheckedArray);

  const setChecked = (id) => {
    let newArray = [...bCheckedArray];
    newArray[id] = !newArray[id];
    setCheckedArray(newArray);
    // console.log(newArray);
  };

  const [movieCard, setMovieCard] = useState();

  const [genre, setGenre] = useState();

  const [goToPreview, setGoToPreview] = useState();

  const PreviewClick = (data) => {
    let formData = new FormData();
    // formData.append('survey', data.survey);
    formData.append('ott', data.ott);
    formData.append('title', data.title);
    // console.log(data.ott);
    let url = `http://elice-kdt-3rd-team-18.koreacentral.cloudapp.azure.com/api/detail`;
    axios
      .post(url, formData, {
        // timeout: 10000,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        // console.log('ABCDE', res.data.movieinfo);
        localStorage.setItem('movieinfo', JSON.stringify(res.data));
        props.history.push('/preview2');
      })
      .catch((err) => {
        // console.log('failed', err);
      });
  };

  return (
    <SectionWrapper>
      <Header />

      <MainContent>
        <p dark {...useMotion('down', 1, 0.2)}>
          <b>결과</b>가 궁금하시죠? <br />
          앉으나 서나&nbsp;<b>{/* {getParams[0].genre} */}드라마 </b> 생각 중인
          <span style={{ color: 'var(--main)' }}>
            &nbsp;<b>유가연</b>
          </span>
          님!
        </p>
        <p2 dark {...useMotion('down', 1, 0.2)}>
          <span style={{ color: '#e8384c' }}>유가연</span>님의 이번 달 슬콕
          결과는?
        </p2>
      </MainContent>

      <ResultContent>
        <AmeResult>
          <p2>
            <b>유가연</b>님은 <b style={{ color: 'var(--main)' }}>‘미국’</b>
            작품을 가장 좋아하시는군요!
          </p2>
          <p>
            미국 작품이 많은 순서는&nbsp;
            <b style={{ color: 'var(--main)' }}>WATCHA</b>
            &gt;Tving&gt;NETFLIX&gt;Disney+ 예요!
          </p>
          <img alt="" src={process.env.PUBLIC_URL + `/result/result.png`} />
          <br />
        </AmeResult>

        <DramaResult>
          <p2 style={{ color: '#ffffff' }}>
            <b>유가연</b>님은{' '}
            <b style={{ color: 'var(--main)' }}>‘{/* {getParams[0].genre} */}드라마’</b>를
            좋아하시는군요!
          </p2>
          <p>
            드라마와 액션 장르 보유 비중 순위는&nbsp;
            <b style={{ color: 'var(--main)' }}>Tving</b>
            &gt;WATCHA&gt;NETFLIX&gt;Disney+ 예요!
          </p>
          <img alt="" src={process.env.PUBLIC_URL + `/result/result2.png`} />
          <br />
        </DramaResult>

        <MovieResult>
          <p2 style={{ color: '#ffffff' }}>
            <b>유가연</b>님은 <b style={{ color: 'var(--main)' }}>‘영화’</b>를
            더 좋아하시는군요!
          </p2>
          <p>
            영화 비율은 <b style={{ color: 'var(--main)' }}>Tving</b>
            &gt;WATCHA&gt;Disney+&gt;NETFLIX 순으로 높아요!
          </p>
          <img alt="" src={process.env.PUBLIC_URL + `/result/result3.png`} />
          <br />
        </MovieResult>

        <EndResult>
          <p2>
            지금까지&nbsp;
            <b style={{ color: 'var(--main)' }}>
              넷플릭스, 왓챠, 디즈니플러스, 티빙
            </b>
            을 총 <b style={{ color: 'var(--main)' }}>14,809분동안&nbsp;</b>
            시청했어요! <br />
            환산하면 10일 6시간 49분!
            <br /> 2022년 최저임금을 기준으로&nbsp;
            <b style={{ color: 'var(--main)' }}>2,260,840원</b>을 벌 수 있는
            시간이에요! <br />
            컵라면은 <b style={{ color: 'var(--main)' }}>4,936개</b>를 끓일 수
            있는 시간이었네요!
          </p2>
        </EndResult>
      </ResultContent>

      <FavContent>
        <p2>
          <span style={{ color: 'var(--main)' }}>유가연</span>님의 이번 달&nbsp;
          <span style={{ color: 'var(--main)' }}>가장 좋아할만한 컨텐츠</span>
        </p2>

        <CardGrid>
          {getParams.map((movie, index) => {
            return (
              <CardWrapper
                active={activeHandler(index)}
                onClick={() => {
                  setChecked(index);
                }}
              >
                <img
                  src={movie.poster}
                  width="230px"
                  height="320px"
                  alt="cardimg"
                  // onClick={() => props.history.push('/preview2')}
                  onClick={() => PreviewClick(movie)}
                  // onClick={()=>history.push}
                />
              </CardWrapper>
            );
          })}
        </CardGrid>
        <ButtonWrap>
          <p2>
            <span style={{ color: 'var(--main)' }}>유가연</span>님의
            이번&nbsp;달&nbsp;추천&nbsp;
            <span style={{ color: 'var(--main)' }}>
              OTT
              <span style={{ color: 'var(--white)' }}>는</span>&nbsp;
              <span style={{ color: 'var(--main)' }}>{getParams[0].ott}</span>
              <span style={{ color: 'var(--white)' }}>입니다.</span>
            </span>
          </p2>
        </ButtonWrap>
      </FavContent>

      <Link to="mypage" style={{ textDecoration: 'none' }}>
        <BackButton>
          <b>구독 관리</b>
        </BackButton>
      </Link>
    </SectionWrapper>
  );
};

// const Title = styled.h2`
//   ${head_3}
//   color: #ffffff;
//   margin-top: 50px;
//   /* text-align: center; */
//   justify-content: center;
//   ${({ theme }) => theme.device.mobile} {
//     justify-content: center;
//   }
// `;

const SectionWrapper = styled.div`
  background: var(--black);
  width: 100%;
  height: calc(460vh - 100px);
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
`;

const MainContent = styled.div`
  margin-top: 160px;
  font-size: 2.3rem;
  line-height: 3.8rem;
  color: #ffffff;
  p2 {
    font-size: 3.6rem;
    margin-top: 5px;
  }
`;

const AmeResult = styled.div`
  margin-top: 20px;
`;

const FavContent = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 2.3rem;
  p2 {
    font-size: 3.6rem;
    margin-top: 5px;
    color: #ffffff;
  }
`;

const DramaResult = styled.div`
  margin-top: 50px;
`;

const ResultContent = styled.div`
  margin-top: 100px;
  color: #ffffff;
  font-size: 1.3rem;
  img {
    width: 600px;
  }
  p2 {
    font-size: 30px;
  }
`;

const MovieResult = styled.div`
  margin-top: 50px;
`;

const EndResult = styled.div`
  margin-top: 30px;
`;

const CardGrid = styled.div`
  margin-top: 50px;
  display: grid !important;
  display: grid;
  grid-template-rows: 320px 320px;
  grid-template-columns: 230px 230px 230px 230px;
  /* grid-gap: 18rem 3rem; */
  grid-gap: 1rem;
  justify-content: center;
  cursor: pointer;
  div :hover {
    /* outline: 3px solid var(--main); */
    outline: 4px solid var(--main);
    // outline-offset: px;
  }
`;

const CardWrapper = styled.div`
  outline: ${(props) => (props.active ? '3px solid var(--main)' : 'none')};
  outline-offset: -2px;
`;

const BackButton = styled.button`
  text-align: center;
  cursor: pointer;
  width: 8rem;
  height: 2.5rem;
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
  }
`;

const ButtonWrap = styled.div`
  margin-top: 70px;
`;

export default ResultPage;

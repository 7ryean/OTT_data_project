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
          <b>??????</b>??? ???????????????? <br />
          ????????? ??????&nbsp;<b>{/* {getParams[0].genre} */}????????? </b> ?????? ??????
          <span style={{ color: 'var(--main)' }}>
            &nbsp;<b>?????????</b>
          </span>
          ???!
        </p>
        <p2 dark {...useMotion('down', 1, 0.2)}>
          <span style={{ color: '#e8384c' }}>?????????</span>?????? ?????? ??? ??????
          ??????????
        </p2>
      </MainContent>

      <ResultContent>
        <AmeResult>
          <p2>
            <b>?????????</b>?????? <b style={{ color: 'var(--main)' }}>????????????</b>
            ????????? ?????? ?????????????????????!
          </p2>
          <p>
            ?????? ????????? ?????? ?????????&nbsp;
            <b style={{ color: 'var(--main)' }}>WATCHA</b>
            &gt;Tving&gt;NETFLIX&gt;Disney+ ??????!
          </p>
          <img alt="" src={process.env.PUBLIC_URL + `/result/result.png`} />
          <br />
        </AmeResult>

        <DramaResult>
          <p2 style={{ color: '#ffffff' }}>
            <b>?????????</b>??????{' '}
            <b style={{ color: 'var(--main)' }}>???{/* {getParams[0].genre} */}????????????</b>???
            ?????????????????????!
          </p2>
          <p>
            ???????????? ?????? ?????? ?????? ?????? ?????????&nbsp;
            <b style={{ color: 'var(--main)' }}>Tving</b>
            &gt;WATCHA&gt;NETFLIX&gt;Disney+ ??????!
          </p>
          <img alt="" src={process.env.PUBLIC_URL + `/result/result2.png`} />
          <br />
        </DramaResult>

        <MovieResult>
          <p2 style={{ color: '#ffffff' }}>
            <b>?????????</b>?????? <b style={{ color: 'var(--main)' }}>????????????</b>???
            ??? ?????????????????????!
          </p2>
          <p>
            ?????? ????????? <b style={{ color: 'var(--main)' }}>Tving</b>
            &gt;WATCHA&gt;Disney+&gt;NETFLIX ????????? ?????????!
          </p>
          <img alt="" src={process.env.PUBLIC_URL + `/result/result3.png`} />
          <br />
        </MovieResult>

        <EndResult>
          <p2>
            ????????????&nbsp;
            <b style={{ color: 'var(--main)' }}>
              ????????????, ??????, ??????????????????, ??????
            </b>
            ??? ??? <b style={{ color: 'var(--main)' }}>14,809?????????&nbsp;</b>
            ???????????????! <br />
            ???????????? 10??? 6?????? 49???!
            <br /> 2022??? ??????????????? ????????????&nbsp;
            <b style={{ color: 'var(--main)' }}>2,260,840???</b>??? ??? ??? ??????
            ???????????????! <br />
            ???????????? <b style={{ color: 'var(--main)' }}>4,936???</b>??? ?????? ???
            ?????? ??????????????????!
          </p2>
        </EndResult>
      </ResultContent>

      <FavContent>
        <p2>
          <span style={{ color: 'var(--main)' }}>?????????</span>?????? ?????? ???&nbsp;
          <span style={{ color: 'var(--main)' }}>?????? ??????????????? ?????????</span>
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
            <span style={{ color: 'var(--main)' }}>?????????</span>??????
            ??????&nbsp;???&nbsp;??????&nbsp;
            <span style={{ color: 'var(--main)' }}>
              OTT
              <span style={{ color: 'var(--white)' }}>???</span>&nbsp;
              <span style={{ color: 'var(--main)' }}>{getParams[0].ott}</span>
              <span style={{ color: 'var(--white)' }}>?????????.</span>
            </span>
          </p2>
        </ButtonWrap>
      </FavContent>

      <Link to="mypage" style={{ textDecoration: 'none' }}>
        <BackButton>
          <b>?????? ??????</b>
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

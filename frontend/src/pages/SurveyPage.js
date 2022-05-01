import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';
import { useHistory, useLocation } from 'react-router-dom';
import useMotion from '../utils/useMotion';
import axios from 'axios';

// components
import Grid from '../components/Grid';
import Background from '../components/Background';
import Header from '../components/Header';
// import Loading from '../components/Loading';
import { GridLayout } from '../components/Layout';
import { SurveyDummy, MovieDummy } from '../data/dummy';
import {
  head_2,
  sub_1,
  sub_2,
  sub_1_mobile,
  sub_2_mobile,
} from '../shared/textStyle';

const questions = [...new Array(5)];
const cards = [...new Array(8)];

const SurveyPage = (props) => {
  const history = { useHistory };
  const location = useLocation();

  // 설문 대답 저장
  const [answerList, setAnswerList] = useState([]);
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://elice-kdt-3rd-team-18.koreacentral.cloudapp.azure.com/api/surveyopen`,
      )
      .then((res) => {
        setGetData(res.data.contents);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  const handleCheck = (e, index) => {
    setAnswerList((answerList) => [...answerList, e.target.value]);
  };

  const [bSurveyCheckedArray, setSurveyCheckedArray] = useState(
    Array.from({ length: questions.length }, () => 0),
  );

  const activeSurveyHandler = (index, value) => {
    if (bSurveyCheckedArray[index] === value) {
      return true;
    } else {
      return false;
    }
  };

  const setSurveyChecked = (index, value) => {
    setSurveyCheckedArray((cur) => {
      const newbSurveyCheckedArray = [...cur];
      newbSurveyCheckedArray[index] = value;
      // console.log(newbSurveyCheckedArray);
      return newbSurveyCheckedArray;
    });
  };

  // 영화 카드 선택
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

  const setChecked = (id) => {
    let newArray = [...bCheckedArray];

    let count = newArray.filter((element) => true === element).length;
    if (newArray[id] === true) {
      newArray[id] = false;
    } else if (newArray[id] === false && count < 3) {
      newArray[id] = true;
    }
    setCheckedArray(newArray);
  };

  // 초기값 설정
  // const initialState = {
  //   answerList: [1, 3, 4, 3, 1],
  //   bCheckedArray: [true, false, true, false, true, false, true, false],
  // };

  const surveyResult = [bCheckedArray, bSurveyCheckedArray];

  const handleClick = (data) => {
    let formData = new FormData();
    // formData.append('survey', surveyResult);
    formData.append('survey', bSurveyCheckedArray);
    formData.append('contents', bCheckedArray);
    // console.log(surveyResult);
    let url = `http://elice-kdt-3rd-team-18.koreacentral.cloudapp.azure.com/api/surveyresult`;
    axios
      .post(url, formData, {
        // timeout: 10000,
        headers: {
          'Content-Type': `multipart/form-data`,
        },
      })
      .then((res) => {
        // 받을 때
        // console.log('res : ', res.data.contents);
        // props.history.push({
        //   pathname: '/result',
        //   state: { contents: res.data.contents },
        // });
        localStorage.setItem('userSurvey', JSON.stringify(res.data));
        props.history.push('/result');
      })
      .catch((err) => {
        // console.log('failed', err);
      });
  };

  const parent = { width: '42rem', height: '37rem', margin: '3rem 6rem' };
  const child = { width: '40rem', height: '35rem' };

  return (
    <Template>
      <Background />
      <Header />
      <GridLayout>
        <GridWrapper>
          <TitleWrapper>
            <Title dark {...useMotion('down', 1, 0.2)}>
              <span style={{ color: 'var(--main)' }}>주어진 상황</span>에 맞게
              <br />
              <span style={{ color: 'var(--main)' }}>선택</span>하고
              <br />
              <span style={{ color: 'var(--main)' }}>컨텐츠</span>에 대해서
              <br />
              알려주세요.
            </Title>
            <div>{getData.poster}</div>
          </TitleWrapper>
          <Grid>
            {/* <Scroll> */}
            <ScrollWrapper style={parent}>
              <HorizontalScroll
                style={{ overflow: 'scroll hidden' }}
                config={{ stiffness: 100, damping: 50 }}
                className={'scrollbar'}
              >
                {SurveyDummy[1].map((survey, index) => {
                  return (
                    <SurveyWrapper style={child}>
                      <QuestionTitle>{survey.question}</QuestionTitle>
                      <Answer
                        value="1"
                        active={activeSurveyHandler(index, 1)}
                        onClick={(e) => {
                          setSurveyChecked(index, 1);
                          handleCheck(e);
                        }}
                      >
                        {survey.answer1}
                      </Answer>
                      <Answer
                        value="2"
                        active={activeSurveyHandler(index, 2)}
                        onClick={(e) => {
                          setSurveyChecked(index, 2);
                          handleCheck(e);
                        }}
                      >
                        {survey.answer2}
                      </Answer>
                      <Answer
                        value="3"
                        active={activeSurveyHandler(index, 3)}
                        onClick={(e) => {
                          setSurveyChecked(index, 3);
                          handleCheck(e);
                        }}
                      >
                        {survey.answer3}
                      </Answer>
                      <Answer
                        value="4"
                        active={activeSurveyHandler(index, 4)}
                        onClick={(e) => {
                          setSurveyChecked(index, 4);
                          handleCheck(e);
                        }}
                      >
                        {survey.answer4}
                      </Answer>
                    </SurveyWrapper>
                  );
                })}
              </HorizontalScroll>
            </ScrollWrapper>
          </Grid>

          <TitleWrapper>
            <Title dark {...useMotion('up', 1, 0.2)}>
              그동안&nbsp;
              <span style={{ color: 'var(--main)' }}>
                즐겁게 본 <br />
                컨텐츠
              </span>
              를
              <span style={{ color: 'var(--main)' }}>
                <br />
                선택
              </span>
              해주세요.
              <br /> (최대 3개)
            </Title>
          </TitleWrapper>

          <Grid>
            <Wrapper>
              <CardGrid>
                {getData.map((movies, index) => {
                  return (
                    <CardWrapper
                      active={activeHandler(index)}
                      onClick={() => {
                        setChecked(index);
                      }}
                    >
                      <img
                        src={movies.poster}
                        width="180px"
                        height="260px"
                        alt="cardimg"
                      />
                    </CardWrapper>
                  );
                })}
              </CardGrid>
              <ButtonWrapper>
                <Button type="button" onClick={handleClick}>
                  결과
                </Button>
              </ButtonWrapper>
            </Wrapper>
          </Grid>
        </GridWrapper>
      </GridLayout>
    </Template>
  );
};

const Template = styled.main`
  width: 100%;
  min-height: calc(200vh - 100px);
`;

const GridWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 35rem 61rem;
  grid-template-rows: 35rem 35rem 1rem;
  grid-gap: 18rem 3rem;
  ${({ theme }) => theme.device.tablet} {
    grid-gap: 3rem 3rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 9.6rem;

  ${({ theme }) => theme.device.tablet} {
    margin-left: 6rem;
  }
  ${({ theme }) => theme.device.mobile} {
    margin-left: 3rem;
  }
`;

const Title = styled.h2`
  ${head_2}
  color: var(--white);

  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const ScrollWrapper = styled.div`
  /* max-width: 40rem; */
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;

  .scrollbar {
    &::-webkit-scrollbar {
      height: 8px;
      border-radius: 6px;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 2px;
    }
    width: 80%;
  }

  ${({ theme }) => theme.device.mobile} {
    max-width: 35rem;
  }
`;

const SurveyWrapper = styled.section`
  flex-direction: column;
  margin-left: 0.5rem;
  margin-right: 2rem;
  justify-content: center;
  ${({ theme }) => theme.device.mobile} {
    ${sub_1_mobile}/* width: 37rem; */
  }
`;

const QuestionTitle = styled.p`
  ${sub_1}
  color: var(--white);
  /* width: 39rem; */

  ${({ theme }) => theme.device.mobile} {
    ${sub_1_mobile}
    width: 34rem;
  }
`;

const Answer = styled.button`
  ${sub_2}
  width: 39rem;
  height: 3.2rem;
  margin-top: 1rem;
  cursor: pointer;
  background: linear-gradient(80deg, var(--main) 0.73%, var(--darkred) 100%);
  color: var(--white);
  border-radius: 13px;
  border: none;

  ${({ theme }) => theme.device.mobile} {
    ${sub_2_mobile}
    width: 17rem;
    height: 4rem;
  }
  outline: ${(props) => (props.active ? '3px solid var(--white)' : 'none')};
  /* :hover {
    outline: 3px solid var(--main);
  } */
`;

// const Scroll = styled.div`
//   overflow-y: scroll;
//   &::-webkit-scrollbar {
//     width: 6px;
//     border-radius: 6px;
//     /* background: rgba(255, 255, 255, 0.4); */
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: rgba(0, 0, 0, 0.3);
//     border-radius: 2px;
//   }
//   height: 90%;
//   margin: 0 auto;
// `;

const Wrapper = styled.div``;

const CardGrid = styled.div`
  display: grid !important;
  display: grid;
  grid-template-rows: 260px 260px;
  grid-template-columns: 180px 180px 180px 180px;
  /* grid-gap: 18rem 3rem; */
  grid-gap: 0.8rem;
  cursor: pointer;

  div :hover {
    outline: 3px solid var(--main);
  }
`;

const CardWrapper = styled.div`
  outline: ${(props) => (props.active ? '4px solid var(--main)' : 'none')};
  outline-offset: -2px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  text-align: center;
  width: 13rem;
  height: 3rem;
  margin-top: 5rem;
  margin-right: 13rem;
  background: transparent;
  border-radius: 15px;
  border: 2px solid var(--main);
  color: var(--main);
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    color: var(--white);
    background: var(--main);
    cursor: pointer;
  }
`;

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

// const Arrow = styled.div`
//   /* padding-top: 5rem; */
//   display: flex;
//   flex-direction: row;
//   justify-content: center !important;
//   cursor: pointer;
//   span {
//     width: 40px;
//     height: 40px;
//     border-left: 2px solid rgba(242, 38, 62, 0.41);
//     border-bottom: 2px solid rgba(242, 38, 62, 0.41);
//     transform: rotate(-45deg);
//     animation: ${scroll} 2.8s infinite;
//   }
// `;

export default SurveyPage;

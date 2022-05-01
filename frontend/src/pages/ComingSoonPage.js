import React, {useState} from 'react'
import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router";

// components
import useMotion from '../utils/useMotion';
import MovieCard from '../components/MovieCard';
import { head_4 } from '../shared/textStyle';
import MovieContentdData from '../data/MovieContentData';

const ComingSoonPage = (props) => {

  let { id } = useParams();

  const previews = ['1', '2', '3', '4']
  const previewsList = previews.map((numbers) => numbers);

  let [movieContent, setmovieContent] = useState(MovieContentdData);

  return (
    <SectionWrapper>

      <MainContent>
        <p dark {...useMotion('down', 1, 0.2)}>이번달 <b>개봉작</b> 궁금하시죠? <br/>
        <p2 dark {...useMotion('down', 1, 0.2)}> <span style={{color:'#e8384c'}}>슬콕</span>이 알려드려요</p2></p>
        {/* <p2 dark {...useMotion('up', 2, 0.8)}> <p2 style={{color: '#e8384c'}}>슬톡</p2>이 추천해요.</p2> */}
      </MainContent>

          <MovieCard/>

      <Link to="/survey" style={{textDecoration: 'none'}}>
        <StartButton><span>이달의 OTT 추천받기</span></StartButton>
      </Link>

    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  margin: 0;

  width: 100%;
  top: 120%;

  text-align: center;
  position: absolute;
`;

const MainContent = styled.div`
  ${head_4}
`;

const StartButton = styled.button`
  text-align: center;
  cursor: pointer;

  width: 13rem;
  height: 3rem;
  margin-top: 20px;

  background: transparent;
  border-radius: 15px;
  border: 2px solid var(--main);

  color: var(--main);
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  span {
    font-weight: bold;
  }

  &:hover {
    color: #ffffff;
    background: var(--main);
    cursor: pointer;
  };
`;

export default ComingSoonPage

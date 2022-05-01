import React, {useState} from 'react';
import styled from 'styled-components';
import MovieCardData from '../data/MovieCardData';
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
// import MovieCardData from '../data/MovieCardData';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";


const MovieCard = (props) => {

  let [card, setCard] = useState(MovieCardData);
  const history = useHistory();

  function MovieCards(props) {
    return (
      <Card onClick={() => {
        history.push({
          pathname: `/preview/${props.card.id}`
        });
      }}>
        <img alt="" src={process.env.PUBLIC_URL + `/Image/image${props.card.id}.jpg`} width="300px" />
        <MovieIntro>
          <p2>{props.card.ott}</p2>
        </MovieIntro>
        <MovieContent>
          {/* <p2>{props.card.title} <sapn>{props.card.playdate}</sapn> </p2>
          <p>{props.card.content} ... <b>미리보기</b></p> */}
          <sapn>{props.card.playdate}</sapn>
        </MovieContent>
      </Card>
    )
  };

  return (
    <MainSection>

      {
        card.map((carddata, i)=>{
          return <MovieCards card={carddata}/>
        })
      }



      {/* {
        card.map((carddata, i)=>{
          return <Link to = {{pathname: `/preview/${props.card.id}`}}>
                    <MovieCards card={carddata}/>
                  </Link>
        })
      } */}

      {/* <MovieCards card={card[0]} />
      <MovieCards card={card[1]} />
      <MovieCards card={card[2]} />
      <MovieCards card={card[3]} /> */}


    </MainSection>
  )
}



const MainSection = styled.div`

  margin-top: 300px;
  margin: auto;

  width: 85%;
  height: 500px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;


// const Button = styled.button`

//   margin: auto;
//   width: 300px;
//   height: 420px;
//   cursor: pointer;

//   text-align: left;

//   background: linear-gradient(
//     to bottom,
//     rgba(20, 20, 20, 0) 10%,
//     rgba(20, 20, 20, 0.20) 20%,
//     rgba(20, 20, 20, 0.8) 80%,
//     rgba(20, 20, 20, 0.9) 90%,
//     rgba(20, 20, 20, 1) 100%
//   ), url(https://source.unsplash.com/random);
//   background-size: contain;

//   &:hover {
//     background: linear-gradient(
//       to bottom,
//       rgba(216, 14, 27, 0.1) 10%,
//       rgba(216, 14, 27, 0.3) 30%,
//       rgba(242, 39, 62, 0.5) 50%,
//       rgba(242, 39, 62, 0.7) 70%,
//       rgba(242, 39, 62, 1) 100%
//     );
//     background-size: contain;
//     border: 3px solid;
//     border-color: var(--main);
//   };

// `;

const Card = styled.div`

  margin: 0 auto;
  width: 300px;
  height: 420px;
  cursor: pointer;

  text-align: left;
  line-height: 23px;

  display: flex;
  margin-bottom: 30px;

  background: var(--main);
  overflow: hidden;

  img {
    object-fit:cover;
    background-size: contain;
    transform: scale(1.0);
    transition: all 0.25s linear;
  }

  img:hover {
    opacity: 0.2;
    transform: scale(1.25);
  }

  &:hover {
    background: var(--main);
    border: 3px solid var(--main);
  };

  position: relative;

`;



const MovieIntro = styled.div`

  margin-left: 1rem;
  margin-top: 10px;
  color: var(--main);
  font-weight: 500;

  position: absolute;


`;

const MovieContent = styled.div`

  margin-top: 230px;
  margin-left: 1rem;

  font-size: 0.9rem;
  width: 270px;
  height: 180px;

  color: #ffffff;

  position: absolute;

  // p2, p {
  //   position: absolute;
  //   opacity: 0;

  // }

  // p2 {
  //   font-size: 20px;
  //   margin-bottom: 20px;
  // }

  sapn {
    font-family: none;
    font-size: 20px;
    opacity: 0;

    :& hover {
      width: 100%; height:100%; border-radius: 50%;
      text-align: center;
      color: black;
      position:absolute; left: 0; top:0;
      padding: 60px 20px;
      box-sizing: border-box;
      transition: all 1s ease-in-out;
      opacity: 100;
      transform: scale(0);
    }
  }


  `;

// const MovieContent = styled.div`

// margin-top: 180px;
// margin-left: 1rem;
// top: 37%;
// font-size: 0.9rem;
// width: 270px;
// height: 180px;
// color: #ffffff;
// position: absolute;


// p2 {
//   font-size: 20px;
// }

// sapn {
//   font-family: none;
//   font-size: 12px;
// }

// `;


export default withRouter (MovieCard);

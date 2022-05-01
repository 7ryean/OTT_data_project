// import React from 'react';
// import styled from 'styled-components';
// import HorizontalScroll from 'react-scroll-horizontal';

// // components
// import Header from '../components/Header';
// import Grid from '../components/Grid';
// import Template from '../components/Template';
// import { Layout } from '../components/Layout';

// import { head_2 } from '../shared/textStyle';
// import Background from '../components/Background';

// const cards = [...new Array(8)].map((x, i) => ({
//   name: `card ${i}`,
//   img: 'https://source.unsplash.com/random',
// }));

// const PickPosterPage = () => {
//   const child = { width: '150px', height: '280px' };
//   const parent = { width: '800px', height: '689px' };
//   return (
//     <Layout>
//       <Grid width="35rem" is_flex="space-between">
//         <Grid margin="0 0 5rem 0">
//           <Title>주어진 상황에 맞게 선택하고 컨텐츠에 대해서 알려주세요.</Title>
//         </Grid>
//       </Grid>

//       <Grid width="38rem">
//         <Wrapper style={parent}>
//           {/* <HorizontalScroll
//               // pageLock={true}
//               // reverseScroll={true}
//               style={{ overflow: 'scroll hidden' }}
//               config={{ stiffness: 100, damping: 50 }}
//               className={'scrollbar'}
//               // animValues={int}
//             > */}
//           <CardGrid>
//             {cards.map((card) => (
//               <div>
//                 <img src={card.img} style={child} alt="cardimg" />
//                 {/* <p>{card.name}</p> */}
//               </div>
//             ))}
//           </CardGrid>
//           {/* </HorizontalScroll> */}
//         </Wrapper>
//       </Grid>
//     </Layout>
//   );
// };

// const Title = styled.h2`
//   ${head_2}
//   color: var(--main);
//   ${({ theme }) => theme.device.mobile} {
//     justify-content: center;
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-bottom: 1rem;
//   /* .scrollbar {
//     &::-webkit-scrollbar {
//       height: 8px;
//       border-radius: 6px;
//       background: rgba(255, 255, 255, 0.4);
//     }
//     &::-webkit-scrollbar-thumb {
//       background-color: rgba(255, 255, 255, 0.5);
//       border-radius: 2px;
//     }
//     width: 80%;
//   } */
//   ${({ theme }) => theme.device.mobile} {
//     max-width: 35rem;
//   }
// `;

// const CardGrid = styled.div`
//   display: grid !important;
//   grid-template-rows: auto auto;
//   grid-auto-flow: column;
//   & div {
//     margin-right: 20px;
//   }
// `;

// export default PickPosterPage;

import React from 'react';
import styled from 'styled-components';
import Background from './Background';
import Template from './Template';

const Loading = (props) => {
  return (
    <Template>
      <Background />
      <Container>
        {props.page === 'subscribe' ? (
          <Text>결제 후 구독 예약 중입니다.</Text>
        ) : (
          <Text>
            OOO님의 OTT별
            <br />
            시청기록을 수집 중입니다.
          </Text>
        )}
      </Container>
    </Template>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.h1`
  text-align: center;
  color: var(--main);
  font-size: 3rem;
  margin: 0;
`;

export default Loading;

import React from "react";
import styled from "styled-components";

const OutwearHeader = ({ title, background }) => (
  <Container background={background}>
    <Title>{title}</Title>
    <Subtitle>outwear</Subtitle>
  </Container>
);

const Container = styled.View`
  height: 120px;
  width: 100%;
  background: ${props => props.background || "#93D6DC"};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 68px;
  color: #fff;
  font-weight: normal;
  text-transform: uppercase;
  font-family: sourceSansProExtraLight;
  margin-bottom: -18px;
`;

const Subtitle = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight: normal;
  text-transform: uppercase;
  font-family: sourceSansProExtraLight;
`;

export default OutwearHeader;

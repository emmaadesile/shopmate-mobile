import React from "react";
import Lottie from "lottie-react-native";
import styled from "styled-components";

const Loading = () => (
  <Container>
    <Lottie source={require("../../assets/loading.json")} autoPlay loop />
  </Container>
);

const Container = styled.View`
  width: 100%;
  height: 500px;
`;

export default Loading;

import React from "react";
import styled from "styled-components";

class TopBanner extends React.Component {
  state = {
    fontLoaded: false
  };

  render() {
    return (
      <Container>
        <Text color="#F3B453">Last Chance</Text>
        <Text textTranform="none"> Holiday Shipping ends soon.</Text>
        <Text color="#F3B453" fontWeight="bold">
          {" "}
          Shop Now
        </Text>
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #454545;
`;

const Text = styled.Text`
  color: ${props => props.color || "#fff"};
  text-transform: ${props => props.textTranform || "uppercase"};
  font-size: 14px;
  font-weight: ${props => props.fontWeight || "normal"};
  font-family: sourceSansProRegular;
`;

export default TopBanner;

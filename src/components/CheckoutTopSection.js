import React from "react";
import styled from "styled-components";
import Rhombus from "../components/Rhombus";
import color from "../globals/colors";

const CheckoutTopSection = ({ activeScreen }) => {
  return (
    <Container>
      <TopSection>
        <TopText color={activeScreen === "address" && color.black60}>
          address
        </TopText>
        <TopText color={activeScreen === "payment" && color.black60}>
          payment
        </TopText>
        <TopText color={activeScreen === "complete" && color.black60}>
          complete
        </TopText>
      </TopSection>
      <Wrapper>
        <Rhombus fillColor={activeScreen === "address" && color.yellow} />
        <Rhombus fillColor={activeScreen === "payment" && color.yellow} />
        <Rhombus fillColor={activeScreen === "complete" && color.yellow} />
      </Wrapper>
      <Divider />
    </Container>
  );
};

export default CheckoutTopSection;

const Container = styled.View`
  height: 100px;
  width: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 15px;
`;

const TopText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-family: sourceSansProBold;
  letter-spacing: 5px;
  color: ${props => props.color || "#c7c7c7"};
`;

const Divider = styled.View`
  height: 1px;
  background: #bfbfbf;
  position: absolute;
  bottom: 32px;
  width: 100%;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
`;

import React from "react";
import styled from "styled-components";
import Rhombus from "../components/Rhombus";

const CheckoutTopSection = ({ activeScreen }) => {
  return (
    <Container>
      <TopSection>
        <TopText color={activeScreen === "address" && "#454545"}>
          address
        </TopText>
        <TopText color={activeScreen === "payment" && "#454545"}>
          payment
        </TopText>
        <TopText color={activeScreen === "review" && "#454545"}>review</TopText>
      </TopSection>
      <Wrapper>
        <Rhombus fillColor={activeScreen === "address" && "#EFB961"} />
        <Rhombus fillColor={activeScreen === "payment" && "#EFB961"} />
        <Rhombus fillColor={activeScreen === "review" && "#EFB961"} />
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

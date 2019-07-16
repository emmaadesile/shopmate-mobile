import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Body = styled.View`
  justify-content: center;
  align-items: center;
`;

const BodyText = styled.Text`
  padding-top: 30px;
  font-size: 17px;
  font-family: sourceSansProBold;
  color: #454545;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 5px;
`;

const SubText = styled.Text`
  font-family: sourceSansProLight;
  font-size: 34px;
  text-transform: uppercase;
`;

const ImageWrapper = styled.View`
  height: 250px;
  width: 100%;
  padding: 0 20px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

const ShopButton = styled.View`
  height: 50px;
  width: 140px;
  background: #f3b453;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: sourceSansProBold;
  text-transform: uppercase;
`;

export {
  Container,
  BodyText,
  SubText,
  Body,
  Image,
  ShopButton,
  ButtonText,
  ImageWrapper
};

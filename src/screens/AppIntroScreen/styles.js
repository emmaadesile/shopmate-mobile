import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-top: 80px;
`;

const Logo = styled.Image`
  width: 100px;
  height: 50px;
`;

const PageText = styled.Text`
  width: 350px;
  font-size: ${props => (props.fontSize ? props.fontSize : "20px")};
  font-weight: 400;
  margin-top: 20px;
  text-align: center;
  color: #454545;
  line-height: 24px;
`;

const Button = styled.View`
  height: 55px;
  width: 90%;
  margin-top: 0;
  margin-bottom: 15;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30;
  background: ${props => (props.background ? props.background : "#efb961")};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 600;
`;

const ImageContainer = styled.View`
  height: 400px;
  width: 100%;
  align-self: center;
  margin-top: 40px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const BodyText = styled.View`
  position: absolute;
  bottom: 95px;
  align-items: center;
`;

export {
  Container,
  Button,
  ButtonText,
  Logo,
  Header,
  PageText,
  ImageContainer,
  Image,
  BodyText
};

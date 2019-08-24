import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: ${props => props.height || "100%"};
  background: ${props => props.background || "rgba(0, 0, 0, 0.6)"};
  align-items: center;
  padding-top: 40px;
`;

const Body = styled.View`
  position: absolute;
  top: 140px;
  height: 600px;
  justify-content: center;
`;

const Title = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProLight;
  font-size: 36px;
  color: ${props => props.color || "#fff"};
`;

const Subtitle = styled.Text`
  text-transform: uppercase;
  font-size: 36px;
  color: ${props => props.color || "#fff"};
  width: 300px;
  font-family: Bodoni;
  text-align: center;
`;

const Wrapper = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #fff;
`;
const Button = styled.View`
  width: 160px;
  height: 46px;
  background: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProBold;
  color: #454545;
  font-size: 18px;
  letter-spacing: 2px;
`;

const Date = styled.Text`
  color: ${props => props.color || "#fff"};
  font-size: 17px;
  font-family: sourceSansProRegular;
  text-transform: uppercase;
`;

export { Container, Button, Title, Subtitle, ButtonText, Wrapper, Body, Date };

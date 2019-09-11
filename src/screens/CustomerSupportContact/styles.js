import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Item = styled.View`
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom-color: #bfbfbf;
  border-bottom-width: 1px;
  border-style: solid;
  flex-direction: row;
`;

const OuterCircle = styled.View`
  width: 220px;
  height: 220px;
  border-radius: 110px;
  background: #ededed;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

const InnerCircle = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background: #f3b453;
  position: absolute;
`;

const Label = styled.Text`
  color: #454545;
  font-size: 17px;
  width: 30%;
`;

const Text = styled.Text`
  color: ${props => props.color || "#999"};
  font-family: sourceSansProRegular;
  font-size: 17px;
`;

const Button = styled.View`
  background: #454545;
  padding: 10px;
  width: 200px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-size: 17px;
  font-family: sourceSansProBold;
`;

const PhoneNumber = styled.Text`
  font-family: sourceSansProRegular;
  color: #fff;
  font-size: 22px;
  position: absolute;
  top: 115px;
`;

export {
  Container,
  Item,
  OuterCircle,
  InnerCircle,
  Label,
  Text,
  Button,
  ButtonText,
  PhoneNumber
};

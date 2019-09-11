import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const Column = styled.View`
  margin-bottom: 20px;
`;

const Label = styled.Text`
  font-family: sourceSansProRegular;
  color: #454545;
  font-size: 17px;
`;

const Input = styled.TextInput`
  border-bottom-color: #c4c4c4;
  border-style: solid;
  border-bottom-width: 1px;
  height: 40px;
`;

const Button = styled.View`
  background: #efb961;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 10px;
  height: 60px;
  align-self: center;
`;

const ButtonText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-family: sourceSansProBold;
  font-size: 17px;
`;

export { Container, Label, Input, Column, Button, ButtonText };

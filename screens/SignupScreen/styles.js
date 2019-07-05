import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Logo = styled.Image`
  width: 114px;
  height: 54px;
`;

const Form = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const BodyText = styled.Text`
  height: 62px;
  font-size: 24px;
  font-weight: normal;
  color: #efb961;
  width: 300px;
  text-align: center;
  margin-top: 40px;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 30px;
  border-color: #d8d8d8;
  border-radius: 30px;
  border-width: 1px;
  font-size: 17px;
`;

const SignupButton = styled.View`
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #efb961;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SubText = styled.Text`
  font-size: 17px;
  color: ${props => (props.color ? props.color : "#c4c4c4")};
  margin-top: 25px;
`;

export {
  Container,
  Logo,
  BodyText,
  Form,
  Input,
  SignupButton,
  ButtonText,
  SubText
};

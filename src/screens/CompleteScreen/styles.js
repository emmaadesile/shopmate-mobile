import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

const TopSection = styled.View`
  padding: 0 15px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
`;

const Icon = styled.View`
  width: 40px;
  height: 40px;
`;

const Title = styled.Text`
  font-size: 25px;
  font-family: sourceSansProLight;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Text = styled.Text`
  font-family: sourceSansProLight;
  font-size: 17px;
  margin-bottom: 20px;
  text-align: center;
`;

const OrderId = styled.Text`
  font-family: sourceSansProRegular;
  color: #454545;
  font-size: 24px;
`;

const BottomSection = styled.View`
  background: #f2f2f2;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
`;

const Button = styled.View`
  background: #454545;
  width: 150px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 8px 0;
`;

const ButtonText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-family: sourceSansProBold;
  font-size: 15px;
  letter-spacing: 2px;
`;

const Wrapper = styled.View`
  width: 100%;
  background: #f2f2f2;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export {
  Container,
  TopSection,
  BottomSection,
  OrderId,
  Icon,
  Title,
  Text,
  Button,
  ButtonText,
  Wrapper
};

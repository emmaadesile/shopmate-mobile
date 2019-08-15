import styled from "styled-components";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const CardForm = styled.View`
  border-radius: 5px;
`;

const Cards = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Card = styled.View`
  width: 48%;
  height: 65px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.borderColor || "#BFBFBF"};
  border-radius: 4px;
`;

const Label = styled.Text`
  font-family: sourceSansProRegular;
  font-size: 18px;
  color: #454545;
  padding: 20px 15px;
`;

const LabelWrapper = styled.View`
  width: 120px;
  background: #f2f2f2;
`;

const Title = styled.Text`
  text-transform: uppercase;
  color: #454545;
  font-family: sourceSansProRegular;
  font-size: 20px;
`;

const Subtitle = styled.Text`
  color: #999999;
  font-family: sourceSansProRegular;
  font-size: 18px;
`;

const Input = styled.TextInput`
  height: 50px;
  padding-left: 10px;
  font-size: 20px;
  width: 100%;
  font-family: sourceSansProRegular;
`;

const Wrapper = styled.View`
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin: 20px 0 30px;
`;

const Image = styled.Image`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const Row = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${props => props.borderColor || "#cccccc"};
  align-items: center;
`;

const ShippingAddress = styled.View`
  background-color: #f2f2f2;
  padding: 15px;
  margin-bottom: 10px;
`;

const PaynowButton = styled.View`
  height: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  background: #efb961;
  margin-top: 15px;
`;

const ButtonText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-size: 17px;
  font-family: sourceSansProBold;
  letter-spacing: 3px;
`;

const Address = styled.Text`
  font-family: sourceSansProRegular;
  color: ${props => props.color || "#999999"};
  font-size: ${props => props.fontSize || "17px"};
`;

export {
  Container,
  Cards,
  Card,
  Label,
  CardForm,
  Title,
  Subtitle,
  Input,
  Wrapper,
  Image,
  Row,
  ShippingAddress,
  PaynowButton,
  ButtonText,
  Address,
  LabelWrapper
};

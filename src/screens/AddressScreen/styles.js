import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const AddressForm = styled.View`
  width: 100%;
  height: 850px;
  padding: 0 20px;
`;

const Label = styled.Text`
  font-size: 18px;
  font-family: sourceSansProRegular;
  color: #878686;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-bottom-width: 1px;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-bottom-color: ${props => props.borderColor || "#d8d8d8"};
  border-style: solid;
  height: 40px;
  font-size: 16px;
`;

const SaveButton = styled.View`
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || "#C7C7C7"};
`;

const DeliverButton = styled.View`
  width: 100%;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 18px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #bfbfbf;
  background: #efefef;
`;

const DeliverButtonText = styled.Text`
  font-family: sourceSansProRegular;
  color: #737373;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px;
`;

const ButtonText = styled.Text`
  font-family: sourceSansProBold;
  letter-spacing: 2px;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
`;

const Column = styled.View`
  width: ${props => props.width || "48%"};
  margin-top: 20px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  text-transform: uppercase;
  font-size: 20px;
  font-family: sourceSansProRegular;
  color: #454545;
  margin-bottom: 5px;
  /* background: #efefef; */
  padding: 10px 15px;
`;

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const Text = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProRegular;
  color: #454545;
  font-size: 17px;
`;

const Address = styled.View``;

const AddressText = styled.Text`
  font-family: sourceSansProRegular;
  color: #454545;
  font-size: 17px;
`;

export {
  Container,
  AddressForm,
  Label,
  Input,
  SaveButton,
  ButtonText,
  Row,
  Column,
  DeliverButton,
  DeliverButtonText,
  Title,
  Text,
  Wrapper,
  Address,
  AddressText
};

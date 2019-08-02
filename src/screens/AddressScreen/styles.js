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

const ButtonText = styled.Text`
  font-family: sourceSansProBold;
  letter-spacing: 5px;
  font-size: 15px;
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

export {
  Container,
  AddressForm,
  Label,
  Input,
  SaveButton,
  ButtonText,
  Row,
  Column
};

import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Map = styled.View`
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  height: 280px;
`;

const LocationImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 12px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.borderColor};
  border-style: solid;
  background: ${props => props.background || "#fff"};
`;

const Column = styled.View`
  flex-direction: column;
`;

const Title = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProBold;
  font-size: 16px;
  color: #454545;
  letter-spacing: 3px;
`;

const StoreName = styled.Text`
  font-size: 20px;
  font-family: sourceSansProRegular;
  color: ${props => props.color || "#454545"};
`;

const StoreAddress = styled.Text`
  font-size: 16px;
  font-family: sourceSansProRegular;
  color: ${props => props.color || "#999"};
`;

const Wrapper = styled.View`
  width: 100%;
`;

const StoreSection = styled.View``;

const Distance = styled.Text`
  font-family: sourceSansProRegular;
  font-size: 23px;
  color: ${props => props.color || "#454545"};
`;

const Border = styled.View`
  height: 1px;
  background: #bfbfbf;
`;

export {
  Container,
  Map,
  Image,
  Row,
  Title,
  StoreName,
  StoreAddress,
  StoreSection,
  Wrapper,
  Column,
  Distance,
  Border,
  LocationImage
};

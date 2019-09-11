import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  font-family: sourceSansProBold;
  color: #454545;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 17px;
  margin-bottom: 30px;
`;

const Item = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  border-style: solid;
  width: 100%;
  justify-content: center;
  padding-top: 25px;
  padding-left: 20px;
  padding-bottom: 25px;
`;

const Subtitle = styled.Text`
  font-family: sourceSansProRegular;
  color: #454545;
  font-size: 17px;
  text-transform: capitalize;
`;

const Text = styled.Text`
  color: #999999;
  font-size: 15px;
`;

const IconView = styled.View`
  position: absolute;
  right: 20;
`;

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-color: #f2f2f2;
  border-bottom-width: 1px;
`;

export { Container, Title, Item, Subtitle, Text, IconView, Wrapper };

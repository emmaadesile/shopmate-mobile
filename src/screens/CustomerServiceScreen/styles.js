import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 30px 15px;
`;

const Item = styled.View`
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #bfbfbf;
  padding: 25px 0;
  justify-content: center;
`;

const Title = styled.Text`
  color: #454545;
  font-family: sourceSansProRegular;
  font-size: 17px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: #999;
  font-family: sourceSansProRegular;
`;

export { Container, Item, Title, Subtitle };

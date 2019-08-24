import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 95%;
  flex-direction: row;
`;

const Text = styled.Text`
  font-size: 17px;
`;

const Section = styled.View`
  width: 33.3333%;
  background: ${props => props.background};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-family: sourceSansProLight;
  font-size: 29px;
  text-transform: uppercase;
  color: ${props => props.color || "#fff"};
`;

const Wrapper = styled.View`
  border-top-width: 1px;
  border-style: solid;
  border-color: #fff;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #fff;
`;

export { Container, Text, Section, Title, Wrapper };

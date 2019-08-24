import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: ${props => props.background || "rgba(0, 0, 0, 0.6)"};
  align-items: center;
  padding-top: 30px;
`;

const Title = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProLight;
  font-size: 36px;
  color: ${props => props.color || "#fff"};
`;

const Subtitle = styled.Text`
  text-transform: uppercase;
  font-size: 36px;
  color: ${props => props.color || "#fff"};
  width: 300px;
  font-family: Bodoni;
  text-align: center;
  margin-top: 100px;
`;

const Body = styled.View`
  position: absolute;
  top: 100px;
  height: 580px;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #fff;
`;

export { Container, Title, Subtitle, Wrapper, Body };

import styled from "styled-components";

const Container = styled.View`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  align-content: center;
`;

const Title = styled.Text`
  text-transform: uppercase;
  color: ${props => props.color || "#fff"};
  font-size: 36px;
  font-family: sourceSansProLight;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #fff;
`;

const Wrapper = styled.View`
  margin: 40px 0;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Divider = styled.View`
  height: 1px;
  background: #fff;
  width: 120px;
`;

const VideoCard = styled.View`
  width: 100%;
  height: 180px;
  background: grey;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const PlayButton = styled.View`
  position: absolute;
  margin-left: -25;
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 18;
  border-right-width: 18;
  border-bottom-width: 36;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #fff;
  transform: rotate(90deg);
`;

export { Container, Wrapper, VideoCard, Divider, Title, PlayButton };

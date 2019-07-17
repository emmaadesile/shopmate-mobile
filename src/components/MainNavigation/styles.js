import styled from "styled-components";

const Container = styled.View`
  position: absolute;
  width: 90%;
  height: 100%;
  background: #383737;
  z-index: 10;
`;

const TopSection = styled.View`
  width: 100%;
  background: #323232;
  margin-top: 20px;
`;

const IconWrapper = styled.View`
  width: 50%;
  height: 160px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: #454444;
  border-bottom-width: 1px;
  border-bottom-color: #454444;
`;

const IconName = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: sourceSansProLight;
  margin-top: 8px;
`;

const LowerSection = styled.View`
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  width: 100%;
  font-family: sourceSansProLight;
  color: ${props => props.color || "#fff"};
  font-size: 18px;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #454444;
  border-style: solid;
  text-align: center;
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background: #454444;
`;

const SocialMedia = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const SocialMediaWrapper = styled.View`
  justify-content: space-around;
  width: 75%;
  align-items: center;
`;

const Icon = styled.Image`
  width: 85px;
  height: 85px;
`;

const SubText = styled.Text`
  font-family: sourceSansProBold;
  font-size: 15px;
  margin-top: 40px;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #7e7e7e;
`;

export {
  Container,
  TopSection,
  LowerSection,
  SocialMedia,
  IconWrapper,
  IconName,
  Text,
  SubText,
  SocialMediaWrapper,
  Icon,
  Line
};

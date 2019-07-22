import styled from "styled-components";
import { Platform } from "react-native";

const os = Platform.OS;

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-top: ${os === "android" ? 20 : 0};
`;

// Header ================
const Header = styled.View`
  width: 100%;
  height: 50px;
  padding-left: 15px;
  background: #f2f2f2;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Title = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProRegular;
  font-size: 18px;
  color: #454545;
`;

const CloseIcon = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;
//=============================

// Body ===========================
const Body = styled.View`
  padding: 40px 20px;
  align-items: center;
  justify-content: center;
`;

const Carousel = styled.View`
  height: 400px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Image = styled.Image`
  width: 300px;
  height: 300px;
`;

const Description = styled.Text`
  background: #f2f2f2;
  font-family: sourceSansProLight;
  color: #454545;
  padding: 10px;
  font-size: 19px;
`;
// =============================

// Bottom =============================

const BottomSection = styled.View`
  width: 100%;
  height: 85px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.15);
  background: #fff;
  position: absolute;
  bottom: 0;
`;

const CustomizeBtn = styled.View`
  background: #f8f8f8;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 115px;
`;

const CustomizeText = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProRegular;
  color: #454545;
  font-size: 17px;
  padding: 0 8px;
`;

const CartSection = styled.View`
  width: 70%;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  flex-direction: row;
`;

const CartButton = styled.View`
  width: 160px;
  height: 50px;
  background: #f3b453;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const CartText = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProBold;
  font-size: 17px;
  letter-spacing: 3px;
  color: #fff;
`;

const DiscountPrice = styled.Text`
  font-size: 20px;
  font-family: sourceSansProBold;
`;

const Price = styled.Text`
  font-size: 16px;
  font-family: sourceSansProRegular;
  color: #999999;
  text-decoration: line-through;
`;

// =============================

export {
  Container,
  Header,
  Title,
  Description,
  BottomSection,
  CustomizeBtn,
  CartButton,
  CartText,
  CartSection,
  DiscountPrice,
  Price,
  CloseIcon,
  Carousel,
  Body,
  Image,
  CustomizeText
};

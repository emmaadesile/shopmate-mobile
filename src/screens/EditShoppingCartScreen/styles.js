import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const TopText = styled.Text`
  font-size: 16px;
  color: #454545;
  font-family: sourceSansProBold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const Product = styled.View`
  padding: 25px 18px 25px 110px;
  height: 105px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-top-width: 1px;
  border-color: #bfbfbf;
  border-bottom-width: 1px;
  border-style: solid;
`;

const Image = styled.View`
  width: 100px;
  height: 103px;
  background: #f2f2f2;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProductName = styled.Text`
  text-transform: uppercase;
  color: #454545;
  font-family: sourceSansProRegular;
  font-size: 20px;
  margin-bottom: 10px;
`;

const DiscountedPrice = styled.Text`
  color: #454545;
  font-size: 17px;
  font-family: sourceSansProBold;
`;

const OriginalPrice = styled.Text`
  text-decoration: line-through;
  font-size: 17px;
  color: #999999;
  font-family: sourceSansProRegular;
  margin-right: 10px;
`;

const CloseIcon = styled.Image`
  width: 27px;
  height: 28px;
`;

const DoneWrapper = styled.View`
  height: 80px;
  width: 100%;
  padding: 15px 20px;
  border-top-width: 1px;
  border-style: solid;
  border-color: #bfbfbf;
`;

const DoneButton = styled.View`
  background: #f3b453;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 4px;
`;

const DoneButtonText = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProBold;
  font-size: 18px;
  color: #fff;
`;

export {
  Container,
  TopSection,
  Image,
  TopText,
  Product,
  ProductName,
  DiscountedPrice,
  OriginalPrice,
  CloseIcon,
  DoneWrapper,
  DoneButton,
  DoneButtonText
};

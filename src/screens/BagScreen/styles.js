import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  min-height: 100%;
`;

const EmptyContainer = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.View`
  height: 200px;
  width: 88%;
  background-color: #f2f2f2;
  border-width: 1px;
  border-style: dotted;
  border-color: #c7c7c7;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 22px;
  color: #888888;
  font-family: sourceSansProRegular;
`;

const EmptyCartText = styled.Text`
  font-size: 22px;
  margin-top: 15px;
  color: #888888;
  width: 250px;
  font-family: sourceSansProRegular;
  text-align: center;
`;

const TopSection = styled.View`
  height: 80px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const TopText = styled.Text`
  font-size: 18px;
  color: #888888;
  font-family: sourceSansProRegular;
  width: 62%;
  height: 60px;
`;

const SubText = styled.Text`
  color: #f3b453;
  font-family: sourceSansProBold;
`;

const CheckoutButton = styled.View`
  width: 38%;
  background: #f3b453;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 40px;
`;

const CheckoutButtonText = styled.Text`
  font-size: 16px;
  letter-spacing: 5px;
  color: #fff;
  text-transform: uppercase;
  font-family: sourceSansProBold;
`;

const ProductWrapper = styled.View`
  width: 100%;
`;

const Product = styled.View`
  padding: 25px 18px 25px 110px;
  height: 105px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Image = styled.View`
  width: 100px;
  height: 105px;
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

const Divider = styled.View`
  height: 0.5px;
  background: #bfbfbf;
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

const TotalSection = styled.View``;

const FirstSection = styled.View`
  padding: 20px;
`;

const BottomSection = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const Subtitle = styled.Text`
  font-size: ${props => props.fontSize || "19px"};
  color: ${props => props.color || "#999999"};
  font-family: sourceSansProRegular;
`;

const TotalPrice = styled.Text`
  font-size: 25px;
  font-family: sourceSansProRegular;
  color: #f3b453;
`;

const SubTotal = styled.Text`
  color: #999999;
  font-size: 19px;
  font-family: sourceSansProRegular;
`;

const EditIcon = styled.Image`
  width: 27px;
  height: 28px;
  /* position: absolute; */
`;

export {
  Container,
  Text,
  EmptyContainer,
  EmptyCartText,
  Wrapper,
  TopSection,
  TopText,
  SubText,
  CheckoutButton,
  CheckoutButtonText,
  ProductWrapper,
  Product,
  Image,
  ProductName,
  DiscountedPrice,
  OriginalPrice,
  Divider,
  TotalSection,
  FirstSection,
  BottomSection,
  Subtitle,
  TotalPrice,
  SubTotal,
  EditIcon
};

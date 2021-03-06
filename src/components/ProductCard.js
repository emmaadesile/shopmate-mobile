import React from "react";
import styled from "styled-components";
import { BASEURL } from "react-native-dotenv";

const Product = ({
  thumbnail,
  title,
  price,
  discounted_price,
  discountPercent,
  background,
  type
}) => {
  return (
    <Container>
      <ProductImage>
        <Image source={{ uri: `${BASEURL}/images/products/${thumbnail}` }} />
      </ProductImage>
      <ProductDetails>
        <Title>{title}</Title>
        <Price>
          <NewPrice>${price}</NewPrice>
          <DiscountedPrice>${discounted_price}</DiscountedPrice>
        </Price>
      </ProductDetails>
      <Wrapper>
        <DiscountPercent>{discountPercent}%</DiscountPercent>
        <ProductType background={background}>{type}</ProductType>
      </Wrapper>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 170px;
  padding: 30px 20px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #bfbfbf;
  flex-direction: row;
`;

const ProductImage = styled.View`
  width: 150px;
  height: 100%;
`;

const ProductDetails = styled.View``;

const Image = styled.Image`
  width: 120px;
  height: 120px;
`;

const Price = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

const NewPrice = styled.Text`
  font-size: 17px;
  font-family: sourceSansProRegular;
  color: #999999;
  text-decoration: line-through;
  margin-right: 10px;
`;

const DiscountedPrice = styled.Text`
  font-size: 17px;
  font-family: sourceSansProBold;
  color: #454545;
`;

const Title = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProRegular;
  font-size: 18px;
  width: 200px;
  color: #454545;
`;

const DiscountPercent = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProBold;
  font-size: 17px;
  background: #666666;
  padding: 5px 13px;
  color: #fff;
`;

const ProductType = styled.Text`
  text-transform: uppercase;
  font-family: sourceSansProBold;
  font-size: 17px;
  background: ${props => props.background || "#ddd"};
  padding: 5px 13px;
  color: #fff;
`;

const Wrapper = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  flex-direction: row;
`;

export default Product;

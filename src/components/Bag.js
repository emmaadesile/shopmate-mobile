import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import getProductsInShoppingCart from "../store/actions/getProductsInshoppingCartAction";
import ShoppingBag from "./ShoppingBag";

class Bag extends React.Component {
  render() {
    const { products } = this.props;
    const productsCount = products.length;
    return (
      <Container>
        <LinearGradient
          colors={["rgba(193, 189, 189,0)", "rgba(236, 236, 236, 1)"]}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 51,
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
        <SubContainer />
        <ShoppingBag
          fillColor={this.props.fillColor}
          strokeColor={this.props.strokeColor}
          innerStrokeColor={this.props.innerStrokeColor}
          innerFillColor={this.props.innerFillColor}
        />
        {productsCount > 0 ? (
          <BagContainer>
            <BagCount>{productsCount}</BagCount>
          </BagContainer>
        ) : null}
      </Container>
    );
  }
}

const Container = styled.View`
  width: 88px;
  height: 88px;
  border-radius: 44px;
  align-items: center;
  justify-content: center;
`;

const SubContainer = styled.View`
  width: 74px;
  height: 74px;
  border-radius: 37px;
  position: absolute;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
`;

const BagContainer = styled.View`
  align-items: center;
  justify-content: center;
  background: #454545;
  border: rgb(235, 235, 235);
  border: 1.5px solid #eee;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: 30px;
  right: 20px;
`;

const BagCount = styled.Text`
  font-family: sourceSansProBold;
  color: #fff;
  font-size: 11px;
`;

const mapStateToProps = state => ({
  products: state.getProductsInShoppingCart.products
});

const mapDispatchToProps = dispatch => ({
  getProductsInShoppingCart: () => dispatch(getProductsInShoppingCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bag);

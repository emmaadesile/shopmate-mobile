import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import getProductsInShoppingCart from "../store/actions/getProductsInshoppingCartAction";
import ShoppingBag from "./ShoppingBag";

class Bag extends React.Component {
  render() {
    const {
      products,
      tabNav,
      deleteItemSuccess,
      addProductSuccessMessage
    } = this.props;
    const productsCount = products.length;

    let updatedProductCount = productsCount;

    if (deleteItemSuccess) {
      updatedProductCount = Number(productsCount) - 1;
    }

    if (addProductSuccessMessage) {
      updatedProductCount = Number(productsCount) + 1;
    }

    return !tabNav ? (
      <>
        <ShoppingBag
          fillColor={this.props.fillColor}
          strokeColor={this.props.strokeColor}
          innerStrokeColor={this.props.innerStrokeColor}
          innerFillColor={this.props.innerFillColor}
        />
        {updatedProductCount > 0 ? (
          <BagContainer2
            background={!tabNav && "#F3B453"}
            border={!tabNav && "#404040"}
          >
            <BagCount color={!tabNav && "#454545"} fontSize={!tabNav && 14}>
              {updatedProductCount}
            </BagCount>
          </BagContainer2>
        ) : null}
      </>
    ) : (
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
        {updatedProductCount > 0 ? (
          <BagContainer>
            <BagCount color={!tabNav && "#454545"} fontSize={!tabNav && 14}>
              {updatedProductCount}
            </BagCount>
          </BagContainer>
        ) : null}
      </Container>
    );
  }
}

const BagCount = styled.Text`
  font-family: sourceSansProBold;
  color: ${props => props.color || "#fff"};
  font-size: ${props => props.fontSize || "11px"};
`;

const mapStateToProps = state => ({
  products: state.getProductsInShoppingCart.products,
  deleteItemSuccess: state.deleteItemFromCart.message,
  addProductSuccessMessage: state.addProductsToShoppingCart.products.message
});

const mapDispatchToProps = dispatch => ({
  getProductsInShoppingCart: () => dispatch(getProductsInShoppingCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bag);

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
  background: ${props => props.background || "#454545"};
  border: ${props => props.border || "1.5px solid #eee"};
  width: 26px;
  height: 26px;
  border-radius: 14px;
  position: absolute;
  top: 26px;
  right: 18px;
`;

const BagContainer2 = styled.View`
  align-items: center;
  justify-content: center;
  background: ${props => props.background || "#454545"};
  border: ${props => props.border || "1.5px solid #eee"};
  width: 26px;
  height: 26px;
  border-radius: 14px;
  position: absolute;
  top: -5px;
  right: -10px;
`;

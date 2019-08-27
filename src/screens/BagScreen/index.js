import React from "react";
import { SafeAreaView, View, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import jwt from "jwt-decode";
import getProductsInshoppingCart from "../../store/actions/getProductsInshoppingCartAction";
import Loading from "../../components/Loading";
import { getUserToken } from "../../store/actions/authAction";
import {
  Container,
  EmptyContainer,
  EmptyCartText,
  Wrapper,
  TopSection,
  Image,
  TopText,
  CheckoutButton,
  CheckoutButtonText,
  SubText,
  ProductWrapper,
  Product,
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
} from "./styles";
import ShoppingBag from "../../components/ShoppingBag";
import NavHeader from "../../components/NavHeader";

class BagScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    const { getProductsInshoppingCart } = this.props;
    getProductsInshoppingCart();
  }

  /**
   * @description Get the expiration date of userToken
   * @returns boolean
   */
  isTokenExpired = async () => {
    const token = await getUserToken();
    const { exp } = jwt(token);
    return Date.now() > Number(exp) * 1000;
  };

  /**
   * @description Reanders an empty cart
   */
  renderEmptyCart = () => (
    <EmptyContainer>
      <Wrapper>
        <ShoppingBag strokeColor="#999999" fillColor="#999999" />
        <EmptyCartText>You have no items in your shopping bag.</EmptyCartText>
      </Wrapper>
    </EmptyContainer>
  );

  /**
   * @description calculate the subtotal of cart items
   * @returns {number} subtotal
   */
  calculateSubTotal = () => {
    const { products } = this.props;
    let subtotal = 0;

    products.map(product => (subtotal += Number(product.subtotal)));
    return subtotal.toFixed(0);
  };

  /**
   * @description calculate the number of items
   * @returns {number} product.length
   */
  calculateNoOfItems = () => {
    const { products } = this.props;
    return products.length;
  };

  /**
   * @description shorten product length if its too long
   * @returns {string} name
   */
  shortenProductName = name => {
    if (name.length > 15) {
      return `${name.substr(0, 15)}...`;
    }

    return name;
  };

  /**
   * @description calculate the total price of products in cart
   * @returns {number} price
   */
  calculateTotalPrice = () => {
    return (Number(this.calculateSubTotal()) + 10).toFixed(0);
  };

  render() {
    const { products, loading, deleteItemSuccess, deletedItemId } = this.props;

    let updatedProducts;

    if (deleteItemSuccess) {
      updatedProducts = products.filter(
        product => product.item_id !== deletedItemId
      );
    } else {
      updatedProducts = products;
    }

    return (
      <SafeAreaView>
        <NavHeader
          background="#F2F2F2"
          openDrawer={this.props.navigation.openDrawer}
        />
        {loading ? (
          <Loading />
        ) : updatedProducts.length === 0 ? (
          this.renderEmptyCart()
        ) : (
          <ScrollView>
            <Container>
              <TopSection>
                <TopText>
                  You have
                  <SubText> {this.calculateNoOfItems()} items </SubText>
                  in your shopping bag.
                </TopText>
                <TouchableOpacity
                  style={{ width: "38%" }}
                  onPress={() => {
                    this.isTokenExpired() === true
                      ? this.props.navigation.navigate("Login")
                      : this.props.navigation.navigate("Address");
                  }}
                >
                  <CheckoutButton>
                    <CheckoutButtonText>checkout</CheckoutButtonText>
                  </CheckoutButton>
                </TouchableOpacity>
              </TopSection>
              <ProductWrapper>
                <Divider />
                {updatedProducts.map(product => (
                  <React.Fragment key={product.item_id}>
                    <Product>
                      <Image />
                      <View>
                        <ProductName>
                          {this.shortenProductName(product.name)}
                        </ProductName>
                        <View style={{ flexDirection: "row" }}>
                          <OriginalPrice>$11.00</OriginalPrice>
                          <DiscountedPrice>${product.price}</DiscountedPrice>
                        </View>
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.push("EditProduct", {
                            name: product.name,
                            price: product.price,
                            quantity: product.quantity,
                            itemId: product.item_id
                          })
                        }
                      >
                        <View>
                          <EditIcon
                            source={require("../../../assets/editIcon.jpg")}
                          />
                        </View>
                      </TouchableOpacity>
                    </Product>
                    <Divider />
                  </React.Fragment>
                ))}
              </ProductWrapper>
              <TotalSection>
                <FirstSection>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Subtitle>Subtotal</Subtitle>
                    <SubTotal>${this.calculateSubTotal()}</SubTotal>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 10
                    }}
                  >
                    <Subtitle>Shipping</Subtitle>
                    <SubTotal>$10</SubTotal>
                  </View>
                </FirstSection>
                <Divider />
                <BottomSection>
                  <Subtitle fontSize="25px" color="#454545">
                    Total
                  </Subtitle>
                  <TotalPrice> ${this.calculateTotalPrice()} </TotalPrice>
                </BottomSection>
              </TotalSection>
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.getProductsInShoppingCart.loading,
    products: state.getProductsInShoppingCart.products,
    error: state.getProductsInShoppingCart.error,

    deleteItemSuccess: state.deleteItemFromCart.message.message,
    deletedItemId: state.deleteItemFromCart.message.itemId
  };
};

const mapDispatchToProps = dispatch => ({
  getProductsInshoppingCart: () => dispatch(getProductsInshoppingCart()),
  updateProductsInCart: () => dispatch(updateCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BagScreen);

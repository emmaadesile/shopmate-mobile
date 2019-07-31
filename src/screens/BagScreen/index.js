import React from "react";
import { SafeAreaView, View, TouchableOpacity, ScrollView } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import getProductsInshoppingCart from "../../store/actions/getProductsInshoppingCartAction";
import Loading from "../../components/Loading";
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

  // componentDidUpdate() {
  // const { getProductsInshoppingCart, deleteItemSuccess } = this.props;
  // if (deleteItemSuccess) {
  //   return getProductsInshoppingCart();
  // }

  //   const resetAction = StackActions.reset({
  //     index: 0,
  //     actions: [NavigationActions.navigate({ routeName: "Bag" })]
  //   });
  //   this.props.navigation.dispatch(resetAction);
  // }

  renderEmptyCart = () => (
    <EmptyContainer>
      <Wrapper>
        <ShoppingBag strokeColor="#999999" fillColor="#999999" />
        <EmptyCartText>You have no items in your shopping bag.</EmptyCartText>
      </Wrapper>
    </EmptyContainer>
  );

  calculateSubTotal = () => {
    const { products } = this.props;
    let subtotal = 0;

    products.map(product => (subtotal += Number(product.subtotal)));
    return subtotal.toFixed(0);
  };

  calculateNoOfItems = () => {
    const { products } = this.props;
    return products.length;
  };

  shortenProductName = name => {
    if (name.length > 15) {
      return `${name.substr(0, 15)}...`;
    }

    return name;
  };

  calculateTotalPrice = () => {
    return (Number(this.calculateSubTotal()) + 10).toFixed(0);
  };

  render() {
    const { products, loading } = this.props;

    return (
      <SafeAreaView>
        <NavHeader background="#F2F2F2" />
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
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
                <CheckoutButton>
                  <CheckoutButtonText>checkout</CheckoutButtonText>
                </CheckoutButton>
              </TopSection>
              <ProductWrapper>
                <Divider />
                {products.map(product => (
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

const mapStateToProps = state => ({
  loading: state.getProductsInShoppingCart.loading,
  products: state.getProductsInShoppingCart.products,
  error: state.getProductsInShoppingCart.error,

  deleteItemSuccess: state.deleteItemFromCart.message
});

const mapDispatchToProps = dispatch => ({
  getProductsInshoppingCart: () => dispatch(getProductsInshoppingCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BagScreen);

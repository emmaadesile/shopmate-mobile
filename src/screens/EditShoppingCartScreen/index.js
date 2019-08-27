import React from "react";
import { SafeAreaView, View, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
import deleteItemFromCart from "../../store/actions/deleteItemFromCart";
import getProductsInShoppingCart from "../../store/actions/getProductsInshoppingCartAction";
import * as Icon from "@expo/vector-icons";
import Customize from "../ProductDetailScreen/Customize";
import Loading from "../../components/Loading";
import Rhombus from "../../components/Rhombus";
import {
  Container,
  TopSection,
  Image,
  TopText,
  Product,
  ProductName,
  DiscountedPrice,
  DoneWrapper,
  DoneButton,
  DoneButtonText
} from "./styles";
import NavHeader from "../../components/NavHeader";

class EditShoppingCartScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    name: "",
    price: "",
    quantity: "",
    producId: "",
    itemId: ""
  };

  componentDidMount() {
    const { getParam } = this.props.navigation;
    const name = getParam("name");
    const price = getParam("price");
    const quantity = getParam("quantity");
    const itemId = getParam("itemId");

    this.setState({ name, price, quantity, itemId });
  }

  showAlert = () => {
    const { deleteItem } = this.props;
    const { itemId } = this.state;

    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        { text: "No", onPress: () => null },
        {
          text: "Yes",
          onPress: () => {
            deleteItem(itemId);

            this.props.navigation.navigate("Bag");
          }
        }
      ],
      { cancelable: true }
    );
  };

  render() {
    const { name, price } = this.state;
    const { deleteItemLoading } = this.props;

    return (
      <SafeAreaView>
        <NavHeader openDrawer={this.props.navigation.openDrawer} />
        <Container>
          <TopSection>
            <TopText>edit item</TopText>
          </TopSection>
          <View
            style={{
              alignItems: "center",
              position: "absolute",
              top: 52,
              left: "50%",
              zIndex: 10
            }}
          >
            <Rhombus />
          </View>
          <Product>
            <Image />
            {deleteItemLoading ? (
              <Loading />
            ) : (
              <View>
                <ProductName>{name}</ProductName>
                <DiscountedPrice>${price}</DiscountedPrice>
              </View>
            )}
            <TouchableOpacity onPress={() => this.showAlert()}>
              <Icon.Ionicons name="ios-close" size={35} color="#999999" />
            </TouchableOpacity>
          </Product>
          <Customize isCustomizePopupOpen={true} screen="editProduct" />
          <DoneWrapper>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <DoneButton>
                <DoneButtonText>Done</DoneButtonText>
              </DoneButton>
            </TouchableOpacity>
          </DoneWrapper>
        </Container>
      </SafeAreaView>
    );
  }
}

const mapStateToPtops = state => ({
  deleteItemLoading: state.deleteItemFromCart.loading,
  deteleProductMessage: state.deleteItemFromCart.message
});

const mapDispatchToProps = dispatch => ({
  deleteItem: itemId => dispatch(deleteItemFromCart(itemId)),
  getProducts: () => dispatch(getProductsInShoppingCart())
});

export default connect(
  mapStateToPtops,
  mapDispatchToProps
)(EditShoppingCartScreen);

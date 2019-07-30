import React from "react";
import { SafeAreaView, View, TouchableOpacity, Alert } from "react-native";
import * as Icon from "@expo/vector-icons";
import Customize from "../ProductDetailScreen/Customize";
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
    quantity: ""
  };

  componentDidMount() {
    const name = this.props.navigation.getParam("name");
    const price = this.props.navigation.getParam("price");
    const quantity = this.props.navigation.getParam("quantity");

    this.setState({ name, price, quantity });
  }

  showAlert = () => {
    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        { text: "No", onPress: () => null },
        { text: "Yes", onPress: () => null }
      ],
      { cancelable: true }
    );
  };

  render() {
    const { name, price, quantity } = this.state;

    return (
      <SafeAreaView>
        <NavHeader />
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
            <View>
              <ProductName>{name}</ProductName>
              <DiscountedPrice>${price}</DiscountedPrice>
            </View>
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

export default EditShoppingCartScreen;

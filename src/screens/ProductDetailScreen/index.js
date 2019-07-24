import React from "react";
import { View } from "react-native";
import * as Icon from "@expo/vector-icons";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

import getProductDetails from "../../store/actions/productDetailsAction";
import { BASEURL } from "react-native-dotenv";
import Loading from "../../components/Loading";
import Customize from "./Customize";
import {
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
  Body,
  CustomizeText
} from "./styles";
import ImageCarousel from "../../components/Carousel";

class ProductDetails extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    isCustomizePopupOpen: false
  };

  componentDidMount() {
    const { fetchProductDetails, navigation } = this.props;
    const productId = navigation.getParam("productId", 1);

    fetchProductDetails(productId);
  }

  render() {
    const { productDetails, loading } = this.props;
    const {
      name,
      description,
      price,
      discounted_price,
      image,
      image_2
    } = productDetails;

    const images = [
      {
        source: { uri: `${BASEURL}/images/products/${image}` }
      },
      {
        source: { uri: `${BASEURL}/images/products/${image_2}` }
      }
    ];

    return (
      <SafeAreaView>
        {loading ? (
          <Loading />
        ) : (
          <Container>
            <Header>
              <Title>{name}</Title>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <CloseIcon>
                  <Icon.Ionicons name="ios-close" size={45} color="#454545" />
                </CloseIcon>
              </TouchableOpacity>
            </Header>
            <Body>
              <ImageCarousel images={images} />
              <Description>{description}</Description>
            </Body>
            <BottomSection>
              <TouchableOpacity
                onPress={() =>
                  this.setState(prevState => ({
                    isCustomizePopupOpen: !prevState.isCustomizePopupOpen
                  }))
                }
              >
                <CustomizeBtn>
                  <Icon.Ionicons
                    name={
                      this.state.isCustomizePopupOpen
                        ? "ios-arrow-down"
                        : "ios-arrow-up"
                    }
                    size={25}
                    color="#777"
                  />
                  <CustomizeText>Customize</CustomizeText>
                </CustomizeBtn>
              </TouchableOpacity>
              <CartSection>
                <View style={{ alignItems: "flex-end" }}>
                  <Price>${price}</Price>
                  <DiscountPrice>${discounted_price}</DiscountPrice>
                </View>
                <CartButton>
                  <CartText>add to cart</CartText>
                </CartButton>
              </CartSection>
            </BottomSection>
            <Customize isCustomizePopupOpen={this.state.isCustomizePopupOpen} />
          </Container>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  productDetails: state.productDetails.product,
  loading: state.productDetails.loading,
  error: state.productDetails.error
});

const mapDispatchToProps = dispatch => ({
  fetchProductDetails: productId => dispatch(getProductDetails(productId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);

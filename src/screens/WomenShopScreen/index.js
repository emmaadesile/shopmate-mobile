import React from "react";
import { connect } from "react-redux";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import getProducts from "../../store/actions/productsAction";
import { Container } from "./styles";
import OutwearHeader from "../../components/OutwearHeader";
import NavHeader from "../../components/NavHeader";
import LowerNav from "../../components/LowerNav";
import ProductCard from "../../components/ProductCard";
import Loading from "../../components/Loading";
import colors from "../../globals/colors";

class MenShoppingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    const { getAllProducts } = this.props;
    getAllProducts();
  }

  getDiscountPercent = (discounted_price, price) => {
    const discountPercent = ((discounted_price - price) / price) * 100;
    return discountPercent.toFixed(0);
  };

  calculateBackground = id => {
    if (id % 2 === 0) {
      return colors.yellow;
    }
    if (id % 2 !== 0) {
      return colors.green;
    }
  };

  calculateType = id => {
    if (id % 2 === 0) {
      return "new";
    }
    if (id % 2 !== 0) {
      return "sale";
    }
  };

  render() {
    const { products, loading } = this.props;

    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView />
          <NavHeader />
          <OutwearHeader title="women" background={colors.pink} />
          <LowerNav type="women" />
          {loading ? (
            <Loading />
          ) : (
            products.map(
              ({ product_id, thumbnail, name, price, discounted_price }) => (
                <TouchableOpacity
                  key={product_id}
                  onPress={() =>
                    this.props.navigation.push("Product", {
                      productId: product_id
                    })
                  }
                >
                  <ProductCard
                    product_id={product_id}
                    thumbnail={thumbnail}
                    title={name}
                    price={price}
                    background={this.calculateBackground(product_id)}
                    type={this.calculateType(product_id)}
                    discounted_price={discounted_price}
                    discountPercent={this.getDiscountPercent(
                      discounted_price,
                      price
                    )}
                  />
                </TouchableOpacity>
              )
            )
          )}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading,
  error: state.products.error
});

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenShoppingScreen);

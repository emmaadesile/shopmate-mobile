import React from "react";
import { connect } from "react-redux";
import { SafeAreaView, ScrollView, View } from "react-native";
import getProducts from "../../store/actions/productsAction";
import { Container } from "./styles";
import OutwearHeader from "../../components/OutwearHeader";
import NavHeader from "../../components/NavHeader";
import LowerNav from "../../components/LowerNav";
import ProductCard from "../../components/ProductCard";
import Loading from "../../components/Loading";

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

  render() {
    const { products, loading } = this.props;

    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView />
          <NavHeader />
          <OutwearHeader title="men" />
          <LowerNav type="men" />
          {loading ? (
            <Loading />
          ) : (
            products.map(
              ({ product_id, thumbnail, name, price, discounted_price }) => (
                <ProductCard
                  key={product_id}
                  thumbnail={thumbnail}
                  title={name}
                  price={price}
                  discounted_price={discounted_price}
                  discountPercent={this.getDiscountPercent(
                    discounted_price,
                    price
                  )}
                />
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

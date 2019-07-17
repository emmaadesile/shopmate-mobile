import React from "react";
import {
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Animated
} from "react-native";
import { connect } from "react-redux";
import NavHeader from "../../components/NavHeader";
import TopBanner from "../../components/TopBanner";
import OutWearHeader from "../../components/OutwearHeader";
import navActions from "../../store/actions/navAction";
import {
  Container,
  BodyText,
  SubText,
  Body,
  Image,
  ImageWrapper,
  ShopButton,
  ButtonText
  // Overlay
} from "./styles";

class ShoppingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    opacity: new Animated.Value(0)
  };

  componentDidMount() {
    this.animateOpacity();
  }

  componentDidUpdate() {
    this.animateOpacity();
  }

  animateOpacity = () => {
    if (this.props.action === "openMenu") {
      Animated.timing(this.state.opacity, { toValue: 0.5 }).start();
    }

    if (this.props.action === "closeMenu") {
      Animated.timing(this.state.opacity, { toValue: 1 }).start();
    }
  };

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          {/* <AnimatedOverlay
            style={{
              opacity: this.state.opacity
            }}
          /> */}
          <AnimatedContainer>
            <NavHeader toggleMenu={this.props.openMenu} />
            <TopBanner />
            <TouchableOpacity
              onPress={() => this.props.navigation.push("MenShop")}
            >
              <OutWearHeader title="men" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.push("WomenShop")}
            >
              <OutWearHeader title="women" background="#F6966C" />
            </TouchableOpacity>
            <Body>
              <BodyText>winter sale</BodyText>
              <SubText>up to 60% off</SubText>
              <ImageWrapper>
                <Image source={require("../../../assets/jacket.jpg")} />
              </ImageWrapper>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 200,
                  right: 0
                }}
              >
                <ShopButton>
                  <ButtonText>shop now</ButtonText>
                </ShopButton>
              </TouchableOpacity>
            </Body>
          </AnimatedContainer>
        </ScrollView>
      </>
    );
  }
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);
// const AnimatedOverlay = Animated.createAnimatedComponent(Overlay);

const mapStateToProps = state => ({
  action: state.nav.action
});

const mapDispatchToProps = dispatch => ({
  openMenu: () => dispatch(navActions("openMenu"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingScreen);

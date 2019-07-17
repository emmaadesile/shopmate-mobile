import React from "react";
import { View, Animated, Dimensions } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  TopSection,
  LowerSection,
  SocialMediaWrapper,
  SocialMedia,
  IconWrapper,
  IconName,
  SubText,
  Text,
  Icon,
  Line
} from "./styles";
import ShoppingBag from "../ShoppingBag";
import InspirationIcon from "../InspirationIcon";
import StoresIcon from "../StoresIcon";
import ShopIcon from "../ShopIcon";

const screenWidth = Dimensions.get("window").width;

class MainNavigation extends React.Component {
  state = {
    right: new Animated.Value(screenWidth),
    opacity: new Animated.Value(0)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action === "openMenu") {
      Animated.spring(this.state.right, { toValue: 45 }).start();
      Animated.timing(this.state.opacity, { toValue: 1 }).start();
    }

    if (this.props.action === "closeMenu") {
      Animated.spring(this.state.right, { toValue: screenWidth }).start();
      Animated.timing(this.state.opacity, { toValue: 0 }).start();
    }
  };
  render() {
    return (
      <AnimatedContainer
        style={{
          right: this.state.right,
          opacity: this.state.opacity
        }}
      >
        <TopSection>
          <View style={{ flexDirection: "row" }}>
            <IconWrapper>
              <ShopIcon strokeColor="#fff" fillColor="#000" />
              <IconName>Shop</IconName>
            </IconWrapper>
            <IconWrapper>
              <ShoppingBag strokeColor="#fff" fillColor="#fff" />
              <IconName>Bag</IconName>
            </IconWrapper>
          </View>

          <View style={{ flexDirection: "row" }}>
            <IconWrapper>
              <InspirationIcon fill="#fff" />
              <IconName>Inspiration</IconName>
            </IconWrapper>
            <IconWrapper>
              <StoresIcon fillColor="#fff" innerCircle="#000" />
              <IconName>Stores</IconName>
            </IconWrapper>
          </View>
        </TopSection>
        <LowerSection>
          <Text>My Account</Text>
          <Line />
          <Text>Customer Support</Text>
          <Line />
          <Text color="#F3B453">Logout</Text>
          <Line />
          <SocialMediaWrapper>
            <SubText>follow us</SubText>
            <SocialMedia>
              <Icon source={require("../../../assets/facebook.png")} />
              <Icon source={require("../../../assets/twitter.png")} />
              <Icon source={require("../../../assets/pinterest.png")} />
            </SocialMedia>
          </SocialMediaWrapper>
        </LowerSection>
      </AnimatedContainer>
    );
  }
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const mapStateToProps = state => ({
  action: state.nav.action
});

export default connect(
  mapStateToProps,
  null
)(MainNavigation);

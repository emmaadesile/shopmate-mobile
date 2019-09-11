import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { getUserToken, removeUserToken } from "../../store/actions/authAction";

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
import Bag from "../../components/Bag";
import Stores2 from "../../components/Stores2";
import Polygon from "../../components/Polygon";

class CustomAppDrawer extends React.Component {
  state = {
    isLoggeIn: false
  };
  async componentDidMount() {
    const userToken = await getUserToken();

    if (userToken) {
      this.setState({ isLoggeIn: true });
    }
  }

  handleLogout = async () => {
    await removeUserToken();
    this.props.navigation.navigate("Login");
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <TopSection>
          <View style={{ flexDirection: "row" }}>
            <IconWrapper>
              <TouchableOpacity
                onPress={() => navigate("Shop")}
                style={{ alignItems: "center" }}
              >
                <Polygon />
                <IconName>Shop</IconName>
              </TouchableOpacity>
            </IconWrapper>
            <IconWrapper>
              <TouchableOpacity
                onPress={() => navigate("Bag")}
                style={{ alignItems: "center" }}
              >
                <Bag strokeColor="#fff" fillColor="#fff" />
                <IconName>Bag</IconName>
              </TouchableOpacity>
            </IconWrapper>
          </View>

          <View style={{ flexDirection: "row" }}>
            <IconWrapper>
              <TouchableOpacity
                onPress={() => navigate("Inspiration")}
                style={{ alignItems: "center" }}
              >
                <Image source={require("../../../assets/sun.png")} />
                <IconName>Inspiration</IconName>
              </TouchableOpacity>
            </IconWrapper>
            <IconWrapper>
              <TouchableOpacity
                onPress={() => navigate("Stores")}
                style={{ alignItems: "center" }}
              >
                <Stores2 fillColor="#fff" innerCircle="#000" />
                <IconName>Stores</IconName>
              </TouchableOpacity>
            </IconWrapper>
          </View>
        </TopSection>
        <LowerSection>
          <Text>My Account</Text>
          <Line />
          <TouchableOpacity onPress={() => navigate("CustomerSupport")}>
            <Text>Customer Support</Text>
          </TouchableOpacity>
          <Line />
          {this.state.isLoggeIn ? (
            <TouchableOpacity onPress={this.handleLogout}>
              <Text color="#F3B453">Logout</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text color="#F3B453">Login</Text>
            </TouchableOpacity>
          )}
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
      </Container>
    );
  }
}

export default CustomAppDrawer;

import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

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

const CustomAppDrawer = ({ navigation: { navigate } }) => {
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
    </Container>
  );
};

export default CustomAppDrawer;

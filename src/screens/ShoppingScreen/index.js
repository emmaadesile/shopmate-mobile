import React from "react";
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import NavHeader from "../../components/NavHeader";
import TopBanner from "../../components/TopBanner";
import OutWearHeader from "../../components/OutwearHeader";
import {
  Container,
  BodyText,
  SubText,
  Body,
  Image,
  ImageWrapper,
  ShopButton,
  ButtonText
} from "./styles";

class ShoppingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <Container>
            <NavHeader />
            <TopBanner />
            <TouchableOpacity>
              <OutWearHeader title="men" />
            </TouchableOpacity>
            <TouchableOpacity>
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
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ShoppingScreen;

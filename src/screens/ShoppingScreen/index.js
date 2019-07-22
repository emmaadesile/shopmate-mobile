import React from "react";
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
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
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.push("MenShop")}
            >
              <OutWearHeader title="men" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.push("WomenShop")}
            >
              <OutWearHeader title="women" background="#F6966C" />
            </TouchableWithoutFeedback>
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

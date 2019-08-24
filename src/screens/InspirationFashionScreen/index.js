import React from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import * as Icon from "@expo/vector-icons";
import { Container, Title, Subtitle, Wrapper, Body } from "./styles";
import Hexagon from "../InspirationLifeScreen/Hexagon";

class InspirationFashionScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <SafeAreaView>
        <Container>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 10,
              right: 20
            }}
            onPress={() => this.props.navigation.pop()}
          >
            <Icon.Ionicons name="ios-close" size={44} color="#fff" />
          </TouchableOpacity>
          <Wrapper>
            <Title color="#EFB961">
              f<Title>ashion</Title>
            </Title>
          </Wrapper>
          <Body>
            <Hexagon />
            <Subtitle>business</Subtitle>
          </Body>
        </Container>
      </SafeAreaView>
    );
  }
}

export default InspirationFashionScreen;

import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Hexagon from "./Hexagon";
import * as Icon from "@expo/vector-icons";
import {
  Container,
  Button,
  Title,
  Subtitle,
  ButtonText,
  Wrapper,
  Body,
  Date
} from "./styles";

class InpirationLifeScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <SafeAreaView>
        <Container>
          <TouchableOpacity
            style={{ position: "absolute", right: 20, top: 10 }}
            onPress={() => this.props.navigation.pop()}
          >
            <Icon.Ionicons name="ios-close" size={44} color="#fff" />
          </TouchableOpacity>
          <Wrapper>
            <Title color="#EFB961">
              l<Title>ife</Title>
            </Title>
          </Wrapper>
          <View
            style={{ position: "absolute", top: 150, alignItems: "center" }}
          >
            <Date>Dec. 12 2019</Date>
            <Subtitle>What about style</Subtitle>
          </View>
          <Body>
            <Hexagon />
          </Body>
          <TouchableOpacity
            onPress={() => this.props.navigation.push("LifeDetails")}
            style={{
              position: "absolute",
              bottom: 140
            }}
          >
            <Button>
              <ButtonText>read more</ButtonText>
            </Button>
          </TouchableOpacity>
        </Container>
      </SafeAreaView>
    );
  }
}

export default InpirationLifeScreen;

import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Container, Subtitle, Date } from "../InspirationLifeScreen/styles";
import { Text } from "./styles";
import Hexagon from "../InspirationLifeScreen/Hexagon";
import * as Icon from "@expo/vector-icons";

class InspirationLifeDetailsScreen extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <ScrollView>
        <Container background="#fff" height={900}>
          <TouchableOpacity
            style={{ position: "absolute", top: 40, left: 20 }}
            onPress={() => this.props.navigation.pop()}
          >
            <Icon.Ionicons name="ios-arrow-back" size={44} color="#454545" />
          </TouchableOpacity>
          <View
            style={{
              marginTop: 50,
              alignItems: "center",
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Date color="#454545">Dec. 12 2019</Date>
            <Subtitle color="#454545">What about style</Subtitle>
          </View>
          <View
            style={{
              marginTop: 100
            }}
          >
            <Hexagon />
          </View>
          <View style={{ marginTop: 120, paddingLeft: 20, paddingRight: 20 }}>
            <Text>
              I love it when a piece can transition through the seasons. This
              Topshop skirt was a summer favourite of mine (seenhere) but
              something about the texture means it also works through the
              (slightly) colder days here in Los Angeles. I'm not often drawn to
              brown but the 70's feel of this jacket seemed like an easy way to
              key into the retro feel that was so apparent across many of the
              shows last fashion week. Black leather will of course always be my
              first love though.
            </Text>
          </View>
        </Container>
      </ScrollView>
    );
  }
}

export default InspirationLifeDetailsScreen;

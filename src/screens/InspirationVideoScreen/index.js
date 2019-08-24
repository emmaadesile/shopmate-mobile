import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import * as Icon from "@expo/vector-icons";
import {
  Container,
  Wrapper,
  VideoCard,
  Title,
  PlayButton,
  Divider
} from "./styles";

class InspirationVideoScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Container>
            <TouchableOpacity
              onPress={() => this.props.navigation.pop()}
              style={{
                position: "absolute",
                top: 20,
                right: 20
              }}
            >
              <Icon.Ionicons name="ios-close" size={46} color="#fff" />
            </TouchableOpacity>
            <Wrapper>
              <Divider />
              <Title color="#F3B453">
                v<Title>ideos</Title>
              </Title>
              <Divider />
            </Wrapper>
            {Array.from({ length: 5 }, (x, i) => (
              <VideoCard key={i}>
                <PlayButton />
              </VideoCard>
            ))}
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default InspirationVideoScreen;

import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import NavHeader from "../../components/NavHeader";
import { Container, Title, Section, Wrapper } from "./styles";

class InspirationScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView>
        <NavHeader openDrawer={this.props.navigation.openDrawer} />
        <Container>
          <Section background="rgba(0,0,0,0.3)">
            <TouchableOpacity
              onPress={() => this.props.navigation.push("Life")}
            >
              <Wrapper>
                <Title>
                  <Title color="#F3B453">l</Title>ife
                </Title>
              </Wrapper>
            </TouchableOpacity>
          </Section>
          <Section background="rgba(0,0,0,0.5)">
            <TouchableOpacity
              onPress={() => this.props.navigation.push("Fashion")}
            >
              <Wrapper>
                <Title>
                  <Title color="#F3B453">f</Title>ashion
                </Title>
              </Wrapper>
            </TouchableOpacity>
          </Section>
          <Section background="rgba(0,0,0,0.7)">
            <TouchableOpacity
              onPress={() => this.props.navigation.push("Videos")}
            >
              <Wrapper>
                <Title>
                  <Title color="#F3B453">v</Title>ideos
                </Title>
              </Wrapper>
            </TouchableOpacity>
          </Section>
        </Container>
      </SafeAreaView>
    );
  }
}

export default InspirationScreen;

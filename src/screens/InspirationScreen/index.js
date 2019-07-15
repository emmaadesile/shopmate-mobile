import React from "react";
import { Container, Text } from "./styles";

class InspirationScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Text>Inspiration Screen</Text>
      </Container>
    );
  }
}

export default InspirationScreen;

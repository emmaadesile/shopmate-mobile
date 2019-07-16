import React from "react";
import { Container, Text } from "./styles";

class MoreScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Text>More Screen</Text>
      </Container>
    );
  }
}

export default MoreScreen;

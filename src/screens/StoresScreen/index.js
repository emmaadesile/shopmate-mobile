import React from "react";
import { Container, Text } from "./styles";

class StoreScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Text>Store Screen</Text>
      </Container>
    );
  }
}

export default StoreScreen;

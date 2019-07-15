import React from "react";
import { Container, Text } from "./styles";
import Oval from "../../components/Bag";

class BagScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Text>Bag Screen</Text>
      </Container>
    );
  }
}

export default BagScreen;

import React from "react";
import { Container, Text } from "./styles";
import Oval from "../../components/Bag";

class BagScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Men Shopping Screen</Text>
        <Oval bagCount={3} />
      </Container>
    );
  }
}

export default BagScreen;

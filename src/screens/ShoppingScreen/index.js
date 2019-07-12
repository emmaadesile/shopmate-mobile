import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

class ShoppingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Text>Shopping Screen</Text>
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 17px;
`;

export default ShoppingScreen;

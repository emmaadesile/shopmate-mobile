import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Animated } from "react-native";
import * as Icon from "@expo/vector-icons";

class StoreModal extends React.Component {
  state = {
    opacity: new Animated.Value(0)
  };

  componentDidMount() {
    if (this.props.showModal) {
      Animated.timing(this.state.opacity, { toValue: 1 }).start();
    }

    if (!this.props.showModal) {
      Animated.timing(this.state.opacity, { toValue: 0 }).start();
    }
  }

  componentDidUpdate() {
    if (this.props.showModal) {
      Animated.timing(this.state.opacity, { toValue: 1 }).start();
    }

    if (!this.props.showModal) {
      Animated.timing(this.state.opacity, { toValue: 0 }).start();
    }
  }

  render() {
    return (
      <AnimatedModal style={{ opacity: this.state.opacity }}>
        <TouchableOpacity
          onPress={() => this.props.closeModal()}
          style={{ position: "absolute", top: 10, right: 20 }}
        >
          <Icon.Ionicons name="ios-close" color="#999999" size={40} />
        </TouchableOpacity>
        <Row>
          <StoreImage />
          <Column>
            <StoreName>Storex Grand Central</StoreName>
            <Text>45 Grand Central Terminal</Text>
            <Text>New York, NY 10017</Text>
            <Text style={{ marginTop: 20 }}>(212) 284-1800</Text>
            <Text style={{ color: "#F3B453", marginTop: 30 }}>Directions</Text>
          </Column>
        </Row>
      </AnimatedModal>
    );
  }
}

export default StoreModal;

const Modal = styled.View`
  width: 90%;
  height: 70%;
  position: absolute;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-width: 1px;
  border-style: solid;
  border-color: #f3b453;
  z-index: 10;
  padding-top: 20px;
  padding-left: 20px;
`;

const AnimatedModal = Animated.createAnimatedComponent(Modal);

const StoreImage = styled.View`
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  margin-right: 15px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const StoreName = styled.Text`
  font-size: 18px;
  color: #454545;
  font-family: sourceSansProBold;
`;

const Text = styled.Text`
  font-size: 17px;
  font-family: sourceSansProRegular;
  color: #454545;
`;

const Column = styled.View``;

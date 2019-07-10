import React from "react";
import styled from "styled-components";
import { Animated, Dimensions } from "react-native";
import Lottie from "lottie-react-native";

const screenHeight = Dimensions.get("window").height;

class SuccessLoader extends React.Component {
  state = {
    top: new Animated.Value(0),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    if (!this.props.isSuccessful) {
      Animated.timing(this.state.top, {
        toValue: screenHeight,
        duration: 0
      }).start();
      Animated.timing(this.state.opacity, { toValue: 0 }).start();

      this.animation.loop = false;
    }
  }

  componentDidUpdate() {
    if (!this.props.isSuccessful) {
      Animated.timing(this.state.top, {
        toValue: screenHeight,
        duration: 0
      }).start();
      Animated.timing(this.state.opacity, { toValue: 0 }).start();

      this.animation.loop = false;
    } else if (this.props.isSuccessful) {
      Animated.timing(this.state.top, { toValue: 0, duration: 0 }).start();
      Animated.timing(this.state.opacity, { toValue: 1 }).start();

      this.animation.play();
    }
  }

  render() {
    return (
      <AnimatedContainer
        style={{
          top: this.state.top,
          opacity: this.state.opacity
        }}
      >
        <Lottie
          source={require("../assets/lottie-checked-done.json")}
          autoPlay={false}
          loop={false}
          ref={animation => (this.animation = animation)}
        />
        <Message>
          {this.props.screen === "signup" ? "Signup Successful" : null}
        </Message>
      </AnimatedContainer>
    );
  }
}

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  align-items: center;
  justify-content: center;
`;

const Message = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 160px;
  color: #efb961;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

export default SuccessLoader;

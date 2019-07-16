import React from "react";
import styled from "styled-components";
import { Animated, Dimensions } from "react-native";
import Lottie from "lottie-react-native";

// Device screen height
const screenHeight = Dimensions.get("window").height;

// Loader used during loading state in app
class Loader extends React.Component {
  state = {
    top: new Animated.Value(0),
    opacity: new Animated.Value(0)
  };

  componentDidMount() {
    if (!this.props.isLoading) {
      Animated.timing(this.state.top, {
        toValue: screenHeight,
        duration: 0
      }).start();
      Animated.timing(this.state.opacity, { toValue: 0 }).start();

      this.animation.loop = false;
    }
  }

  componentDidUpdate() {
    if (!this.props.isLoading) {
      Animated.timing(this.state.top, {
        toValue: screenHeight,
        duration: 0
      }).start();
      Animated.timing(this.state.opacity, { toValue: 0 }).start();

      this.animation.loop = false;
    } else if (this.props.isLoading) {
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
          source={require("../../assets/loading.json")}
          autoPlay={false}
          loop
          ref={animation => (this.animation = animation)}
        />
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
  z-index: -1;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

export default Loader;

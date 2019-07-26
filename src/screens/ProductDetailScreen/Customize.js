import React from "react";
import { View, Animated } from "react-native";
import styled from "styled-components";
import { Hexagon, SmallHexagon } from "../../components/Hexagon";
import colors from "../../globals/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

class Customize extends React.Component {
  state = {
    sizeIndex: 0,
    colorIndex: 0,
    bottom: new Animated.Value(0),
    height: new Animated.Value(0)
  };

  componentDidMount() {
    if (this.props.isCustomizePopupOpen) {
      Animated.spring(this.state.bottom, { toValue: 82 }).start();
      Animated.spring(this.state.height, { toValue: 280 }).start();
    }
    if (!this.props.isCustomizePopupOpen) {
      Animated.spring(this.state.bottom, { toValue: -40 }).start();
      Animated.timing(this.state.height, { toValue: 0, duration: 0 }).start();
    }
  }

  componentDidUpdate() {
    if (this.props.isCustomizePopupOpen) {
      Animated.spring(this.state.bottom, { toValue: 82 }).start();
      Animated.spring(this.state.height, { toValue: 280 }).start();
    }
    if (!this.props.isCustomizePopupOpen) {
      Animated.spring(this.state.bottom, { toValue: -40 }).start();
      Animated.timing(this.state.height, { toValue: 0, duration: 0 }).start();
    }
  }

  render() {
    const { sizeIndex, colorIndex } = this.state;
    const { screen } = this.props;

    return screen === "editProduct" ? (
      <AnimatedContainerTwo>
        <Wrapper>
          <Label>size</Label>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {productSizes.map((size, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.setState({ sizeIndex: index })}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Hexagon
                  strokeColor={sizeIndex === index && colors.yellow}
                  fillColor={sizeIndex === index && colors.yellow}
                  color={sizeIndex === index && colors.white}
                  size={size}
                />
              </TouchableOpacity>
            ))}
          </View>
        </Wrapper>
        <Wrapper>
          <Label>colour</Label>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {productColors.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.setState({ colorIndex: index })}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <SmallHexagon
                  fillColor={color}
                  strokeColor={colorIndex === index && color}
                />
              </TouchableOpacity>
            ))}
          </View>
        </Wrapper>
      </AnimatedContainerTwo>
    ) : (
      <AnimatedContainer
        style={{
          bottom: this.state.bottom,
          height: this.state.height
        }}
      >
        <Wrapper>
          <Label>size</Label>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {productSizes.map((size, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.setState({ sizeIndex: index })}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Hexagon
                  strokeColor={sizeIndex === index && colors.yellow}
                  fillColor={sizeIndex === index && colors.yellow}
                  color={sizeIndex === index && colors.white}
                  size={size}
                />
              </TouchableOpacity>
            ))}
          </View>
        </Wrapper>
        <Wrapper>
          <Label>colour</Label>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {productColors.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.setState({ colorIndex: index })}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <SmallHexagon
                  fillColor={color}
                  strokeColor={colorIndex === index && color}
                />
              </TouchableOpacity>
            ))}
          </View>
        </Wrapper>
      </AnimatedContainer>
    );
  }
}

const Container = styled.View`
  height: 280px;
  width: 100%;
  padding: 20px 15px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 82px;
`;

const ContainerTwo = styled.View`
  height: 280px;
  width: 100%;
  padding: 20px 15px;
  background: rgba(255, 255, 255, 0.9);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const AnimatedContainerTwo = Animated.createAnimatedComponent(ContainerTwo);

const Wrapper = styled.View`
  margin-bottom: 30px;
  align-items: flex-start;
`;

const Label = styled.Text`
  text-transform: uppercase;
  font-size: 21px;
  font-family: sourceSansProRegular;
  margin-bottom: 15px;
  color: #454545;
`;

const productSizes = ["xs", "s", "m", "l", "xl", "xxl"];
const productColors = ["#454545", "#D3604F", "#8CB7D2", "#A1CF85", "#9F93BF"];

export default Customize;

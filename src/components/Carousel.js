import React, { Component } from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import styled from "styled-components";

const screenWidth = Dimensions.get("screen").width;
const ItemWidth = 300.0;

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  state = {
    slider1ActiveSlide: 1
  };

  _renderItem({ item }) {
    return (
      <Container>
        <Image source={{ uri: item.source.uri }} />
      </Container>
    );
  }

  render() {
    return (
      <Carousel
        data={this.props.images}
        itemWidth={ItemWidth}
        sliderWidth={screenWidth}
        activeSlideAlignment="center"
        renderItem={this._renderItem}
      />
    );
  }
}

const Container = styled.View`
  height: 400px;
  width: ${screenWidth};
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 300px;
  height: 300px;
`;

export default ImageCarousel;

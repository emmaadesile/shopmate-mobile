import React from "react";
import Svg, { G, Path } from "react-native-svg";

const Polygon = props => (
  <Svg width={33} height={39} {...props}>
    <G stroke="#FFF" strokeWidth={2} fill="none" fillRule="evenodd">
      <Path d="M16.5 2l15.155 8.75v17.5L16.5 37 1.345 28.25v-17.5z" />
      <Path d="M16.5 11l7.361 4.25v8.5L16.5 28l-7.361-4.25v-8.5z" />
    </G>
  </Svg>
);

export default Polygon;

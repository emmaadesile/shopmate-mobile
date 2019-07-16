import React from "react";
import Svg, { Path, G } from "react-native-svg";

const ShopIcon = props => (
  <Svg width={18} height={22} {...props}>
    <G stroke={props.strokeColor} fill="none" fillRule="evenodd">
      <Path strokeWidth={2} d="M9 2l7.794 4.5v9L9 20l-7.794-4.5v-9z" />
      <Path
        strokeWidth={3}
        fill={props.fillColor}
        d="M9 8l2.598 1.5v3L9 14l-2.598-1.5v-3z"
      />
    </G>
  </Svg>
);

export default ShopIcon;

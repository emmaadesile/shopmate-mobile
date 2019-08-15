import React from "react";
import Svg, { Path } from "react-native-svg";

const Rhombus = props => (
  <Svg width={15} height={15} {...props}>
    <Path
      d="M7.5 0L15 7.5 7.5 15 0 7.5z"
      fill={props.fillColor || "#c7c7c7"}
      fillRule="evenodd"
    />
  </Svg>
);

export default Rhombus;

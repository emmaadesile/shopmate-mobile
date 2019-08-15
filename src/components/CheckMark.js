import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const Checkmark = props => (
  <Svg width={64} height={64} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#EFB961" cx={32} cy={32} r={32} />
      <Path
        d="M47 21L26 42M24.636 42.636l-7.593-7.593"
        stroke="#FFF"
        strokeWidth={3}
        strokeLinecap="square"
      />
    </G>
  </Svg>
);

export default Checkmark;

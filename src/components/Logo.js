import React from "react";
import Svg, { G, Text, TSpan, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Logo = props => (
  <Svg width={53} height={31} {...props}>
    <G fill="none" fillRule="evenodd">
      <Text
        fontFamily="AdventPro-Light, Advent Pro"
        fontSize={23.24}
        fontWeight={300}
        fill="#454545"
        transform="translate(-5)"
      >
        <TSpan x={5.274} y={22}>
          {"storex"}
        </TSpan>
      </Text>
      <Path
        d="M1.5 29.5h50M1.5 1.5h50"
        stroke="#454545"
        strokeWidth={3}
        strokeLinecap="square"
      />
    </G>
  </Svg>
);

export default Logo;

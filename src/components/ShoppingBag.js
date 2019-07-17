import React from "react";
import Svg, { G, Path, Ellipse } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ShoppingBag = props => (
  <Svg width={props.width || "36"} height={props.height || "38"} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M5.111 12.53L2.045 34.242c-.183 1.296.65 2.258 1.945 2.258h28.02c1.29 0 2.127-.967 1.945-2.258L30.889 12.53c-.206-1.458-1.61-2.677-3.078-2.677H8.19c-1.464 0-2.873 1.226-3.078 2.677z"
        stroke={props.fillColor}
        strokeWidth={2}
      />
      <Path
        d="M9.238 14.926L6.798 32.21c-.027.19.042.27.238.27h21.79c.199 0 .265-.076.237-.27l-2.44-17.284c-.05-.353-.439-.69-.801-.69H10.04c-.36 0-.752.34-.802.69z"
        stroke={props.innerStrokeColor}
        strokeWidth={2}
        fill={props.innerFillColor}
      />
      <G transform="translate(11.302 2)">
        <Ellipse
          fill={props.fillColor}
          cx={1.047}
          cy={10.8}
          rx={1.047}
          ry={1.059}
        />
        <Ellipse
          fill={props.fillColor}
          cx={11.93}
          cy={10.8}
          rx={1.047}
          ry={1.059}
        />
        <Path
          d="M.87 11.163V7.117S.281.021 6.612.021c6.331 0 5.418 6.8 5.418 6.8v4.008"
          stroke={props.strokeColor}
          strokeWidth={2}
        />
      </G>
    </G>
  </Svg>
);

export default ShoppingBag;

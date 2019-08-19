import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Location = props => (
  <Svg width={31} height={31} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle
        fill={props.fillColor || "#F2F2F2"}
        cx={15.5}
        cy={15.5}
        r={15.5}
      />
      <Path
        d="M14.987 22.005S13.425 19 12.99 18.015l8.024-7.593-6.027 11.583zm-5.99-6.484l11.48-5.487-7.986 7.482-3.494-1.995zm13.477-7.482L7 15.52s5.018 3.022 4.992 2.992c-.009-.01 2.995 5.487 2.995 5.487s7.861-15.213 7.986-15.462c.11-.312-.125-.655-.5-.5z"
        fill={props.pathFill || "#999"}
      />
    </G>
  </Svg>
);

export default Location;

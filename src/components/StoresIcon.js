import React from "react";
import Svg, { Path, G } from "react-native-svg";

const StoresIcon = props => (
  <Svg width={17} height={22} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M8.5 19.937c-1.178.007-7.083-8.813-7.083-11.687 0-3.796 3.17-6.875 7.083-6.875 3.912 0 7.083 3.079 7.083 6.875 0 2.836-5.923 11.694-7.083 11.687zM8.5 0C3.806 0 0 3.694 0 8.25 0 11.7 7.087 22.008 8.5 22c1.391.008 8.5-10.347 8.5-13.75C17 3.694 13.194 0 8.5 0z"
        fill={props.fillColor}
      />
      <Path
        d="M8.5 4.812c-1.956 0-3.542 1.54-3.542 3.438 0 1.899 1.586 3.437 3.542 3.437 1.956 0 3.542-1.538 3.542-3.437 0-1.899-1.586-3.438-3.542-3.438z"
        fill={props.fillColor}
      />
      <Path
        d="M8.5 10.312c-1.174 0-2.125-.923-2.125-2.062 0-1.14.951-2.063 2.125-2.063s2.125.924 2.125 2.063c0 1.14-.951 2.062-2.125 2.062z"
        fill={props.innerCircle}
      />
    </G>
  </Svg>
);

export default StoresIcon;

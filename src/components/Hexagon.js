import React from "react";
import Svg, { G, Path } from "react-native-svg";
import styled from "styled-components";

const Hexagon = props => (
  <Container>
    <Svg width={45} height={53} {...props}>
      <Path
        d="M22.5 2l21.218 12.25v24.5L22.5 51 1.282 38.75v-24.5z"
        stroke={props.strokeColor || "#999"}
        strokeWidth={2}
        fill={props.fillColor || "none"}
        fillRule="evenodd"
      />
    </Svg>
    <Size color={props.color}>{props.size}</Size>
  </Container>
);

const SmallHexagon = props => (
  <Container>
    <Svg width={48} height={55} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path
          stroke={props.strokeColor || "#EEECEC"}
          strokeWidth={2}
          d="M23.745 1.875L46.04 14.718v25.685L23.745 53.245 1.449 40.403V14.718z"
        />
        <Path
          fill={props.fillColor || "#454545"}
          d="M24.082 15.085l11.147 6.42v12.843L24.082 40.77l-11.148-6.422V21.506z"
        />
      </G>
    </Svg>
  </Container>
);

const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const Size = styled.Text`
  font-size: 15px;
  position: absolute;
  top: 15px;
  font-family: sourceSansProBold;
  text-transform: uppercase;
  color: ${props => props.color || "#999"};
`;

export { SmallHexagon, Hexagon };

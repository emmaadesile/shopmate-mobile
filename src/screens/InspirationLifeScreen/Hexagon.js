import React from "react";
import styled from "styled-components";

const Hexagon = () => (
  <HexgonOuter>
    <HexagonBefore />
    <HexagonAfter />
  </HexgonOuter>
);

export default Hexagon;

const HexgonOuter = styled.View`
  width: 280px;
  height: 180px;
  background-color: #eff1f0;
`;

const HexagonBefore = styled.View`
  position: absolute;
  top: -80px;
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 140px;
  border-right-width: 140px;
  border-bottom-width: 80px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #eff1f0;
`;

const HexagonAfter = styled.View`
  position: absolute;
  bottom: -80px;
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 140px;
  border-right-width: 140px;
  border-bottom-width: 80px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #eff1f0;
  transform: rotate(180deg);
`;

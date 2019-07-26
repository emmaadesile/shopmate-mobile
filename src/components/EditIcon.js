import React from "react";
import Svg, { Path } from "react-native-svg";

const EditIcon = props => (
  <Svg width={29} height={30} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 1H4a4 4 0 00-4 4v21a4 4 0 004 4h21a4 4 0 004-4V10h-1v16a3 3 0 01-3 3H4a3 3 0 01-3-3V5a3 3 0 013-3h14V1z"
      fill="#A9A9A9"
    />
    <Path
      d="M8.13 16.304l-2.746 7.629a.5.5 0 00.663.63l6.78-2.824L25.87 8.152M8.13 16.304L20.652 3.261M8.13 16.304l4.696 4.892M20.652 3.26l1.762-1.835a2 2 0 012.81-.074l2.3 2.155a2 2 0 01.074 2.844L25.87 8.152m-5.218-4.891l5.218 4.891"
      stroke="#A9A9A9"
    />
  </Svg>
);

export default EditIcon;

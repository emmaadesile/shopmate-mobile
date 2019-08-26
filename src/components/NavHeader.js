import React from "react";
import { TouchableOpacity, Platform } from "react-native";
import styled from "styled-components";
import * as Icon from "@expo/vector-icons";

const os = Platform.OS;

class NavHeader extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: os === "android" ? 30 : null }}>
        <TouchableOpacity onPress={() => this.props.openDrawer()}>
          <IconView>
            <Icon.Ionicons name="ios-menu" size={35} color="#454545" />
          </IconView>
        </TouchableOpacity>
        <Logo source={require("../../assets/logo.png")} />
      </Container>
    );
  }
}

export default NavHeader;

const Container = styled.View`
  width: 100%;
  height: 50px;
`;

const Logo = styled.Image`
  width: 75px;
  height: 36px;
  align-self: center;
`;

const IconView = styled.View`
  position: absolute;
  top: 0;
  left: 15px;
`;

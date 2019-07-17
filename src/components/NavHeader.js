import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  SafeAreaView
} from "react-native";
import styled from "styled-components";
import * as Icon from "@expo/vector-icons";

const os = Platform.OS;

const NavHeader = ({ toggleMenu }) => {
  return (
    <SafeAreaView>
      {os === "android" ? (
        <Container style={{ marginTop: 40 }}>
          <TouchableNativeFeedback onPress={toggleMenu}>
            <IconView>
              <Icon.Ionicons name="ios-menu" size={35} color="#454545" />
            </IconView>
          </TouchableNativeFeedback>
          <Logo source={require("../../assets/logo.png")} />
        </Container>
      ) : (
        <Container>
          <TouchableOpacity onPress={toggleMenu}>
            <IconView>
              <Icon.Ionicons name="ios-menu" size={35} color="#454545" />
            </IconView>
          </TouchableOpacity>
          <Logo source={require("../../assets/logo.png")} />
        </Container>
      )}
    </SafeAreaView>
  );
};

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
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 15px;
  z-index: 10;
`;

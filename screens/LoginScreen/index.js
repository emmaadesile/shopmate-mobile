import React from "react";
import { TouchableOpacity, View } from "react-native";

import {
  Container,
  Logo,
  BodyText,
  Form,
  Input,
  LoginButton,
  SubText,
  ButtonText
} from "./styles";

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Logo source={require("../../assets/storex_logo.png")} />
        <BodyText>Login</BodyText>
        <Form>
          <Input placeholder="Email" keyboardType="email-address" />
          <Input placeholder="Password" secureTextEntry={true} />
          <TouchableOpacity
            style={{
              width: "100%"
            }}
          >
            <LoginButton>
              <ButtonText>Sign in</ButtonText>
            </LoginButton>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <SubText>Not a member?</SubText>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <SubText color="#EFB961">Sign up</SubText>
            </TouchableOpacity>
          </View>
        </Form>
      </Container>
    );
  }
}

export default LoginScreen;

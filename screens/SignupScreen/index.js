import React from "react";
import { TouchableOpacity, View } from "react-native";

import {
  Container,
  Logo,
  BodyText,
  Form,
  Input,
  SignupButton,
  SubText,
  ButtonText
} from "./styles";

class SignupScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Logo source={require("../../assets/storex_logo.png")} />
        <BodyText>Create An Account</BodyText>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Email" keyboardType="email-address" />
          <Input placeholder="Password" secureTextEntry={true} />
          <TouchableOpacity
            style={{
              width: "100%"
            }}
          >
            <SignupButton>
              <ButtonText>Sign up</ButtonText>
            </SignupButton>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <SubText>Already a member?</SubText>
            <TouchableOpacity
              onPress={() => this.props.navigation.push("Login")}
            >
              <SubText color="#EFB961">Sign in</SubText>
            </TouchableOpacity>
          </View>
        </Form>
      </Container>
    );
  }
}

export default SignupScreen;

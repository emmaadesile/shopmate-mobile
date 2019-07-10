import React from "react";
import { TouchableOpacity, View } from "react-native";
import { validateLoginForm } from "../../helpers/formValidation";

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

  state = {
    email: "",
    password: "",
    isEmailFocused: false,
    isPasswordFocused: false,
    isValid: false,
    error: {}
  };

  onEmailFocusChange = () => {
    this.setState(prevState => ({ isEmailFocused: !prevState.isEmailFocused }));
  };

  onPasswordFocusChange = () => {
    this.setState(prevState => ({
      isPasswordFocused: !prevState.isPasswordFocused
    }));
  };

  validateForm = () => {
    const { email, password } = this.state;
    const { isValid, error } = validateLoginForm({ email, password });

    this.setState(prevState => ({
      ...prevState,
      error,
      isValid
    }));
  };

  render() {
    return (
      <Container>
        <Logo source={require("../../assets/storex_logo.png")} />
        <BodyText>Sign in to your Account</BodyText>
        <Form>
          <Input
            onFocus={this.onEmailFocusChange}
            onBlur={this.onEmailFocusChange}
            onChangeText={email => {
              this.setState({ email });
              this.validateForm();
            }}
            value={this.state.email}
            placeholder="Email"
            keyboardType="email-address"
            borderColor={this.state.isEmailFocused ? "#efb961" : "#d8d8d8"}
          />
          <Input
            onFocus={this.onPasswordFocusChange}
            onBlur={this.onPasswordFocusChange}
            onChangeText={password => {
              this.setState({ password });
              this.validateForm();
            }}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry={true}
            borderColor={this.state.isPasswordFocused ? "#efb961" : "#d8d8d8"}
          />
          <TouchableOpacity
            disabled={!this.state.isValid}
            style={{
              width: "100%"
            }}
          >
            <LoginButton
              backgroundColor={!this.state.isValid && "rgba(239,185,97,0.44)"}
            >
              <ButtonText> Sign in</ButtonText>
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
              <SubText color="#EFB961"> Sign up</SubText>
            </TouchableOpacity>
          </View>
        </Form>
      </Container>
    );
  }
}

export default LoginScreen;

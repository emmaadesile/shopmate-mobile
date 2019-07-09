import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text
} from "react-native";
import axios from "axios";
import { Keyboard } from "react-native";
import { validateSignupForm } from "../../helpers/formValidation";
import SuccessLoader from "../../components/SuccessLoader";

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
import Loader from "../../components/Loader";

const baseURL = `https://mobilebackend.turing.com`;

class SignupScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    name: "",
    email: "",
    password: "",
    isNameFocused: false,
    isEmailFocused: false,
    isPasswordFocused: false,
    isValid: false,
    error: {},
    isSuccessful: false,
    isLoading: false
  };

  onNameFocusChange = () => {
    this.setState(prevState => ({ isNameFocused: !prevState.isNameFocused }));
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
    const { name, email, password } = this.state;
    const { isValid, error } = validateSignupForm({ name, email, password });

    this.setState(prevState => ({
      ...prevState,
      error,
      isValid
    }));
  };

  handleLogin = () => {
    this.closeKeyboard();
    this.setState({
      name: "",
      email: "",
      password: ""
    });

    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false });
      this.setState({ isSuccessful: true });
    }, 2000);

    setTimeout(() => {
      this.props.navigation.push("Shop");
    }, 3000);

    // const { name, email, password } = this.state;
    // axios
    //   .post(`${baseURL}/customers`, {
    //     name,
    //     email,
    //     password
    //   })
    //   .then(response => console.log(response.data))
    //   .catch(error => console.log(error));
  };

  closeKeyboard = () => {
    Keyboard.dismiss();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.closeKeyboard}>
        <Container behavior="padding" enabled>
          <Logo source={require("../../assets/storex_logo.png")} />
          <BodyText>Create An Account</BodyText>
          <Form>
            <Input
              onFocus={this.onNameFocusChange}
              onBlur={this.onNameFocusChange}
              onChangeText={name => {
                this.setState({ name: name.toLocaleLowerCase() });
                this.validateForm();
              }}
              borderColor={this.state.isNameFocused && "#efb961"}
              value={this.state.name}
              placeholder="Name"
              ref="name"
            />
            <Input
              onFocus={this.onEmailFocusChange}
              onBlur={this.onEmailFocusChange}
              onChangeText={email => {
                this.setState({ email: email.toLocaleLowerCase() });
                this.validateForm();
              }}
              borderColor={this.state.isEmailFocused && "#efb961"}
              value={this.state.email}
              placeholder="Email"
              keyboardType="email-address"
            />
            <Input
              onFocus={this.onPasswordFocusChange}
              onBlur={this.onPasswordFocusChange}
              secureTextEntry={true}
              onChangeText={password => {
                this.setState({ password });
                this.validateForm();
              }}
              borderColor={this.state.isPasswordFocused && "#efb961"}
              value={this.state.password}
              placeholder="Password"
            />
            <TouchableOpacity
              onPress={this.handleLogin}
              disabled={!this.state.isValid}
              style={{
                width: "100%"
              }}
            >
              <SignupButton
                backgroundColor={!this.state.isValid && "rgba(239,185,97,0.44)"}
              >
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
                <SubText color="#EFB961"> Sign in</SubText>
              </TouchableOpacity>
            </View>
          </Form>
          <Loader isLoading={this.state.isLoading} />
          <SuccessLoader isSuccessful={this.state.isSuccessful} />
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

export default SignupScreen;

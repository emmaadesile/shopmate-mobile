import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text
} from "react-native";
import { connect } from "react-redux";
import { Keyboard } from "react-native";
import { BASEURL } from "react-native-dotenv";

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
import SuccessLoader from "../../components/SuccessLoader";
import { validateSignupForm } from "../../helpers/formValidation";
import signup from "../../store/actions/signupAction";

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

  handleLogin = async () => {
    this.closeKeyboard();
    this.setState({
      name: "",
      email: "",
      password: ""
    });

    const { name, email, password } = this.state;
    const { dispatch } = this.props;

    try {
      await dispatch(signup(name, email, password));

      if (this.props.isSuccessful) {
        this.props.navigation.push("Shop");
      }
    } catch (error) {
      console.log(error);
    }
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
          <Loader isLoading={this.props.loading} />
          <SuccessLoader isSuccessful={this.props.isSuccessful} />
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signup.loading,
  user: state.signup.user,
  error: state.signup.error,
  isSuccessful: state.signup.isSuccessful
});

export default connect(mapStateToProps)(SignupScreen);

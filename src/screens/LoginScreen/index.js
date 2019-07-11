import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard
} from "react-native";
import { connect } from "react-redux";
import { StackActions, NavigationActions } from "react-navigation";
import { validateLoginForm } from "../../helpers/formValidation";
import signin from "../../store/actions/signinAction";
import Loader from "../../components/Loader";
import SuccessLoader from "../../components/SuccessLoader";

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

  closeKeyboard = () => {
    Keyboard.dismiss();
  };

  handleLogin = async () => {
    this.closeKeyboard();
    const { email, password } = this.state;

    this.setState({
      email: "",
      password: ""
    });

    const { dispatch } = this.props;

    try {
      await dispatch(signin(email, password));

      if (this.props.isSuccessful) {
        this.props.navigation.navigate("Shop");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // redirectToShoppingScreen = () => {
  //   const resetAction = StackActions.reset({
  //     index: 0,
  //     key: undefined,
  //     actions: [NavigationActions.navigate({ routeName: "Shop" })]
  //   });
  //   this.props.navigation.dispatch(resetAction);
  // };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.closeKeyboard}>
        <Container behavior="padding" enabled>
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
              onPress={this.handleLogin}
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
              <TouchableOpacity
                onPress={() => this.props.navigation.push("Signup")}
              >
                <SubText color="#EFB961"> Sign up</SubText>
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
  loading: state.signin.loading,
  isSuccessful: state.signin.isSuccessful,
  user: state.signin.user,
  error: state.signin.user
});

export default connect(mapStateToProps)(LoginScreen);

import React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import Loader from "../../components/Loader";
import { Container } from "./styles";
import { getUserToken } from "../../store/actions/authAction";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  state = {
    loading: true
  };

  _bootstrapAsync = async () => {
    const { navigate } = this.props.navigation;

    try {
      const isFirstTimeAccessingApp = await AsyncStorage.getItem("first_time");

      if (isFirstTimeAccessingApp === null) {
        this.setState = { loading: false };
        return navigate("AppIntro");
      }

      this.setState = { loading: false };
      await this.props.getUserToken();

      navigate(this.props.userToken ? "App" : "Auth");
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Container>
        <Loader isLoading={this.state.loading} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  userToken: state.userToken
});

const mapDispatchToProps = dispatch => ({
  getUserToken: () => dispatch(getUserToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingScreen);

import React from "react";
import { AsyncStorage } from "react-native";
import Loader from "../../components/Loader";
import { getUserToken } from "../../store/actions/authAction";
import { Container } from "./styles";

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
      const userToken = await getUserToken();
      if (isFirstTimeAccessingApp === null) {
        this.setState = { loading: false };
        return navigate("AppIntro");
      }

      this.setState({ loading: false });

      navigate(userToken ? "App" : "Auth");
      // navigate("App");
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

export default AuthLoadingScreen;

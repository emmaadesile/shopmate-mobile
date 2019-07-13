import React from "react";
import AppNavigator from "./src/navigator/AppNavigator";
import { Provider } from "react-redux";
import store from "./src/store";
import * as Font from "expo-font";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    try {
      await Font.loadAsync({
        sourceSansProRegular: require("./assets/fonts/SourceSansProRegular.otf"),
        sourceSansProLight: require("./assets/fonts/SourceSansProLight.otf"),
        sourceSansProBold: require("./assets/fonts/SourceSansProBold.otf"),
        sourceSansProExtraLight: require("./assets/fonts/SourceSansProLight.otf")
      });
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.error("Unable to load custom fonts");
    }
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.fontLoaded ? <AppNavigator /> : null}
      </Provider>
    );
  }
}

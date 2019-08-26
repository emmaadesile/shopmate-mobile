import React from "react";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
import AppNavigator from "./src/navigator/AppNavigator";
import AppDrawerNavigator from "./src/navigator/AppDrawerNavigiator";
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
        sourceSansProExtraLight: require("./assets/fonts/SourceSansProLight.otf"),
        Bodoni: require("./assets/fonts/Bodoni.ttf")
      });
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.error("Unable to load custom fonts");
    }
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.fontLoaded ? (
          <React.Fragment>
            <AppNavigator />
            {/* <AppDrawerNavigator /> */}
            <FlashMessage position="top" />
          </React.Fragment>
        ) : null}
      </Provider>
    );
  }
}

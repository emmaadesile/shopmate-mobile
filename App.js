import React from "react";
import AppNavigator from "./src/navigator";
import { Provider } from "react-redux";
import { YellowBox } from "react-native";
import store from "./src/store";

YellowBox.ignoreWarnings(["Remote Debugger"]);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

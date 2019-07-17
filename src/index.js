import React from "react";
import { connect } from "react-redux";
import AppNavigator from "./navigator/AppNavigator";
import MainNavigation from "./components/MainNavigation";

class AppContainer extends React.Component {
  render() {
    return (
      <>
        <MainNavigation />
        <AppNavigator />
      </>
    );
  }
}

export default AppContainer;

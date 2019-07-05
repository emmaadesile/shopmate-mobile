import React from "react";
import renderer from "react-test-renderer";
import LoginScreen from "../screens/LoginScreen";

describe("Login Screen", () => {
  it("renders the the login screen", () => {
    const component = renderer.create(<LoginScreen />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

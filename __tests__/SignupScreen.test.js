import React from "react";
import renderer from "react-test-renderer";
import SignupScreen from "../screens/SignupScreen";

it("renders the signup screen", () => {
  const component = renderer.create(<SignupScreen />).toJSON();
  expect(component).toMatchSnapshot();
});

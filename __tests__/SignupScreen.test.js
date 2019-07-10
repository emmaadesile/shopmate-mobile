import React from "react";
import renderer from "react-test-renderer";
import SignupScreen from "../screens/SignupScreen";
import { JestEnvironment } from "@jest/environment";

describe("Signup Screen", () => {
  const props = {
    navigation: jest.fn()
  };
  it("renders the signup screen", () => {
    const component = renderer.create(<SignupScreen {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

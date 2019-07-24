import React from "react";
import AppIntroScreen from "../src/screens/AppIntroScreen";
import renderer from "react-test-renderer";

const props = {
  slides: [],
  onDone: jest.fn(),
  nextLabel: "Continue",
  bottomButton: true,
  buttonStyle: jest.fn(),
  buttonTextStyle: jest.fn()
};

describe("Home screen", () => {
  it("Renders landing page", () => {
    const component = renderer.create(<AppIntroScreen {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

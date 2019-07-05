import React from "react";
import LandingPage from "../screens/HomeScreen";
import renderer from "react-test-renderer";

const props = {
  navigation: jest.fn()
};

describe("Home screen", () => {
  it("Renders landing page", () => {
    const component = renderer.create(<LandingPage {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

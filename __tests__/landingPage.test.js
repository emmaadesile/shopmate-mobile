import React from "react";
import LandingPage from "../screens/LandingPage";
import renderer from "react-test-renderer";

it("Renders landing page", () => {
  const component = renderer.create(<LandingPage />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component.children.length).toBe(2);
});

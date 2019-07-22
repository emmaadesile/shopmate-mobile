import React from "react";
import renderer from "react-test-renderer";
import Provider from "redux";
import SignupScreen from "../src/screens/SignupScreen";

describe("Signup Screen", () => {
  const props = {
    navigation: jest.fn()
  };

  const store = {
    loading: false,
    user: {},
    error: "",
    isSuccessful: false
  };

  it("renders the signup screen", () => {
    const component = renderer.create(
      <Provider store={store}>
        <SignupScreen {...props} />
        ).toJSON()
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

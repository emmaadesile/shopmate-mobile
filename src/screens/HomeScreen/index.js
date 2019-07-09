import React from "react";
import { StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    showRealApp: false
  };

  _onDone = () => {
    const { navigate } = this.props.navigation;
    return navigate("Signup");
  };

  render() {
    return (
      <>
        <AppIntroSlider
          slides={slides}
          onDone={this._onDone}
          nextLabel="Continue"
          bottomButton
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#3F3D56",
    height: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    elevation: 1
  },
  buttonTextStyle: {
    fontWeight: "bold",
    fontSize: 16
  },
  image: {
    width: 250,
    height: 250
  },
  text: {
    color: "#FFFFFF",
    fontSize: 17
  }
});

const slides = [
  {
    key: "screen1",
    text:
      "You can shop for any product. Just search, add to your cart, and checkout anytime.",
    textStyle: styles.text,
    image: require("../../assets/empty_cart.png"),
    imageStyle: styles.image,
    backgroundColor: "#22C0EB"
  },
  {
    key: "screen2",
    text: "Shopping for your items has never been more convinient. ",
    textStyle: styles.text,
    image: require("../../assets/shopping.png"),
    imageStyle: styles.image,
    backgroundColor: "#20d2bb"
  },
  {
    key: "screen3",
    textStyle: styles.text,
    text:
      "We deliver aywhere. Enjoy delivery to doorstep in the shortest time possible.",
    image: require("../../assets/deliveries.png"),
    imageStyle: styles.image,
    backgroundColor: "#22bcb5"
  }
];

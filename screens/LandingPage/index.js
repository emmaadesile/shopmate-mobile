import React from "react";
import {
  Container,
  Header,
  Logo,
  PageText,
  Button,
  ButtonText,
  ImageContainer,
  Image
} from "./styles";
import { TouchableOpacity, StyleSheet, LinearGradient } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    };
  }

  _onDone = () => {
    this.setState({ showRealApp: true });
  };

  _onSkip = () => {
    this.setState({ showRealApp: true });
  };

  render() {
    if (this.state.showRealApp) {
      return (
        <Container>
          <Header>
            <Logo source={require("../../assets/logo.png")} />
            <PageText>
              Follow the latest fashion trends and shop with storex!
            </PageText>
          </Header>
          <ImageContainer>
            <Image source={require("../../assets/man-in-suit.jpg")} />
            <LinearGradient
              colors={["rgba(222, 210, 91, 0)", "rgba(65, 63, 14, 1)"]}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
            />
          </ImageContainer>
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%"
            }}
          >
            <Button background="#EFB961">
              <ButtonText>Sign in</ButtonText>
            </Button>
          </TouchableOpacity>
        </Container>
      );
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this._onDone}
          onSkip={this._onSkip}
          nextLabel="Continue"
          bottomButton
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#3F3D56",
    height: 55,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    elevation: 1
  },
  buttonTextStyle: {
    fontWeight: "bold"
  },
  image: {
    width: 250,
    height: 250
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    marginTop: 16
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
    text: "Shopping for your items has never been more convinient.",
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
  // {
  //   key: "screen4",
  //   text: "Follow the latest fashion trends and shop with storex!",
  //   image: require("../../assets/man-in-suit.jpg"),
  //   imageStyle: styles.image,
  //   backgroundColor: "#22bcb5",
  //   buttonStyle: {
  //     height: 55,
  //     width: "90%",
  //     marginTop: 0,
  //     marginBottom: 15,
  //     marginLeft: "auto",
  //     marginRight: "auto",
  //     borderRadius: 30,
  //     background: "#efb961",
  //     alignItems: "center",
  //     justifyContent: "center"
  //   },
  //   buttonTextStyle: {
  //     color: "#fff",
  //     fontSize: "17px",
  //     textTransform: "uppercase",
  //     fontWeight: 600
  //   }
  // }
];

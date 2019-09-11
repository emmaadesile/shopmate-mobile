import React from "react";
import { SafeAreaView } from "react-native";
import { Container, Title, Body } from "./styles";

class CustomerServiceScreen2 extends React.PureComponent {
  static navigationOptions = {
    title: "SHOPPONG AT STOREX"
  };
  render() {
    return (
      <SafeAreaView>
        <Container>
          <Title>How to Shop</Title>
          <Body>
            Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl
            ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt
            nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim.
            Vestibulum gravida mauris at sollicitudin blandit.
          </Body>

          <Body>
            Donec urna nibh, vulputate commodo mauris et, porttitor porttitor
            mauris. Integer sit amet arcu sit amet massa efficitur vestibulum.
            Curabitur aliquet tellus ut libero posuere, ut maximus ipsum
            fermentum.
          </Body>

          <Body>
            Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl
            ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt
            nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim.
            Vestibulum gravida mauris at sollicitudin blandit.
          </Body>

          <Body>
            Donec urna nibh, vulputate commodo mauris et, porttitor porttitor
            mauris. Integer sit amet arcu sit amet massa efficitur vestibulum.
            Curabitur aliquet tellus ut libero posuere, ut maximus ipsum
            fermentum. Donec finibus molestie sapien sit amet tincidunt. Nunc
            ultrices nisl ante, ac ullamcorper dolor pulvinar sit amet. Sed quis
            tincidunt nunc. Pellentesque eget turpis quam. Vivamus faucibus quam
            enim. Vestibulum gravida mauris at sollicitudin blandit.
          </Body>
        </Container>
      </SafeAreaView>
    );
  }
}

export default CustomerServiceScreen2;

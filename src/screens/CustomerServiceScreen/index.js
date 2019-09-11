import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import * as Icon from "@expo/vector-icons";
import { Container, Item, Title, Subtitle } from "./styles";

class CustomerServiceScreen extends React.PureComponent {
  static navigationOptions = {
    title: "CUSTOMER SERVICE"
  };
  render() {
    return (
      <SafeAreaView>
        <Container>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this.props.navigation.navigate("CustomerService2")}
            >
              <Item>
                <View
                  style={{
                    position: "absolute",
                    right: 10
                  }}
                >
                  <Icon.Ionicons
                    name="ios-arrow-forward"
                    size={40}
                    color="#C6C6C6"
                  />
                </View>
                <Title>{item.label}</Title>
                <Subtitle>
                  Donec finibus molestie sapien sit amet tincidunt. Nunc
                </Subtitle>
              </Item>
            </TouchableOpacity>
          ))}
        </Container>
      </SafeAreaView>
    );
  }
}

export default CustomerServiceScreen;

const items = [
  { label: "Shopping at Storex" },
  { label: "Payments and Sales Tax" },
  { label: "Order Tracking" },
  { label: "Returns of online purchases" },
  { label: "Returns of store purchases" },
  { label: "Recalled Items" },
  { label: "Our Responsibility" }
];

import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import * as Icon from "@expo/vector-icons";
import Rhombus from "../../components/Rhombus";

import {
  Container,
  Title,
  Item,
  Subtitle,
  Text,
  IconView,
  Wrapper
} from "./styles";
import NavHeader from "../../components/NavHeader";

class CustomerSupportScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView>
        <Container>
          <NavHeader openDrawer={this.props.navigation.openDrawer} />

          <Wrapper style={{ alignItems: "center" }}>
            <Title>customer support</Title>
          </Wrapper>

          <View
            style={{
              width: "100%",
              position: "absolute",
              top: 95,
              left: "50%",
              zIndex: 10
            }}
          >
            <Rhombus fillColor="#EFB961" />
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("CustomerSupportContact")
            }
          >
            <Item>
              <IconView>
                <Icon.Ionicons
                  name="ios-arrow-forward"
                  color="#C6C6C6"
                  size={32}
                />
              </IconView>

              <Subtitle>contact</Subtitle>
              <Text>Ask questions or get contact info</Text>
            </Item>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CustomerService")}
          >
            <Item>
              <IconView>
                <Icon.Ionicons
                  name="ios-arrow-forward"
                  color="#C6C6C6"
                  size={32}
                />
              </IconView>
              <Subtitle>customer service</Subtitle>
              <Text>FAQ and company polices</Text>
            </Item>
          </TouchableOpacity>
        </Container>
      </SafeAreaView>
    );
  }
}

export default CustomerSupportScreen;

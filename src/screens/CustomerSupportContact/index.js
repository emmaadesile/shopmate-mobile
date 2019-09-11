import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView, View } from "react-native";
import * as Icon from "@expo/vector-icons";
import Rhombus from "../../components/Rhombus";
import {
  Container,
  Item,
  OuterCircle,
  InnerCircle,
  Label,
  Text,
  Button,
  ButtonText,
  PhoneNumber
} from "./styles";

class CustomerSupportContact extends React.PureComponent {
  static navigationOptions = {
    title: "CONTACT"
  };

  render() {
    return (
      <SafeAreaView>
        <Container>
          <View style={{ alignItems: "center" }}>
            <OuterCircle>
              <InnerCircle />
              <View
                style={{
                  position: "absolute",
                  top: 70,
                  transform: [{ rotate: "270deg" }]
                }}
              >
                <Icon.Ionicons name="ios-call" color="#fff" size={42} />
              </View>
              <PhoneNumber>855-555-555</PhoneNumber>
            </OuterCircle>
          </View>
          <Item
            style={{
              borderTopWidth: "1px",
              borderStyle: "solid",
              borderTopColor: "#bfbfbf"
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: "50%",
                top: -8
              }}
            >
              <Rhombus fillColor="#EFB961" />
            </View>
            <Label>Address:</Label>
            <View>
              <Text>45 Grand Central Terminal</Text>
              <Text>New York, NY 10017</Text>
            </View>
          </Item>
          <Item>
            <Label>Email:</Label>
            <Text color="#EFB961">info@storexapp.com</Text>
          </Item>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SendQuestion")}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Button>
              <ButtonText>send a question</ButtonText>
            </Button>
          </TouchableOpacity>
        </Container>
      </SafeAreaView>
    );
  }
}

export default CustomerSupportContact;

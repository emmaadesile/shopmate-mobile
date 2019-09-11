import React from "react";
import { SafeAreaView } from "react-native";
import { Container, Label, Input, Column, Button, ButtonText } from "./styles";

class CustomerSupportSendQuestion extends React.PureComponent {
  static navigationOptions = {
    title: "SEND A QUESTION"
  };

  render() {
    return (
      <SafeAreaView>
        <Container>
          <Column>
            <Label>Your Name</Label>
            <Input />
          </Column>
          <Column>
            <Label>Email</Label>
            <Input />
          </Column>
          <Column>
            <Label>Phone</Label>
            <Input />
          </Column>
          <Column>
            <Label>Subject</Label>
            <Input />
          </Column>
          <Column>
            <Label>Your Message</Label>
            <Input />
          </Column>

          <Button>
            <ButtonText>send</ButtonText>
          </Button>
        </Container>
      </SafeAreaView>
    );
  }
}

export default CustomerSupportSendQuestion;

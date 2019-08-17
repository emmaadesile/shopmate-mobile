import React from "react";
import {
  Container,
  TopSection,
  BottomSection,
  OrderId,
  Title,
  Text,
  Button,
  ButtonText,
  Wrapper
} from "./styles";
import Checkmark from "../../components/CheckMark";
import NavHeader from "../../components/NavHeader";
import { SafeAreaView } from "react-navigation";
import CheckoutTopSection from "../../components/CheckoutTopSection";

class CompleteScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView>
        <Container>
          <NavHeader />
          <CheckoutTopSection activeScreen="complete" />
          <TopSection>
            <Checkmark />
            <Title>Thank you</Title>
            <Text>
              We’ve sent you an email with all the details of your order. You
              can track your shipment with the order id below.
            </Text>
            <Wrapper>
              <OrderId>c945387433</OrderId>
            </Wrapper>
          </TopSection>
          <BottomSection>
            <Button>
              <ButtonText>back to shop</ButtonText>
            </Button>
          </BottomSection>
        </Container>
      </SafeAreaView>
    );
  }
}

export default CompleteScreen;

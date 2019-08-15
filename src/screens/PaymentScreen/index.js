import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import NavHeader from "../../components/NavHeader";
import CheckoutTopSection from "../../components/CheckoutTopSection";
import colors from "../../globals/colors";
import {
  Container,
  Cards,
  Card,
  Label,
  CardForm,
  Title,
  Subtitle,
  Input,
  Wrapper,
  Image,
  Row,
  ShippingAddress,
  PaynowButton,
  ButtonText,
  Address,
  LabelWrapper
} from "./styles";
import {
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native-gesture-handler";

class PaymentScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    activeCard: "visa",
    creditCard: "",
    expiryDate: "",
    cvc: ""
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Container>
            <NavHeader />
            <CheckoutTopSection activeScreen="payment" />
            <View style={{ paddingLeft: 15, paddingRight: 15 }}>
              <Cards>
                <Card
                  borderColor={
                    this.state.activeCard === "paypal" && colors.yellow
                  }
                >
                  <TouchableWithoutFeedback
                    onPress={() => this.setState({ activeCard: "paypal" })}
                    style={styles.card}
                  >
                    <Image
                      source={require("../../../assets/paypalLogo.png")}
                      width="129px"
                      height="59px"
                    />
                  </TouchableWithoutFeedback>
                </Card>
                <Card
                  borderColor={
                    this.state.activeCard === "visa" && colors.yellow
                  }
                >
                  <TouchableWithoutFeedback
                    onPress={() => this.setState({ activeCard: "visa" })}
                    style={styles.card}
                  >
                    <Image
                      source={require("../../../assets/visaLogo.png")}
                      width="39px"
                      height="39px"
                    />
                  </TouchableWithoutFeedback>
                </Card>
              </Cards>
              <CardForm>
                <Title>card details</Title>
                <Subtitle>Enter your debit or credit card details</Subtitle>

                <Wrapper>
                  <Row>
                    <LabelWrapper>
                      <Label>Card No:</Label>
                    </LabelWrapper>
                    <Input
                      keyboardType="numeric"
                      onChangeText={creditCard => this.setState({ creditCard })}
                      value={
                        this.state.creditCard.length === 4 ||
                        this.state.creditCard.length === 9 ||
                        this.state.creditCard.length === 14
                          ? this.state.creditCard + "-"
                          : this.state.creditCard
                      }
                      maxLength={19}
                      placeholder="0000-0000-0000-0000"
                      placeholderTextColor="#C1C1C1"
                    />
                  </Row>
                  <Row>
                    <LabelWrapper>
                      <Label>Expiry:</Label>
                    </LabelWrapper>
                    <Input
                      keyboardType="numeric"
                      onChangeText={expiryDate => this.setState({ expiryDate })}
                      value={
                        this.state.expiryDate.length === 2
                          ? this.state.expiryDate + "/"
                          : this.state.expiryDate
                      }
                      maxLength={5}
                      placeholder="MM/YY"
                      placeholderTextColor="#C1C1C1"
                    />
                  </Row>
                  <Row borderColor="transparent">
                    <LabelWrapper>
                      <Label>CVC Code:</Label>
                    </LabelWrapper>
                    <Input
                      keyboardType="numeric"
                      onChangeText={cvc => this.setState({ cvc })}
                      value={this.state.cvc}
                      maxLength={3}
                      placeholder="123"
                      placeholderTextColor="#C1C1C1"
                    />
                  </Row>
                </Wrapper>
              </CardForm>
            </View>
            <View
              style={{
                paddingLeft: 10,
                paddingRight: 10
              }}
            >
              <ShippingAddress>
                <Address>
                  Donec urna nibh, vulputate commodo mauris et, porttitor
                  porttitor mauris. Integer sit amet arcu sit amet massa
                  efficitur vestibulum.
                </Address>
              </ShippingAddress>
              <TouchableOpacity
                onPress={() => this.props.navigation.push("Complete")}
              >
                <PaynowButton>
                  <ButtonText>pay now</ButtonText>
                </PaynowButton>
              </TouchableOpacity>
            </View>
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PaymentScreen;

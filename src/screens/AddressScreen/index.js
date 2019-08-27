import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View
} from "react-native";
import { connect } from "react-redux";
import debounce from "lodash.debounce";
import RadioForm from "react-native-simple-radio-button";
import updateAddress from "../../store/actions/updateAddress";
import getCustomer from "../../store/actions/getCustomer";
import { validateAddressForm } from "../../helpers/formValidation";
import CheckoutTopSection from "../../components/CheckoutTopSection";
import NavHeader from "../../components/NavHeader";
import Loading from "../../components/Loading";
import color from "../../globals/colors";
import {
  Container,
  AddressForm,
  Label,
  Input,
  SaveButton,
  ButtonText,
  Row,
  Column,
  DeliverButton,
  Title,
  AddressText
} from "./styles";

class AddressScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    countryList: "",
    address_1: "",
    address_2: "",
    city: "",
    region: "",
    mob_phone: "",
    postal_code: "",
    country: "",
    isValid: false,
    error: {},
    shipping_region_id: 4,
    isAddressOneFocused: false,
    isAddressTwoFocused: false,
    isCityFocused: false,
    isRegionFocused: false,
    isPostalCodeFocused: false,
    isCountryFocused: false,
    isMobilePhoneFocused: false
  };

  componentDidUpdate() {
    if (this.props.isSuccessful) {
      this.props.navigation.push("Payment");
    }
  }

  componentDidMount() {
    this.props.getCustomerDetails();
  }

  addressFormValidation = debounce(() => {
    const {
      address_1,
      city,
      region,
      postal_code,
      country,
      mob_phone
    } = this.state;
    const { error, isValid } = validateAddressForm({
      address_1,
      city,
      region,
      postal_code,
      country,
      mob_phone
    });

    this.setState(prevState => ({
      ...prevState,
      error,
      isValid
    }));
  }, 200);

  /**
   * @description toggles focus state on address1 input
   */
  onAddressOneFocusChange = () => {
    this.setState(prevState => ({
      isAddressOneFocused: !prevState.isAddressOneFocused
    }));
  };

  /**
   * @description toggles focus state on address2 input
   */
  onAddressTwoFocusChange = () => {
    this.setState(prevState => ({
      isAddressTwoFocused: !prevState.isAddressTwoFocused
    }));
  };

  /**
   * @description toggles focus state on city input
   */
  onCityFocusChange = () => {
    this.setState(prevState => ({
      isCityFocused: !prevState.isCityFocused
    }));
  };

  /**
   * @description toggles focus state on region input
   */
  onRegionFocusChange = () => {
    this.setState(prevState => ({
      isRegionFocused: !prevState.isRegionFocused
    }));
  };

  /**
   * @description toggles focus state on postal code input
   */
  onPostalCodeChange = () => {
    this.setState(prevState => ({
      isPostalCodeFocused: !prevState.isPostalCodeFocused
    }));
  };

  /**
   * @description toggles focus state on country input
   */
  onCountryFocusChaange = () => {
    this.setState(prevState => ({
      isCountryFocused: !prevState.isCountryFocused
    }));
  };

  /**
   * @description toggles focus state on mobile phone input
   */
  onMobilePhoneFocusChange = () => {
    this.setState(prevState => ({
      isMobilePhoneFocused: !prevState.isMobilePhoneFocused
    }));
  };

  /**
   * @description closes the keyboard when user click ourside the form
   */
  closeKeyboard = () => {
    Keyboard.dismiss();
  };

  /**
   * @description method to update customer's address
   */
  updateCustomerAddress = () => {
    const {
      address_1,
      address_2,
      city,
      region,
      postal_code,
      country,
      shipping_region_id,
      mob_phone
    } = this.state;

    this.setState({
      address_1: "",
      address_2: "",
      city: "",
      region: "",
      postal_code: "",
      country: "",
      shipping_region_id: "",
      mob_phone: ""
    });

    this.props.updateCustomerAddress(
      address_1,
      address_2,
      city,
      region,
      postal_code,
      country,
      shipping_region_id,
      mob_phone
    );
  };

  render() {
    const {
      loading,
      customer: { address_1, address_2, city, region, country }
    } = this.props;

    const radio_props = [{ label: "", value: 0 }];

    return (
      <KeyboardAvoidingView>
        <SafeAreaView>
          <TouchableWithoutFeedback onPress={this.closeKeyboard}>
            <ScrollView>
              <Container>
                <NavHeader />
                <CheckoutTopSection activeScreen="address" />
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    {address_1 && (
                      <TouchableOpacity
                        onPress={() => this.props.navigation.push("Payment")}
                      >
                        <Title>ship to</Title>
                        <DeliverButton>
                          <View width="90%">
                            <AddressText>
                              {address_1} {address_2}
                            </AddressText>
                            <AddressText>
                              {city}, {region}, {country}
                            </AddressText>
                          </View>

                          <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={() => null}
                            buttonColor={"#EFB961"}
                            selectedButtonColor={"#EFB961"}
                          />
                        </DeliverButton>
                      </TouchableOpacity>
                    )}
                    <Title>enter a new address</Title>
                    <AddressForm>
                      <Row>
                        <Column width="100%">
                          <Label>Address Line 1</Label>
                          <Input
                            onChangeText={address_1 => {
                              this.setState({ address_1 });
                              this.addressFormValidation();
                            }}
                            value={this.state.address_1}
                            onFocus={this.onAddressOneFocusChange}
                            onBlur={this.onAddressOneFocusChange}
                            borderColor={
                              this.state.isAddressOneFocused && color.yellow
                            }
                          />
                        </Column>
                      </Row>
                      <Row>
                        <Column width="100%">
                          <Label>Address Line 2</Label>
                          <Input
                            onChangeText={address_2 => {
                              this.setState({ address_2 });
                              this.addressFormValidation();
                            }}
                            value={this.state.address_2}
                            onFocus={this.onAddressTwoFocusChange}
                            onBlur={this.onAddressTwoFocusChange}
                            borderColor={
                              this.state.isAddressTwoFocused && color.yellow
                            }
                          />
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label>City</Label>
                          <Input
                            onChangeText={city => {
                              this.setState({ city });
                              this.addressFormValidation();
                            }}
                            value={this.state.city}
                            onFocus={this.onCityFocusChange}
                            onBlur={this.onCityFocusChange}
                            borderColor={
                              this.state.isCityFocused && color.yellow
                            }
                          />
                        </Column>
                        <Column>
                          <Label>Region</Label>
                          <Input
                            onChangeText={region => {
                              this.setState({ region });
                              this.addressFormValidation();
                            }}
                            value={this.state.region}
                            onFocus={this.onRegionFocusChange}
                            onBlur={this.onRegionFocusChange}
                            borderColor={
                              this.state.isRegionFocused && color.yellow
                            }
                          />
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label>Postal Code</Label>
                          <Input
                            keyboardType="numeric"
                            onChangeText={postal_code => {
                              this.setState({ postal_code });
                              this.addressFormValidation();
                            }}
                            value={this.state.postal_code}
                            onFocus={this.onPostalCodeChange}
                            onBlur={this.onPostalCodeChange}
                            borderColor={
                              this.state.isPostalCodeFocused && color.yellow
                            }
                          />
                        </Column>
                        <Column>
                          <Label>Country</Label>
                          <Input
                            onChangeText={country => {
                              this.setState({ country });
                              this.addressFormValidation();
                            }}
                            value={this.state.country}
                            onFocus={this.onCountyFocusChange}
                            onBlur={this.onCountyFocusChange}
                            borderColor={
                              this.state.isCountryFocused && color.yellow
                            }
                          />
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label>Mobile Phone</Label>
                          <Input
                            keyboardType="numeric"
                            onChangeText={mob_phone => {
                              this.setState({ mob_phone });
                              this.addressFormValidation();
                            }}
                            value={this.state.mob_phone}
                            onFocus={this.onMobilePhoneFocusChange}
                            onBlur={this.onMobilePhoneFocusChange}
                            borderColor={
                              this.state.isMobilePhoneFocused && color.yellow
                            }
                          />
                        </Column>
                      </Row>
                      <TouchableOpacity
                        onPress={this.updateCustomerAddress}
                        disabled={!this.state.isValid}
                        style={{ marginTop: 30 }}
                      >
                        <SaveButton
                          backgroundColor={this.state.isValid && color.black60}
                        >
                          <ButtonText>save and continue</ButtonText>
                        </SaveButton>
                      </TouchableOpacity>
                    </AddressForm>
                  </>
                )}
              </Container>
            </ScrollView>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.updateAddress.loading,
  message: state.updateAddress.message,
  isSuccessful: state.updateAddress.isSuccessful,

  customer: state.getCustomer.customer
  // customerLoading: state.getCustomer.laoding
});

const mapDispatchToProps = dispatch => ({
  updateCustomerAddress: (
    address_1,
    address_2,
    city,
    region,
    postal_code,
    country,
    shipping_region_id,
    mob_phone
  ) =>
    dispatch(
      updateAddress(
        address_1,
        address_2,
        city,
        region,
        postal_code,
        country,
        shipping_region_id,
        mob_phone
      )
    ),
  getCustomerDetails: () => dispatch(getCustomer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressScreen);

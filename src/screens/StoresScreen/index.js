import React from "react";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import StoreModal from "./StoreModal";
import NavHeader from "../../components/NavHeader";
import Rhombus from "../../components/Rhombus";
import Location from "../../components/Location";
import {
  Container,
  Map,
  Image,
  Row,
  Title,
  StoreName,
  StoreAddress,
  StoreSection,
  Wrapper,
  Column,
  Distance,
  Border
} from "./styles";

class StoresScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    selectedStore: -1,
    showModal: false
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedStore: -1 });
  };

  render() {
    let color;

    return (
      <SafeAreaView>
        <Container>
          <NavHeader />
          <Map>
            <StoreModal
              showModal={this.state.showModal}
              closeModal={() => this.closeModal()}
            />
            <Image source={require("../../../assets/GoogleMaps.png")} />
          </Map>
          <Wrapper
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30
            }}
          >
            <Title>nearby stores</Title>
          </Wrapper>
          <StoreSection>
            <Wrapper
              style={{
                position: "absolute",
                top: -7,
                left: "50%",
                zIndex: 10
              }}
            >
              <Rhombus fillColor="#F3B453" />
            </Wrapper>
            <Border />
            {stores.map((store, index) => {
              color = index === this.state.selectedStore && "#fff";
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    this.setState({ selectedStore: index, showModal: true })
                  }
                >
                  <Row
                    background={index === this.state.selectedStore && "#F3B453"}
                    borderColor={
                      index === this.state.selectedStore ? "#F3B453" : "#bfbfbf"
                    }
                  >
                    <Column>
                      <StoreName color={color}>{store.name}</StoreName>
                      <StoreAddress color={color}>{store.address}</StoreAddress>
                    </Column>
                    <View style={{ flexDirection: "row" }}>
                      <Location
                        style={{ marginRight: 20 }}
                        pathFill={
                          index === this.state.selectedStore && "#F3B453"
                        }
                      />
                      <Distance color={color}>{store.distance}</Distance>
                    </View>
                  </Row>
                </TouchableOpacity>
              );
            })}
          </StoreSection>
        </Container>
      </SafeAreaView>
    );
  }
}

const stores = [
  {
    name: "Storex Northlake Mall",
    address: "Walking distance: 4 min",
    distance: "3.4 km"
  },
  {
    name: "Storex Grand Central",
    address: "Walking distance: 4 min",
    distance: "6.4 km"
  },
  {
    name: "Storex Northlake Mall",
    address: "Walking distance: 4 min",
    distance: "4.4 km"
  }
];

export default StoresScreen;

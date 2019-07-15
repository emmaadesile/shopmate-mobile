import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components";

class LowerHeader extends React.Component {
  state = {
    activeTextColor: "",
    activeIndex: 0
  };

  componentDidMount() {
    if (this.props.type === "men") {
      this.setState({ activeTextColor: "#93D6DC" });
    } else {
      this.setState({ activeTextColor: "#F6966C" });
    }
  }

  changeTextColor = index => {
    this.setState({ activeIndex: index }, () => {
      if (this.props.type === "men") {
        this.setState({ activeTextColor: "#93D6DC" });
      } else {
        this.setState({ activeTextColor: "#F6966C" });
      }
    });
  };
  render() {
    return (
      <Container>
        <NavContainer>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.changeTextColor(index)}
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <NavItem
                  color={
                    this.state.activeIndex === index
                      ? this.state.activeTextColor
                      : "#454545"
                  }
                >
                  {item.title}
                </NavItem>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </NavContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  height: 55px;
  width: 100%;
  background: #f2f2f2;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`;

const NavContainer = styled.View`
  height: 100%;
  width: 100%;
  padding-left: 10px;
`;

const NavItem = styled.Text`
  font-size: 19px;
  color: ${props => props.color || "#454545"};
  font-family: sourceSansProRegular;
  padding: 0 10px;
`;

const items = [
  { title: "All Products" },
  { title: "Jeans" },
  { title: "T-Shirts" },
  { title: "Shoes" },
  { title: "Accessories" }
];

export default LowerHeader;

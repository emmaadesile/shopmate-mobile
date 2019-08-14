import React from "react";
import { Container, Privacy, Payments } from "./styles";

class TermsAndConditionsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Privacy></Privacy>
        <Payments></Payments>
      </Container>
    );
  }
}

export default TermsAndConditionsScreen;

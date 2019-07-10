import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import Layout from "../components/layouts";
import Router from "next/router";
import { validate } from "../services/authentication";
import Login from "./login";
import { Container, Image, Segment, Rail } from "semantic-ui-react";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Image src="https://github.com/francosta/etheraizer-frontend/raw/development/public/homepage.png" />
        <Container>
          <Segment
            style={{ marginTop: 20, marginBottom: 20 }}
            textAlign="center">
            <Image src="/images/wireframe/paragraph.png" />

            <Rail internal position="left">
              <Segment>Left Rail Content</Segment>
            </Rail>

            <Rail internal position="right">
              <Segment>Right Rail Content</Segment>
            </Rail>
          </Segment>
        </Container>
      </div>
    );
  }
}

import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import Layout from "../components/layouts";
import Router from "next/router";
import { validate } from "../services/authentication";
import Login from "./login";
import { Container, Image } from "semantic-ui-react";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Container>
          <div id="wrapper">
            <img src="../public/homepage.jpg" style={{ width: "100%" }} />
            <h1>Wecome to Etheraizer</h1>
          </div>
        </Container>
        <Container />
      </div>
    );
  }
}

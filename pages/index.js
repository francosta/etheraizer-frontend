import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import Layout from "../components/layouts";
import Router from "next/router";
import { validate } from "../services/authentication";
import Login from "./login";
import {
  Container,
  Image,
  Segment,
  Rail,
  Header,
  Grid
} from "semantic-ui-react";
import SignUpForm from "../components/SignUpForm";

export default class Index extends Component {
  render() {
    return (
      <div>
        <div>
          <Image src="https://github.com/francosta/etheraizer-frontend/raw/development/public/logo.png" />
        </div>

        <Container>
          <Header>Get your project funded in 4 simple steps!</Header>
        </Container>
        <Grid stackable equal columns={3}>
          <Grid.Column floated="left " width={8}>
            <h1>Connect your ethereum wallet using Metamask</h1>
          </Grid.Column>
          <Grid.Column floated="right" width={12}>
            <Image
              style={{ heigth: 500, width: "100%" }}
              src="https://github.com/francosta/etheraizer-frontend/raw/development/public/step1%20copy.png"
            />
          </Grid.Column>
        </Grid>
        <Grid stackable equal columns={3}>
          <Grid.Column floated="left" width={12}>
            <Image
              style={{ heigth: 500, width: "100%" }}
              src="https://github.com/francosta/etheraizer-frontend/raw/development/public/step2%20copy.png"
            />
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <h1>Create, deploy and fund your project!</h1>
          </Grid.Column>
        </Grid>
        <Grid columns={2}>
          <Grid.Column>
            <Image src="https://github.com/francosta/etheraizer-frontend/raw/development/public/homepage.png" />
          </Grid.Column>
        </Grid>
        <h1>Signup Now</h1>
        <SignUpForm />
      </div>
    );
  }
}

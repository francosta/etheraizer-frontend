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
  Grid,
  Card
} from "semantic-ui-react";
import SignUpForm from "../components/SignUpForm";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Grid style={{ marginTop: 20 }} centered>
          <Image src="https://github.com/francosta/etheraizer-frontend/raw/development/public/landing_hero.png" />
        </Grid>
        <Grid stackable equal columns={3}>
          <Grid.Column
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingBottom: 0,
              paddingTop: 0
            }}
            floated="left "
            width={8}>
            <Container>
              <Header textAlign="center">
                Connect your ethereum wallet using Metamask
              </Header>
            </Container>
          </Grid.Column>
          <Grid.Column
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingBottom: 0,
              paddingTop: 0
            }}
            floated="right"
            width={12}>
            <Image
              style={{ heigth: 500, width: "100%" }}
              src="https://github.com/francosta/etheraizer-frontend/raw/development/public/step1%20copy.png"
            />
          </Grid.Column>
        </Grid>
        <Grid stackable equal columns={3}>
          <Grid.Column
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingBottom: 0,
              paddingTop: 0
            }}
            floated="left"
            width={12}>
            <Image
              style={{ heigth: 500, width: "100%" }}
              src="https://github.com/francosta/etheraizer-frontend/raw/development/public/step2%20copy.png"
            />
          </Grid.Column>
          <Grid.Column
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingBottom: 0,
              paddingTop: 0
            }}
            floated="right"
            width={8}>
            <h1>Create, deploy and fund your project!</h1>
          </Grid.Column>
        </Grid>
        <h1>Signup Now</h1>
        <SignUpForm />
      </div>
    );
  }
}

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
          <Image src="https://github.com/francosta/etheraizer-frontend/raw/development/public/homepage.png" />
        </div>
        <Container>
          <Header>Get your project funded in 4 simple steps!</Header>
        </Container>
        <Grid columns={2}>
          <Grid.Column>
            <h1>Get your project funded in 4 simple steps!</h1>
          </Grid.Column>
          <Grid.Column>
            <Image
              style={{ heigth: 500, width: "100%" }}
              src="https://github.com/francosta/etheraizer-frontend/raw/development/public/homepage.png"
            />
          </Grid.Column>
        </Grid>
        <Grid columns={2}>
          <Grid.Column>
            <Image src="https://github.com/francosta/etheraizer-frontend/raw/development/public/homepage.png" />
          </Grid.Column>
          <Grid.Column>
            <h1>Connect your Ethereum wallet</h1>
          </Grid.Column>
        </Grid>
        <Grid columns={2}>
          <Grid.Column>
            <h1>Create, Deploy, Achieve!</h1>
          </Grid.Column>
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

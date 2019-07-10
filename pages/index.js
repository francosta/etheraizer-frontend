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
  Card,
  Icon
} from "semantic-ui-react";
import SignUpForm from "../components/SignUpForm";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Grid style={{ marginTop: 20, marginBottom: 0 }} centered>
          <Image src="https://github.com/francosta/etheraizer-frontend/raw/development/public/landing_hero copy.png" />
        </Grid>
        <Grid stackable equal columns={3}>
          <Grid.Row
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingBottom: 0,
              paddingTop: 0
            }}>
            <Grid.Column floated="left" width={4}>
              <Container
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "50%"
                }}>
                <Image src="https://github.com/francosta/etheraizer-frontend/raw/development/public/Metamask.png" />
                <Header as="h1" textAlign="center">
                  Connect your ethereum wallet using Metamask
                </Header>
              </Container>
            </Grid.Column>
            <Grid.Column style={{ padding: 0 }} floated="right" width={12}>
              <Image
                style={{ heigth: 500, width: "100%" }}
                src="https://github.com/francosta/etheraizer-frontend/raw/development/public/step1%20copy.png"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid stackable equal columns={3}>
          <Grid.Row
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingBottom: 0,
              paddingTop: 0
            }}>
            <Grid.Column floated="left" width={12}>
              <Image
                style={{ heigth: 500, width: "100%" }}
                src="https://github.com/francosta/etheraizer-frontend/raw/development/public/step2%20copy.png"
              />
            </Grid.Column>
            <Grid.Column floated="right" width={4}>
              <Container
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "50%"
                }}>
                <Icon name="check" size="huge" color="green" />
                <Header as="h1" textAlign="center">
                  Create, deploy and fund your project
                </Header>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingBottom: 0,
              paddingTop: 0
            }}>
            <Grid.Column floated="left" width={4}>
              <Container
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "50%"
                }}>
                <Header as="h1" textAlign="center">
                  Browse through and support projects
                </Header>
              </Container>
            </Grid.Column>
            <Grid.Column style={{ padding: 0 }} floated="right" width={12}>
              <Image
                style={{ heigth: 500, width: "100%" }}
                src="https://github.com/francosta/etheraizer-frontend/raw/development/public/step3.png"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <SignUpForm />
      </div>
    );
  }
}

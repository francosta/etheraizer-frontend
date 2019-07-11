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
  Icon,
  Button,
  Transition
} from "semantic-ui-react";
import SignUpForm from "../components/SignUpForm";
import ProjectCard from "../components/ProjectCard";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handleClick = () => {
    const href = "/projects";
    const as = href;
    Router.push(href, as, { shallow: true });
  };

  handleTransition = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div>
        <Grid
          style={{
            marginTop: 20,
            marginBottom: 0,
            marginBottom: 70
          }}>
          <Grid.Row style={{ padding: 0 }} centered>
            <Image src="https://github.com/francosta/etheraizer-frontend/raw/development/public/landing_hero copy.png" />
          </Grid.Row>
          <Grid.Row style={{ padding: 0 }} centered>
            <Icon name="arrow alternate circle down" centered size="huge" />
          </Grid.Row>
        </Grid>
        <a name="more">
          <Grid stackable equal columns={3}>
            <Grid.Row
              style={{
                marginTop: 0,
                marginBottom: 0,
                paddingBottom: 0,
                paddingTop: 0
              }}>
              <Grid.Column
                style={{ marginLeft: "6vw", marginTop: "5vh" }}
                floated="left"
                width={3}>
                <Container
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "50%",
                    marginLeft: "20%"
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
        </a>
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
            <Grid.Column
              style={{ marginRight: "6vw", marginTop: "12vh" }}
              floated="right"
              width={3}>
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
            <Grid.Column
              style={{ marginLeft: "4vw", marginTop: "15vh" }}
              floated="left"
              width={3}>
              <Container
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "50%"
                }}>
                <Icon name="heart" size="huge" color="red" />
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
          {this.props.userData.id ? (
            <Grid.Row centered>
              <div style={{ marginTop: "10%", marginBottom: "2%" }}>
                <Button
                  onClick={this.handleTransition}
                  size="huge"
                  color="green">
                  Explore Projects
                </Button>
              </div>
            </Grid.Row>
          ) : (
            <Grid.Row centered>
              <SignUpForm />
            </Grid.Row>
          )}
        </Grid>
        <Container>
          <Transition visible={this.state.visible}>
            <Grid>
              <Card.Group itemsPerRow={4}>
                {this.props.projects.map((project, i) => (
                  <ProjectCard
                    key={i}
                    project={project}
                    selectProject={this.props.selectProject}
                  />
                ))}
              </Card.Group>
            </Grid>
          </Transition>
        </Container>
      </div>
    );
  }
}

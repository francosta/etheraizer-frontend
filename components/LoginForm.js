import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { login } from "../services/authentication";
import Router from "next/router";

export default class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password).then(resp => {
      this.props.login(resp.token);
    });
    Router.push("/");
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image
            verticalAlign="middle"
            src="https://drive.google.com/uc?id=1l-c_jyMF1elbZKIeemM-vaFL-eRqd9xH"
          />
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                name="email"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                name="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Don't have an account? <a href="/signup">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

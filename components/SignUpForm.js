import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Input
} from "semantic-ui-react";
import { login } from "../services/authentication";
import Router from "next/router";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirmation = e.target.passwordConfirmation.value;
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      passwordConfirmation === ""
    ) {
      this.setState({ error: "All fields are mandatory" });
    } else if (password !== passwordConfirmation) {
      this.setState({ error: "The passwords do not match." });
    } else {
      this.setState({ error: null });
      this.signUp(newUser);
    }
  };

  signUp = user => {
    const signUpURL = "http://localhost:3000/users";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user
      })
    };

    try {
      return fetch(signUpURL, options)
        .then(resp => resp.json())
        .then(resp => {
          login(user.email, user.password).then(resp =>
            this.props.login(resp.token)
          );
          const href = "/";
          const as = href;
          Router.push(href, as, { shallow: true });
        });
    } catch (err) {
      this.setState({ error: err });
    }
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
            src="https://github.com/francosta/etheraizer-frontend/raw/development/public/logo.png"
          />
          <Header as="h2" color="teal" textAlign="center">
            Create a new account
          </Header>
          <br />
          <Form
            error={this.state.error}
            onSubmit={this.handleSubmit}
            size="large">
            <Form.Group widths="equal">
              <Form.Field inline>
                {/* <label>First name</label> */}
                <Input name="firstName" fluid placeholder="First name" />
              </Form.Field>
              <Form.Field inline>
                {/* <label>Last name</label> */}
                <Input name="lastName" fluid placeholder="Last name" />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field inline>
                {/* <label>Email</label> */}
                <Input name="email" fluid placeholder="Email" />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field inline>
                {/* <label>Email</label> */}
                <Input
                  name="password"
                  type="password"
                  fluid
                  placeholder="Password"
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field inline>
                {/* <label>Email</label> */}
                <Input
                  name="passwordConfirmation"
                  type="password"
                  fluid
                  placeholder="Confirm your password"
                />
              </Form.Field>
            </Form.Group>
            <Message error content="The passwords do not match.." />
            <Button color="teal" fluid size="large">
              Create an account
            </Button>
          </Form>
          <Message>
            Already have an account? <a href="/login">Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

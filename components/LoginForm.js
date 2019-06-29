import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Image
        verticalAlign="middle"
        src="https://drive.google.com/uc?export=download&id=1g_CeGjcoMwCcOAYJzK0TCDyK-qg_ZZ46"
      />
      <Header as="h2" color="teal" textAlign="center">
        Log-in to your account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
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
        Don't have an account? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default LoginForm;

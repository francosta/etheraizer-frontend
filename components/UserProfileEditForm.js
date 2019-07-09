import React, { Component } from "react";
import { Form, Button, FormGroup, Message } from "semantic-ui-react";

export default class UserProfileEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    let user;
    let newFirstName;
    let newLastName;
    let newEmail;

    if (
      e.target.password.value !== "" &&
      e.target.password.value !== e.target.passwordConfirmation.value
    ) {
      this.setState({ error: "The passwords do not match" });
      return null;
    }

    if (e.target.firstName.value === "") {
      newFirstName = this.props.userData.first_name;
    } else {
      newFirstName = e.target.firstName.value;
    }

    if (e.target.lastName.value === "") {
      newLastName = this.props.userData.last_name;
    } else {
      newLastName = e.target.lastName.value;
    }

    if (e.target.email.value === "") {
      newEmail = this.props.userData.email;
    } else {
      newEmail = e.target.email.value;
    }

    if (e.target.password.value !== "") {
      user = {
        first_name: newFirstName,
        last_name: newLastName,
        email: newEmail,
        password: e.target.password.value
      };
    } else {
      user = {
        first_name: newFirstName,
        last_name: newLastName,
        email: newEmail
      };
    }

    const editUserURL = `http://localhost:3000/users/${this.props.userData.id}`;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user })
    };

    return fetch(editUserURL, options).then(resp => {
      resp.json();
      this.props.updateUserData(newFirstName, newLastName, newEmail);
      this.props.editProfile();
    });
  };

  render() {
    return (
      <Form onSubmit={e => this.handleSubmit(e)}>
        <Form.Group widths="equal">
          <Form.Field>
            <label>First Name</label>
            <input
              name="firstName"
              placeholder={this.props.userData.first_name}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              name="lastName"
              placeholder={this.props.userData.last_name}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Email</label>
          <input name="email" placeholder={this.props.userData.email} />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field>
            <label>New Password</label>
            <input name="password" type="password" />
          </Form.Field>
          <Form.Field>
            <label>New Password Confirmation</label>
            <input name="passwordConfirmation" type="password" />
          </Form.Field>
        </Form.Group>
        <Message
          visible={this.state.error}
          error
          content="The passwords do not match."
        />
        <Button type="submit">Edit Profile</Button>
      </Form>
    );
  }
}

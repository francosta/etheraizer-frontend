import React, { Component } from "react";
import projectContract from "../ethereum/projectContract";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Checkbox,
  Container
} from "semantic-ui-react";

class ContributeForm extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  handleSubmit = () => {
    console.log("The contribution has been submitted.");
  };

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show("blurring")}>Contribute</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close} centered={true}>
          <Modal.Header>Make a contribution</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="small"
              src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            />
            <Modal.Description>
              <Header as="h2">{this.props.selectedProject.title}</Header>
              <Container fluid>
                <Header as="h3">Description</Header>
                <p>{this.props.selectedProject.description}</p>
                <br />
              </Container>
              <Form>
                <Form.Field>
                  <label>How much do you want to contribute?</label>
                  <input placeholder="Your contribution" />
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              I changed my mind!
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Contribute!"
              onClick={this.close}
              type="submit"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ContributeForm;

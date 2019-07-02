import React, { Component } from "react";
import projectContract from "../ethereum/projectContract";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Checkbox,
  Container,
  Message,
  Icon
} from "semantic-ui-react";
import web3 from "../ethereum/web3";

class ContributeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      errorMsg: "",
      terms: false
    };
  }

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  handleCheck = () => {
    this.setState({ terms: !this.state.terms });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const contribution = parseInt(e.target[0].value);
    const minimumContribution = this.props.minimumContribution;
    const project = projectContract(
      this.props.selectedProject.blockchain_address
    );

    if (this.state.terms === false) {
      this.setState({
        errorMsg:
          "You need to accept the terms conditions before creating a project."
      });
    } else if (contribution < minimumContribution) {
      this.setState({
        errorMsg:
          "Your contribution is below the minimum contribution for this project."
      });
    } else {
      try {
        //Check units of currency
        const accounts = await web3.eth.getAccounts();
        await project.methods.contribute().send({
          from: accounts[0],
          value: contribution
        });
      } catch (err) {}
    }
  };

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show("blurring")}>Contribute</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close} centered={true}>
          <Modal.Header>Make a contribution</Modal.Header>
          <Modal.Content image>
            <Icon name="check circle" size="huge" color="green" />
            <Modal.Description>
              <Header as="h2">{this.props.selectedProject.title}</Header>
              <Container fluid>
                <Header as="h3">Description</Header>
                <p>{this.props.selectedProject.description}</p>
                <br />
              </Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>How much do you want to contribute?</label>
                  <input name="contribution" placeholder="Your contribution" />
                </Form.Field>
                <Message
                  color="red"
                  size="small"
                  compact
                  warning
                  error
                  header="Oh oh!"
                  content={this.state.errorMsg}
                />
                <Form.Field>
                  <Checkbox
                    checked={this.state.terms}
                    onChange={this.handleCheck}
                    label="I agree to the Terms and Conditions"
                  />
                </Form.Field>

                <Button color="black" onClick={this.close} type="button">
                  I changed my mind!
                </Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Contribute!"
                  type="submit"
                />
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions />
        </Modal>
      </div>
    );
  }
}

export default ContributeForm;

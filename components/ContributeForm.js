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
  Icon,
  Transition,
  Dimmer,
  Loader,
  Segment
} from "semantic-ui-react";
import web3 from "../ethereum/web3";

class ContributeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      errorMsg: null,
      terms: false,
      contributing: false
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
        this.setState({ contributing: true });
        //Check units of currency
        const accounts = await web3.eth.getAccounts();
        await project.methods.contribute().send({
          from: accounts[0],
          value: contribution
        });
        this.setState({ contributing: false, open: false });
        this.updateSelectedProject(contribution);
        this.props.updateDataOnFrontend(contribution);
        this.createSupportContractinDatabase(
          this.props.selectedProject.id,
          this.props.userData.id,
          contribution
        );
        this.props.addToUserSupportedProjects(this.props.selectedProject);
      } catch (err) {
        this.setState({ errorMsg: err, contributing: false, open: false });
      }
    }
  };

  createSupportContractinDatabase = (project_id, user_id, contribution) => {
    const projectId = project_id;
    const userId = user_id;
    const supportContract = {
      user_id: userId,
      project_id: projectId,
      value: contribution
    };
    const supportContractURL = "http://localhost:3000/support_contracts";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(supportContract)
    };

    return fetch(supportContractURL, options).then(resp => resp.json());
  };

  updateSelectedProject = contribution => {
    const id = this.props.selectedProject.id;
    const updateProjectURL = `http://localhost:3000/projects/${id}`;
    let progress =
      ((this.props.balance + contribution) / this.props.selectedProject.goal) *
      100;
    let status = "deployed";
    if (progress >= 100) {
      progress = 100;
      status = "funded";
    }
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ progress: progress, status: status })
    };

    return fetch(updateProjectURL, options)
      .then(resp => resp.json())
      .then(resp => this.props.selectProject(resp));
  };

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button size="huge" color="green" onClick={this.show("blurring")}>
          Support this project
        </Button>

        <Modal
          position="absolute"
          dimmer={dimmer}
          open={open}
          onClose={this.close}>
          <Segment>
            <Transition
              visible={this.state.contributing}
              animation="scale"
              duration={500}>
              <Dimmer active={this.state.contributing}>
                <Loader indeterminate>
                  Attempting to send your contribution to the Ethereum
                  blockchain.
                  <br />
                  Please wait...
                </Loader>
              </Dimmer>
            </Transition>
            <Modal.Header>Make a contribution</Modal.Header>
            <Modal.Content image>
              <Icon name="check circle" size="huge" color="green" />
              <Modal.Description>
                <Header as="h2">{this.props.selectedProject.title}</Header>
                <Container fluid>
                  <Header as="h3">Description</Header>
                  <br />
                </Container>
                <Form error={this.state.errorMsg} onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>How much do you want to contribute?</label>
                    <input
                      name="contribution"
                      placeholder="Your contribution"
                    />
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
          </Segment>
        </Modal>
      </div>
    );
  }
}

export default ContributeForm;

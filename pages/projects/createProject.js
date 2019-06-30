import React, { Component } from "react";
import factory from "../../ethereum/factoryContract";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Dropdown,
  Message,
  Segment,
  Dimmer,
  Loader,
  Transition,
  Step
} from "semantic-ui-react";
import ProjectCreationProgressComponent from "../../components/ProjectCreationProgressComponent";
import Layout from "../../components/layouts";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

export default class createproject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: "",
      creatingProject: false,
      terms: false,
      projectStatus: "funded"
    };
  }

  handleSubmit = async e => {
    e.persist();
    e.preventDefault();

    if (this.state.terms === false) {
      return this.setState({
        errorMessage:
          "You need to accept the terms conditions before creating a project."
      });
    }

    const accounts = await web3.eth.getAccounts();
    const projectTitle = e.target.projectTitle.value;
    const minimumContribution = e.target.minimumContribution.value;

    console.log(`Project Title: ${projectTitle}`);
    console.log(`Minimum Contribution: ${minimumContribution}`);

    this.setState({ creatingProject: true });
    try {
      await factory.methods
        .createCampaign(minimumContribution)
        .send({ from: accounts[0] });
      Router.pushRoute("/");
    } catch (thrownError) {
      this.setState({ errorMessage: thrownError.message });
    }
    this.setState({ creatingProject: false });
  };

  handleCheck = () => {
    this.setState({ terms: !this.state.terms });
  };

  //Render the createProject component
  render() {
    const formOptions = [
      { key: "wei", text: "wei", value: "wei" },
      { key: "ether", text: "Ξ ether", value: "ether" }
    ];

    return (
      <div>
        <h2>Create a new Project</h2>
        <ProjectCreationProgressComponent
          projectStatus={this.state.projectStatus}
        />
        <div>
          <h4>Please fill in the form below to create your project:</h4>
          <Segment>
            <Transition
              visible={this.state.creatingProject}
              animation="scale"
              duration={500}>
              <Dimmer active={this.state.creatingProject}>
                <Loader indeterminate>
                  Attempting to deploy project's contract into the Ethereum
                  blockchain.
                  <br />
                  Please wait...
                </Loader>
              </Dimmer>
            </Transition>

            <Form
              onSubmit={this.handleSubmit}
              error={!!this.state.errorMessage}>
              <Form.Field required name="projectTitle">
                <label>Project Title</label>
                <Input name="projectTitle" placeholder="Project Title" />
              </Form.Field>
              <Form.Field required>
                <label>Minimum Contribution</label>
                <Input
                  name="minimumContribution"
                  label={<Dropdown defaultValue="wei" options={formOptions} />}
                  labelPosition="right"
                  placeholder="Minimum Contribution"
                />
              </Form.Field>
              <Form.Field required>
                <Checkbox
                  checked={this.state.terms}
                  onChange={this.handleCheck}
                  label="I agree to the Terms and Conditions"
                />
              </Form.Field>
              <Message
                color="red"
                size="small"
                compact
                warning
                error
                header="Oh oh!"
                content={this.state.errorMessage}
              />
              <br />
              <Button type="submit">Create Project</Button>
            </Form>
          </Segment>
        </div>
      </div>
    );
  }
}

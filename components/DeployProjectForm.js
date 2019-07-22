import React, { Component } from "react";
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
import factory from "../ethereum/factoryContract";
import web3 from "../ethereum/web3";
import Router from "next/router";

export default class DeployProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: "",
      creatingProject: false,
      terms: false,
      projectStatus: "funded"
    };
  }

  handleCheck = () => {
    this.setState({ terms: !this.state.terms });
  };

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

    this.setState({ creatingProject: true });
    try {
      await factory.methods
        .createCampaign(minimumContribution)
        .send({ from: accounts[0] })
        .then(resp => console.log(resp));
      this.getAddressForNewProject();
    } catch (thrownError) {
      this.setState({ errorMessage: thrownError.message });
    }
    // Router.push(
    //   `/projects/${this.props.selectedProject.id}`,
    //   `/projects/${this.props.selectedProject.id}`,
    //   { shallow: true }
    // );
    this.setState({ creatingProject: false });
  };

  getAddressForNewProject = async function() {
    const addresses = await factory.methods.getDeployedCampaigns().call();
    let selectedProjectAddress;
    let project;
    selectedProjectAddress = addresses[addresses.length - 1];
    project = this.props.selectedProject;
    project.blockchain_address = selectedProjectAddress;
    project.status = "deployed";
    this.props.selectProject(project);
    this.updateProjectOnDatabase(project);
    this.props.addProjectToAllProjects(project);
    this.props.addToUserSupportedProjects(project);
  };

  updateProjectOnDatabase = project => {
    const updateURL = `http://localhost:3000/projects/${project.id}`;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    };

    return fetch(updateURL, options).then(resp => resp.json());
  };

  render() {
    const formOptions = [
      { key: "wei", text: "wei", value: "wei" },
      { key: "ether", text: "Ξ ether", value: "ether" }
    ];
    return (
      <div style={{ marginTop: "20px" }}>
        <h2>Deploy your project to the Blockchain</h2>
        <h3>Your project was created. Now, deploy it to the blockchain.</h3>
        <div>
          <h4>Please fill in the form below to deploy your project:</h4>
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
              <Form.Field disabled name="projectTitle">
                <label>Project Title</label>
                <Input
                  name="projectTitle"
                  value={this.props.selectedProject.title}
                />
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
                <p style={{ marginTop: 10 }}>
                  You will need to pay a small transaction fee in order to
                  deploy your project.
                </p>
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

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
import CreateProjectForm from "../../components/CreateProjectForm";

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
    return (
      <div>
        <ProjectCreationProgressComponent
          projectStatus={this.state.projectStatus}
        />
        <CreateProjectForm
          handleSubmit={this.handleSubmit}
          errorMessage={this.state.errorMessage}
          handleCheck={this.handleCheck}
          terms={this.state.terms}
          creatingProject={this.state.creatingProject}
        />
      </div>
    );
  }
}

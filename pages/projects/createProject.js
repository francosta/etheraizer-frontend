import React, { Component } from "react";
import factory from "../../ethereum/factoryContract";
import ProjectCreationProgressComponent from "../../components/ProjectCreationProgressComponent";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import CreateProjectForm from "../../components/CreateProjectForm";
import DeployProjectForm from "../../components/DeployProjectForm";

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
    if (!this.props.selectedProject.status) {
      return (
        <div>
          <ProjectCreationProgressComponent
            selectedProject={this.props.selectedProject}
          />
          <CreateProjectForm
            handleSubmit={this.handleSubmit}
            errorMessage={this.state.errorMessage}
            handleCheck={this.handleCheck}
            terms={this.state.terms}
            creatingProject={this.state.creatingProject}
            userData={this.props.userData}
          />
        </div>
      );
    } else if (this.props.selectedProject.status === "created") {
      return (
        <div>
          <ProjectCreationProgressComponent
            selectedProject={this.props.selectedProject}
          />
          <DeployProjectForm
            handleSubmit={this.handleSubmit}
            errorMessage={this.state.errorMessage}
            handleCheck={this.handleCheck}
            terms={this.state.terms}
            creatingProject={this.state.creatingProject}
          />
        </div>
      );
    } else
      return (
        <div>
          <ProjectCreationProgressComponent
            selectedProject={this.props.selectedProject}
          />
          <DeployProjectForm
            handleSubmit={this.handleSubmit}
            errorMessage={this.state.errorMessage}
            handleCheck={this.handleCheck}
            terms={this.state.terms}
            creatingProject={this.state.creatingProject}
            userData={this.props.userData}
          />
        </div>
      );
  }
}

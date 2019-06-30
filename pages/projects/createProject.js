import React, { Component } from "react";
import ProjectCreationProgressComponent from "../../components/ProjectCreationProgressComponent";
import { Router } from "../../routes";
import CreateProjectForm from "../../components/CreateProjectForm";
import DeployProjectForm from "../../components/DeployProjectForm";
import ShowProject from "../projects/showproject";

export default class createproject extends Component {
  //Render the createProject component
  render() {
    if (!this.props.selectedProject.status) {
      return (
        <div>
          <ProjectCreationProgressComponent
            selectedProject={this.props.selectedProject}
          />
          <CreateProjectForm
            userData={this.props.userData}
            selectProject={this.props.selectProject}
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
            selectedProject={this.props.selectedProject}
            getNewProjectBlockchainAddress={
              this.props.getNewProjectBlockchainAddress
            }
            blockchainProjects={this.props.blockchainProjects}
            selectProject={this.props.selectProject}
          />
        </div>
      );
    } else if (this.props.selectedProject.status === "deployed") {
      return (
        <div>
          <ProjectCreationProgressComponent
            selectedProject={this.props.selectedProject}
          />
          <ShowProject
            selectedProject={this.props.selectedProject}
            getNewProjectBlockchainAddress={
              this.props.getNewProjectBlockchainAddress
            }
            blockchainProjects={this.props.blockchainProjects}
            selectProject={this.props.selectProject}
          />
        </div>
      );
    }
  }
}

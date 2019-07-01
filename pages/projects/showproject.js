import React, { Component } from "react";
import ProjectProgress from "../../components/ProjectProgress";
import AchieveProjectForm from "../../components/AchieveProjectForm";
import { Button } from "semantic-ui-react";
import ProjectDetails from "../../components/ProjectDetails";

export default class showproject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };
  }

  handleClick = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    return (
      <div>
        {!this.state.edit ? (
          <div>
            <ProjectProgress />
            <h1>Project Title</h1>
            <h2>{this.props.selectedProject.title}</h2>
            <ProjectDetails selectedProject={this.props.selectedProject} />
            <Button onClick={this.handleClick} type="submit">
              Edit Project
            </Button>{" "}
          </div>
        ) : (
          <div>
            <AchieveProjectForm
              active={this.state.edit}
              selectedProject={this.props.selectedProject}
              selectProject={this.props.selectProject}
              changeEdit={this.handleClick}
            />
          </div>
        )}
      </div>
    );
  }
}

import { Card, Icon } from "semantic-ui-react";
import React, { Component } from "react";
import { Link } from "../routes";

export default class ProjectCard extends Component {
  handleClick = project => {
    this.props.selectProject(project);
  };

  render() {
    const extra = (
      <a>
        <Icon name="user" />
        {this.props.project.users.length} supporters
      </a>
    );
    return (
      <Link route={`/projects/${this.props.project.id}`}>
        <Card
          onClick={() => this.handleClick(this.props.project)}
          image="https://drive.google.com/uc?id=1l-c_jyMF1elbZKIeemM-vaFL-eRqd9xH"
          header={this.props.project.title}
          meta={`Status: ${this.props.project.status}`}
          description={this.props.project.description}
          extra={extra}
        />
      </Link>
    );
  }
}

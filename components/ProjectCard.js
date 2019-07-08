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
          image={this.props.project.image}
          header={this.props.project.title}
          meta={`Status: ${this.props.project.status}`}
          extra={extra}
        />
      </Link>
    );
  }
}

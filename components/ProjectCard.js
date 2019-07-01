import { Card, Icon } from "semantic-ui-react";
import Router from "next/router";
import React, { Component } from "react";

export default class ProjectCard extends Component {
  handleClick = project => {
    this.props.selectProject(project);
    Router.push(`/projects/${this.props.project.id}`);
  };

  render() {
    const extra = (
      <a>
        <Icon name="user" />
        No. Supporters: 17
      </a>
    );
    return (
      <Card
        onClick={() => this.handleClick(this.props.project)}
        image="https://drive.google.com/uc?id=1l-c_jyMF1elbZKIeemM-vaFL-eRqd9xH"
        header={this.props.project.title}
        meta={`Status: ${this.props.project.status}`}
        description={this.props.project.description}
        extra={extra}
      />
    );
  }
}

import { Card, Icon, Image } from "semantic-ui-react";
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
        <Card onClick={() => this.handleClick(this.props.project)}>
          <Image src={this.props.project.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.project.title}</Card.Header>
            <Card.Meta>
              <span className="date">{`Status: ${
                this.props.project.status
              }`}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>{extra}</Card.Content>
        </Card>
      </Link>
    );
  }
}

import { Card, Icon, Image, Label } from "semantic-ui-react";
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
          {this.props.project.status === "deployed" ? (
            <Label attached="bottom" as="a" color="orange">
              <Label.Detail>
                Funding Ongoing -{" "}
                {this.props.project.progress
                  ? `${this.props.project.progress}%`
                  : "0%"}
              </Label.Detail>
            </Label>
          ) : (
            <Label attached="bottom" as="a" color="green">
              <Label.Detail>Funded</Label.Detail>
            </Label>
          )}

          <Card.Content>
            <Card.Header>{this.props.project.title}</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>

          <Card.Content extra>{extra}</Card.Content>
        </Card>
      </Link>
    );
  }
}

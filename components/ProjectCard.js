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
          <img
            src={this.props.project.image}
            wrapped
            ui={false}
            style={{ maxHeight: 200 }}
          />
          {this.props.project.status === "deployed" ? (
            <Label attached="bottom" as="a" color="black">
              <Label.Detail>
                Funding Ongoing:{" "}
                {this.props.project.progress
                  ? `${this.props.project.progress}%`
                  : "0%"}
              </Label.Detail>
            </Label>
          ) : (
            <Label attached="bottom" as="a" color="teal">
              <Label.Detail>Funded</Label.Detail>
            </Label>
          )}

          <Card.Content>
            <Card.Header>{this.props.project.title}</Card.Header>
            <Card.Description style={{ marginTop: "10px" }}>
              <div style={{ marginTop: "10px" }}>
                <Icon name="money" />
                Goal: {this.props.project.goal}
              </div>
              <div style={{ marginTop: "10px" }}>
                <Icon name="user" />
                No. Supporters: {this.props.project.users.length}
              </div>
            </Card.Description>
          </Card.Content>

          <Card.Content extra>{extra}</Card.Content>
        </Card>
      </Link>
    );
  }
}

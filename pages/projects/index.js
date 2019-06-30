import React, { Component } from "react";
import factory from "../../ethereum/factoryContract";
import Layout from "../../components/layouts";
import { Card } from "semantic-ui-react";
import { Link } from "../../routes";

export default class ProjectIndex extends Component {
  renderProjects = () => {
    const items = this.props.allProjects.map(project => {
      return {
        image: "/images/avatar/large/elliot.jpg",
        header: project.title,
        description: (
          <Link routes={`/projects/${project.id}`}>
            <a>View Project</a>
          </Link>
        ),
        fluid: false
      };
    });
    return <Card.Group items={items} />;
  };

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <h3>
          These are addresses of all the projects deployed into smart contracts:
        </h3>
        <div className="ui vertical menu left floated">
          <div className="item">
            <div className="ui input">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="item">
            Home
            <div className="menu">
              <a className="active item">Search</a>
              <a className="item">Add</a>
              <a className="item">Remove</a>
            </div>
          </div>
          <a className="item">
            <i className="grid layout icon" /> Browse
          </a>
          <a className="item">Messages</a>
          <div className="ui dropdown item">
            More
            <i className="dropdown icon" />
            <div className="menu">
              <a className="item">
                <i className="edit icon" /> Edit Profile
              </a>
              <a className="item">
                <i className="globe icon" /> Choose Language
              </a>
              <a className="item">
                <i className="settings icon" /> Account Settings
              </a>
            </div>
          </div>
        </div>
        {this.renderProjects()}
        <br />
      </div>
    );
  }
}

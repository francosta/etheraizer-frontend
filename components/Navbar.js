import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "../routes";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary style={{ marginTop: "20px" }}>
          <Link route="/">
            <a className="item">Ξtheraizer</a>
          </Link>
          <Menu.Menu position="right">
            <Link route="/projects/index">
              <a className="item">Projects</a>
            </Link>
            <Link route="/projects/createproject">
              <a className="item">Create Project</a>
            </Link>
          </Menu.Menu>

          <Menu.Item
            style={{ marginLeft: "50px" }}
            href="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            href="/projects/createproject"
            name="create project"
            onClick={this.handleItemClick}
            active={activeItem === "create project"}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="my projects"
              active={activeItem === "my projects"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="my profile"
              active={activeItem === "my profile"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              style={{ marginRight: "100px" }}
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <br />
      </div>
    );
  }
}

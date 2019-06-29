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
          <Menu.Menu position="left" style={{ marginLeft: "100px" }}>
            <Link route="/">
              <a className="item">Ξtheraizer</a>
            </Link>
            <Link route="/projects/index">
              <a className="item">Projects</a>
            </Link>
            <Link route="/projects/createproject">
              <a className="item">Create Project</a>
            </Link>
          </Menu.Menu>
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

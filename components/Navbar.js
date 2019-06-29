import React, { Component } from "react";
import Link from "next/link";
import { Menu, Segment } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary style={{ marginTop: "20px" }}>
          <Menu.Item
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

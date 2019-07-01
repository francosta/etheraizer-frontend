import React, { Component } from "react";
import { Menu, Image, Segment } from "semantic-ui-react";
import { Link } from "../routes";
import Routes from "next-routes";
import Router from "next/router";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  createProject = () => {
    const project = {};
    this.props.selectProject(project);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary style={{ marginTop: "20px" }}>
          <Menu.Menu position="left" style={{ marginLeft: "100px" }}>
            <Link route="/">
              <a className="item">
                <Image
                  src={
                    "https://drive.google.com/uc?id=1l-c_jyMF1elbZKIeemM-vaFL-eRqd9xH"
                  }
                  style={{ width: "100px" }}
                />
              </a>
            </Link>
            <Link route="/projects/index">
              <a className="item">Projects</a>
            </Link>
            <Link route="/projects/createproject">
              <a className="item" onClick={this.createProject}>
                Create Project
              </a>
            </Link>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Link route="/myprofile">
              <a className="item">My Profile</a>
            </Link>
            <Menu.Item
              style={{ marginRight: "100px" }}
              name="logout"
              active={activeItem === "logout"}
              onClick={this.props.logout}
            />
          </Menu.Menu>
        </Menu>
        <br />
      </div>
    );
  }
}

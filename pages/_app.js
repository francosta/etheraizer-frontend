import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import Layout from "../components/layouts";
import Router from "next/router";
import { getUserData, login, validate } from "../services/authentication";
import App, { Container } from "next/app";

export default class MyApp extends App {
  static async getInitialProps() {
    const blockchainProjects = await factory.methods
      .getDeployedCampaigns()
      .call();
    return { blockchainProjects };
  }

  componentDidMount() {
    const projectsURL = "http://localhost:3000/projects";
    return fetch(projectsURL)
      .then(resp => resp.json())
      .then(resp => this.setState({ allProjects: resp }));
  }

  constructor(props) {
    super(props);

    this.state = {
      userData: {
        id: 17,
        first_name: "Francisco",
        last_name: "Costa",
        email: "francisco@fcosta.pt",
        projects: [
          {
            title: "Test Project",
            description:
              "This a test project in order to check if the API is working or not. Let's hope it is...",
            goal: 1000,
            status: "created"
          }
        ]
      },
      selectedProject: {},
      allProjects: {}
    };
  }

  loggedIn = token => {
    localStorage.setItem("token", token);
    getUserData().then(resp => {
      this.setState({ userdata: resp });
    });
    Router.push("/");
  };

  logout = () => {
    this.setState({
      userdata: {
        first_name: "",
        last_name: "",
        email: "",
        projects: []
      }
    });
    localStorage.removeItem("token");
    Router.push("/login");
  };

  deployProject = project => {
    this.setState({ allProjects: [...this.state.allProjects, project] });
  };

  selectProject = project => {
    this.setState({ selectedProject: project });
  };

  getNewProjectBlockchainAddress = async function() {
    const blockchainProjects = await factory.methods
      .getDeployedCampaigns()
      .call();
    this.setState({ blockchainProjects: blockchainProjects });
  };

  render() {
    const { Component } = this.props;
    return (
      <Layout
        userData={this.state.userData}
        logout={this.logout}
        selectProject={this.selectProject}>
        <Component
          blockchainProjects={this.props.blockchainProjects}
          userData={this.state.userData}
          login={this.loggedIn}
          selectedProject={this.state.selectedProject}
          selectProject={this.selectProject}
          getNewProjectBlockchainAddress={this.getNewProjectBlockchainAddress}
          allProjects={this.state.allProjects}
          changeSelectedProject={this.changeSelectedProject}
        />
      </Layout>
    );
  }
}

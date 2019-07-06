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

  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      selectedProject: {},
      allprojects: [],
      supportContracts: []
    };
  }

  componentDidMount() {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined"
    ) {
      validate()
        .then(resp => {
          this.loggedIn(resp.token);
        })
        .catch(err => {
          alert(err);
        });
    }

    this.getAllProjects().then(resp => this.setState({ allprojects: resp }));
    this.getSupportContracts().then(resp =>
      this.setState({ supportContracts: resp })
    );
  }

  getAllProjects = () => {
    const projectsURL = "http://localhost:3000/projects";
    return fetch(projectsURL).then(resp => resp.json());
  };

  getSupportContracts = () => {
    const supportContractsURL = "http://localhost:3000/support_contracts";
    return fetch(supportContractsURL).then(resp => resp.json());
  };

  loggedIn = token => {
    localStorage.setItem("token", token);
    getUserData().then(resp => this.setState({ userData: resp }));
    Router.push("/");
  };

  logout = () => {
    this.setState({
      userData: {}
    });
    localStorage.removeItem("token");
    this.setState({ userData: {} });
    Router.push("/login");
  };

  deployProject = project => {
    this.setState({ allprojects: [...this.state.allprojects, project] });
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

  updateCreatedProjectsOnFrontend = () => {
    const { created_projects } = this.state.userData;
    const newCreatedProjects = [
      ...created_projects,
      this.state.selectedProject
    ];
    this.setState({ userData: { ...this.state.userData, newCreatedProjects } });
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
          allProjects={this.state.allprojects}
          changeSelectedProject={this.changeSelectedProject}
          deployProject={this.deployProject}
          router={this.props.router}
          updateCreatedProjectsOnFrontend={this.updateCreatedProjectsOnFrontend}
          supportContracts={this.state.supportContracts}
        />
      </Layout>
    );
  }
}

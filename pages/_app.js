import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import Layout from "../components/layouts";
import Router from "next/router";
import { getUserData, login, validate } from "../services/authentication";
import App, { Container } from "next/app";
import fetch from "isomorphic-fetch";

export default class MyApp extends App {
  static async getInitialProps() {
    const blockchainProjects = await factory.methods
      .getDeployedCampaigns()
      .call();
    const projectsURL = "http://localhost:3000/projects";
    let allProjectsResp = await fetch(projectsURL);
    let allProjects = await allProjectsResp.json();
    return { blockchainProjects, allProjects };
  }

  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      selectedProject: {},
      allprojects: [],
      supportContracts: [],
      userSupport: []
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
    this.getSupportContracts().then(resp => {
      this.setState({ supportContracts: resp });
    });
  }

  getAllProjects = () => {
    const projectsURL = "http://localhost:3000/projects";
    return fetch(projectsURL).then(resp => resp.json());
  };

  getSupportContracts = () => {
    const supportContractsURL = "http://localhost:3000/support_contracts";
    return fetch(supportContractsURL).then(resp => resp.json());
  };

  getUserSupport = () => {
    const userContracts = this.state.supportContracts.filter(
      contract => contract.user_id === this.state.userData.id
    );

    const userProjects = userContracts
      .map(contract => {
        return this.state.allprojects.filter(project => {
          return contract.project_id === project.id;
        });
      })
      .flat();

    this.setState({ userSupport: userProjects });
  };

  loggedIn = token => {
    localStorage.setItem("token", token);
    getUserData().then(resp => {
      this.setState({ userData: resp });
      this.getUserSupport();
    });

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

  updateUserSupportedProjects = project => {
    this.setState({ userSupport: [...this.state.userSupport, project] });
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
          allProjects={this.props.allProjects}
          changeSelectedProject={this.changeSelectedProject}
          deployProject={this.deployProject}
          router={this.props.router}
          updateCreatedProjectsOnFrontend={this.updateCreatedProjectsOnFrontend}
          supportContracts={this.state.supportContracts}
          userSupport={this.state.userSupport}
          addToUserSupportedProjects={this.updateUserSupportedProjects}
        />
      </Layout>
    );
  }
}

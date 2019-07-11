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
    } else if (
      this.props.router.route === "/createproject" ||
      this.props.router.route === "/myprofile"
    ) {
      const href = "/login";
      const as = href;
      Router.push(href, as, { shallow: true });
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

    let userProjects = userContracts
      .map(contract => {
        return this.state.allprojects.filter(project => {
          return contract.project_id === project.id;
        });
      })
      .flat();

    Array.prototype.unique = function() {
      return this.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
    };
    const uniqueUserProjects = userProjects.unique();
    this.setState({ userSupport: uniqueUserProjects });
  };

  loggedIn = token => {
    localStorage.setItem("token", token);
    getUserData()
      .then(resp => {
        this.setState({ userData: resp });
      })
      .then(() => this.getUserSupport());
  };

  logout = () => {
    localStorage.removeItem("token");
    Router.push("/", "/", { shallow: true }).then(() => {
      this.setState({
        userData: {}
      });
    });
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
    Array.prototype.unique = function() {
      return this.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
    };
    let newSupport = this.state.userSupport.unique();
    this.setState({ userSupport: newSupport });
  };

  updateUserData = (firstName, lastName, email) => {
    this.setState({
      userData: {
        ...this.state.userData,
        first_name: firstName,
        last_name: lastName,
        email: email
      }
    });
  };

  render() {
    const { Component } = this.props;
    return (
      <Layout
        userData={this.state.userData}
        logout={this.logout}
        selectProject={this.selectProject}
        router={this.props.router}
        allProjects={this.props.allProjects}>
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
          updateUserData={this.updateUserData}
          getUserSupport={this.getUserSupport}
        />
      </Layout>
    );
  }
}

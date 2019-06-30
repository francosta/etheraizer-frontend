import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import Layout from "../components/layouts";
import Router from "next/router";
import { getUserData, login, validate } from "../services/authentication";
import App, { Container } from "next/app";

export default class MyApp extends App {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedCampaigns().call();
    return { projects };
  }

  constructor(props) {
    super(props);

    this.state = {
      userData: {
        id: 15,
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
      allProjects: this.props.projects
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

  render() {
    const { Component } = this.props;
    return (
      <Layout logout={this.logout}>
        <Component
          projects={this.props.projects}
          userData={this.state.userData}
          login={this.loggedIn}
        />
      </Layout>
    );
  }
}

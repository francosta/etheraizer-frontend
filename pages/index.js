import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import Layout from "../components/layouts";
import web3 from "../ethereum/web3";
import { Card } from "semantic-ui-react";
import { Link } from "../routes";
import Router from "next/router";
import { getUserData, login, validate } from "../services/authentication";

export default class projectIndex extends Component {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedCampaigns().call();
    return { projects };
  }

  constructor(props) {
    super(props);

    this.state = {
      userData: {}
    };
  }

  componentDidMount() {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined" &&
      localStorage.getItem("token") !== "null"
    ) {
      validate()
        .then(resp => {
          this.loggedIn(resp.token);
        })
        .catch(err => {
          alert(err);
        });
    } else {
      Router.push("/login");
    }
  }

  loggedIn = token => {
    localStorage.setItem("token", token);
    getUserData().then(data => {
      this.setState({ userData: data });
    });
    Router.push("/");
  };

  logout = () => {
    this.setState({
      userData: {
        email: "",
        name: "",
        portfolios: [],
        profile_picture: ""
      }
    });
    localStorage.removeItem("token");
  };

  render() {
    if (this.state.userData === {}) {
      return <Login pageProps={pageProps} login={this.login} />;
    } else {
      return (
        <Layout>
          <h2>This will be the homepage</h2>
        </Layout>
      );
    }
  }
}

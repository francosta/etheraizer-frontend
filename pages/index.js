import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import Layout from "../components/layouts";
import web3 from "../ethereum/web3";
import { Card } from "semantic-ui-react";
import { Link } from "../routes";

export default class projectIndex extends Component {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedCampaigns().call();
    return { projects };
  }

  componentDidMount() {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined"
    ) {
      validate()
        .then(resp => {
          this.login(resp.token, resp.username);
        })
        .catch(err => {
          alert(err);
        });
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <Layout>
        <h2>This will be the homepage</h2>
      </Layout>
    );
  }
}

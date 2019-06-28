import React, { Component } from "react";
import factory from "../ethereum/factoryContract";

export default class projectIndex extends Component {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedCampaigns().call();
    return { projects };
  }

  render() {
    return (
      <div>
        <h1>This is the homepage with all the active projects.</h1>
        <h3>These are addresses of all the deployed projects:</h3>
        {this.props.projects}
      </div>
    );
  }
}

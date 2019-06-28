import React, { Component } from "react";
import factory from "../ethereum/factoryContract";

export default class projectIndex extends Component {
  async componentDidMount() {
    const projects = await factory.methods.getDeployedCampaigns().call();
    console.log(projects);
  }

  render() {
    return (
      <div>
        <h1>This is the homepage with all the active campaigns.</h1>;
      </div>
    );
  }
}

import React, { Component } from "react";
import factory from "../ethereum/factoryContract";

export default class projectIndex extends Component {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedCampaigns().call();
    return { projects };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const projectTitle = e.target.projectTitle.value;
    const minimumContribution = e.target.contribution.value;
    console.log(`Project Title: ${projectTitle}`);
    console.log(`Minimum Contribution: ${minimumContribution}`);
    await factory.methods.createCampaign(minimumContribution).call();
  }

  render() {
    return (
      <div>
        <h1>This is the homepage with all the active projects.</h1>
        <h3>These are addresses of all the deployed projects:</h3>
        {this.props.projects}
        <br />
        <h3>Create a new project in the form below:</h3>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>Project Title</p>
          <input name="projectTitle" />
          <p>Please set a minimum contribution</p>
          <input name="contribution" /> <br />
          <button type="submit">Create Project</button>
        </form>
      </div>
    );
  }
}

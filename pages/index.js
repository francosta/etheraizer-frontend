import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import { Card } from "semantic-ui-react";
import Layout from "../components/layouts"

export default class projectIndex extends Component {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedCampaigns().call();
    return { projects };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const projectTitle = e.target.projectTitle.value;
    const minimumContribution = e.target.minimumContribution.value;
    console.log(`Project Title: ${projectTitle}`);
    console.log(`Minimum Contribution: ${minimumContribution}`);
    await factory.methods.createCampaign(minimumContribution).call();
  }

  renderProjects = () => {
    const items = this.props.projects.map(address => {
      return {
        header: address,
        description: <a>View Project</a>,
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  };

  render() {
    return (
    <Layout>
      <div>
        <br></br>
        <h1>Homepage</h1>
        <h3>
          These are addresses of all the projects deployed into smart contracts:
        </h3>
        {this.renderProjects()}
        <br />
        <h3>Create a new project in the form below:</h3>
        <form className="ui form" onSubmit={e => this.handleSubmit(e)}>
          <div className="field">
            <label>Project Name</label>
            <input type="text" name="projectTitle" placeholder="Project Name" />
          </div>
          <div className="field">
            <label>Minimum Contribution</label>
            <input
              type="text"
              name="minimumContribution"
              placeholder="Minimum Contribution"
            />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabIndex="0" className="hidden" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button className="ui primary button" type="submit">
            Create Project
          </button>
        </form>
      </div>
      </Layout>
    );
  }
}

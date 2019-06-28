import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import { Button, Checkbox, Form, Card, Input, Dropdown } from "semantic-ui-react";
import Layout from "../components/layouts"
import web3 from '../ethereum/web3'

export default class projectIndex extends Component {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedCampaigns().call();
    return { projects };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    debugger
    const accounts = await web3.eth.getAccounts();
    const projectTitle = e.target.projectTitle.value;
    const minimumContribution = e.target.minimumContribution.value;

    console.log(`Project Title: ${projectTitle}`);
    console.log(`Minimum Contribution: ${minimumContribution}`);
    await factory.methods.createCampaign(minimumContribution).send(
      {from: accounts[0]}
    );
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

    const formOptions = [
      { key: 'wei', text: 'wei', value: 'wei' },
      { key: 'ether', text: 'Ξ ether', value: 'ether' }
    ]

    return (
    <Layout>
      <div>
        <br></br>
        <h1>Homepage</h1>
        <h3>
          These are addresses of all the projects deployed into smart contracts:
        </h3>
        <div className="ui vertical menu left floated">
          <div className="item">
            <div className="ui input"><input type="text" placeholder="Search..."/></div>
          </div>
          <div className="item">
            Home
            <div className="menu">
              <a className="active item">Search</a>
              <a className="item">Add</a>
              <a className="item">Remove</a>
            </div>
          </div>
          <a className="item">
            <i className="grid layout icon"></i> Browse
          </a>
          <a className="item">
            Messages
          </a>
          <div className="ui dropdown item">
            More
            <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item"><i className="edit icon"></i> Edit Profile</a>
              <a className="item"><i className="globe icon"></i> Choose Language</a>
              <a className="item"><i className="settings icon"></i> Account Settings</a>
            </div>
          </div>
          </div>
        {this.renderProjects()}
        <br />
        <h3>Create a new project in the form below:</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Field name="projectTitle">
            <label>Project Title</label>
            <Input name="projectTitle" placeholder='Project Title' />
          </Form.Field>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input name="minimumContribution" label={<Dropdown defaultValue='wei' options={formOptions} />} labelPosition="right" placeholder='Minimum Contribution' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Create Project</Button>
      </Form>
      </div>
      </Layout>
    );
  }
}

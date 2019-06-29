import React, { Component } from "react";
import factory from "../../ethereum/factoryContract";
import {
  Button,
  Checkbox,
  Form,
  Card,
  Input,
  Dropdown,
  Message
} from "semantic-ui-react";
import Layout from "../../components/layouts";
import web3 from "../../ethereum/web3";

// Create Project form submit
export default class createProject extends Component {
  handleSubmit = async e => {
    debugger;
    e.persist();
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const projectTitle = e.target.projectTitle.value;
    const minimumContribution = e.target.minimumContribution.value;
    let error = "";

    console.log(`Project Title: ${projectTitle}`);
    console.log(`Minimum Contribution: ${minimumContribution}`);
    try {
      await factory.methods
        .createCampaign(minimumContribution)
        .send({ from: accounts[0] });
    } catch (thrownError) {
      error = thrownError.message;
    }
  };

  render() {
    const formOptions = [
      { key: "wei", text: "wei", value: "wei" },
      { key: "ether", text: "Ξ ether", value: "ether" }
    ];

    return (
      <Layout>
        <div>
          <h3>Create a new project in the form below:</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field name="projectTitle">
              <label>Project Title</label>
              <Input name="projectTitle" placeholder="Project Title" />
            </Form.Field>
            <Form.Field>
              <label>Minimum Contribution</label>
              <Input
                name="minimumContribution"
                label={<Dropdown defaultValue="wei" options={formOptions} />}
                labelPosition="right"
                placeholder="Minimum Contribution"
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Message warning error header="Oh oh!" />
            <Button type="submit">Create Project</Button>
          </Form>
        </div>
      </Layout>
    );
  }
}

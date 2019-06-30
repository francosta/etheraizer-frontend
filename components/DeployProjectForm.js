import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Dropdown,
  Message,
  Segment,
  Dimmer,
  Loader,
  Transition,
  Step
} from "semantic-ui-react";

export default class DeployProjectForm extends Component {
  render() {
    const formOptions = [
      { key: "wei", text: "wei", value: "wei" },
      { key: "ether", text: "Ξ ether", value: "ether" }
    ];
    return (
      <div>
        <h2>Deploy your project to the Blockchain</h2>
        <h3>Your project was created. Now, deploy it to the blockchain.</h3>
        <div>
          <h4>Please fill in the form below to deploy your project:</h4>
          <Segment>
            <Transition
              visible={this.props.creatingProject}
              animation="scale"
              duration={500}>
              <Dimmer active={this.props.creatingProject}>
                <Loader indeterminate>
                  Attempting to deploy project's contract into the Ethereum
                  blockchain.
                  <br />
                  Please wait...
                </Loader>
              </Dimmer>
            </Transition>

            <Form
              onSubmit={this.props.handleSubmit}
              error={!!this.props.errorMessage}>
              <Form.Field disabled name="projectTitle">
                <label>Project Title</label>
                <Input
                  name="projectTitle"
                  value={this.props.selectedProject.title}
                />
              </Form.Field>
              <Form.Field required>
                <label>Minimum Contribution</label>
                <Input
                  name="minimumContribution"
                  label={<Dropdown defaultValue="wei" options={formOptions} />}
                  labelPosition="right"
                  placeholder="Minimum Contribution"
                />
              </Form.Field>
              <Form.Field required>
                <Checkbox
                  checked={this.props.terms}
                  onChange={this.props.handleCheck}
                  label="I agree to the Terms and Conditions"
                />
              </Form.Field>
              <Message
                color="red"
                size="small"
                compact
                warning
                error
                header="Oh oh!"
                content={this.props.errorMessage}
              />
              <br />
              <Button type="submit">Create Project</Button>
            </Form>
          </Segment>
        </div>
      </div>
    );
  }
}

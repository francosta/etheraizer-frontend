import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Dropdown,
  Message,
  Segment,
  Dimmer,
  Loader,
  Transition
} from "semantic-ui-react";

export default class CreateProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: "",
      terms: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const newTitle = e.target.projectTitle.value;
    const newDescription = e.target.description.value;
    const newGoal = e.target.goal.value;

    const project = {
      title: newTitle,
      description: newDescription,
      goal: newGoal,
      user_id: this.props.userData.id,
      blockchain_address: "",
      status: "created"
    };

    const createURL = "http://localhost:3000/projects";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    };

    return fetch(createURL, options)
      .then(resp => resp.json())
      .then(newProject => {
        this.props.selectProject(newProject);
      });
  };

  render() {
    const formOptions = [
      { key: "wei", text: "wei", value: "wei" },
      { key: "ether", text: "Ξ ether", value: "ether" },
      { key: "dollars", text: "$", value: "dollars" },
      { key: "euros", text: "€", value: "euros" },
      { key: "pounds", text: "£", value: "wei" }
    ];
    return (
      <div>
        <h2>Create your Project</h2>
        <div>
          <h4>Please fill in the form below to create your project:</h4>
          <Segment>
            <Form
              onSubmit={this.handleSubmit}
              error={!!this.props.errorMessage}>
              <Form.Field required name="projectTitle">
                <label>Project Title</label>
                <Input name="projectTitle" placeholder="Project Title" />
              </Form.Field>
              <Form.Field required>
                <label>Description</label>
                <Input
                  name="description"
                  labelPosition="right"
                  placeholder="Project Description"
                />
              </Form.Field>
              <Form.Field required>
                <label>Goal</label>
                <Input
                  name="goal"
                  label={<Dropdown defaultValue="wei" options={formOptions} />}
                  labelPosition="right"
                  placeholder="Funding Goal"
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

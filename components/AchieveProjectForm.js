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

export default class AchieveProjectForm extends Component {
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
    const newGoal = parseInt(e.target.goal.value);
    const project = {
      title: newTitle,
      description: newDescription,
      goal: newGoal
    };
    this.updateProjectOnDatabase(project);
  };

  updateProjectOnDatabase = project => {
    const updateURL = `http://localhost:3000/projects/${
      this.props.selectedProject.id
    }`;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    };

    return fetch(updateURL, options)
      .then(resp => resp.json())
      .then(resp => {
        this.props.selectProject(resp);
        this.props.changeEdit();
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
        <h2>Edit your project</h2>
        <div>
          <Segment>
            <Form
              onSubmit={this.handleSubmit}
              error={!!this.props.errorMessage}>
              <Form.Field name="projectTitle">
                <label>Project Title</label>
                <Input name="projectTitle" placeholder="Project Title" />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <Input
                  name="description"
                  labelPosition="right"
                  placeholder={`${this.props.selectedProject.description}`}
                />
              </Form.Field>
              <Form.Field>
                <label>Goal</label>
                <Input
                  name="goal"
                  label={<Dropdown defaultValue="wei" options={formOptions} />}
                  labelPosition="right"
                  placeholder={`${this.props.selectedProject.goal}`}
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
              <Button type="submit">Edit Project</Button>
            </Form>
          </Segment>
        </div>
      </div>
    );
  }
}

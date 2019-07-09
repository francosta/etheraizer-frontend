import React, { Component, createRef } from "react";
import factory from "../../ethereum/factoryContract";
import Layout from "../../components/layouts";
import { Card, Sticky, Grid, Ref, Segment } from "semantic-ui-react";
import { Link } from "../../routes";
import ProjectCard from "../../components/ProjectCard";

export default class ProjectIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      filteredProjects: [],
      projects: []
    };
  }

  componentDidMount() {
    const projects = this.props.allProjects.filter(
      project => project.status === "deployed" || project.status === "funded"
    );
    this.setState({ projects: projects });
  }

  setProjects = projects => {
    this.setState({ allprojects: projects });
  };

  handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase();
    this.setState({ searchTerm: searchTerm });
    const newProjects = this.props.allProjects.filter(project =>
      project.title.toLowerCase().includes(this.state.searchTerm)
    );
    this.setState({ filteredProjects: newProjects });
  };

  contextRef = createRef();

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <h1>All Projects</h1>
        <Grid stackable columns={2}>
          <Grid.Column width={4}>
            <Sticky context={this.contextRef}>
              <div
                className="ui vertical menu left floated"
                style={{ marginTop: 20 }}>
                <div className="item">
                  <div className="ui input">
                    <input
                      onChange={this.handleSearch}
                      type="text"
                      placeholder="Search..."
                    />
                  </div>
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
                  <i className="grid layout icon" /> Browse
                </a>
                <a className="item">Messages</a>
                <div className="ui dropdown item">
                  More
                  <i className="dropdown icon" />
                  <div className="menu">
                    <a className="item">
                      <i className="edit icon" /> Edit Profile
                    </a>
                    <a className="item">
                      <i className="globe icon" /> Choose Language
                    </a>
                    <a className="item">
                      <i className="settings icon" /> Account Settings
                    </a>
                  </div>
                </div>
              </div>
            </Sticky>
          </Grid.Column>
          <Grid.Column stackable width={12}>
            <Card.Group itemsPerRow={3}>
              {this.state.searchTerm === ""
                ? this.state.projects.map((project, i) => (
                    <ProjectCard
                      key={i}
                      project={project}
                      selectProject={this.props.selectProject}
                    />
                  ))
                : this.state.filteredProjects.map((project, i) => (
                    <ProjectCard
                      key={i}
                      project={project}
                      selectProject={this.props.selectProject}
                    />
                  ))}
            </Card.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

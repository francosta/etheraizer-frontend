import React, { Component, createRef } from "react";
import factory from "../../ethereum/factoryContract";
import Layout from "../../components/layouts";
import { Card, Sticky, Grid, Ref, Segment, Checkbox } from "semantic-ui-react";
import { Link } from "../../routes";
import ProjectCard from "../../components/ProjectCard";

export default class ProjectIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      searchTerm: "",
      fundedFilter: false,
      fundingFilter: false
    };
  }

  componentDidMount() {
    const projects = this.props.allProjects.filter(
      project => project.status === "deployed" || project.status === "funded"
    );
    this.setState({ projects: projects });
    this.setState({ filteredProjects: projects });
  }

  setProjects = projects => {
    this.setState({ allprojects: projects });
  };

  filteredProjects = () => {
    let filterResults = this.state.projects.filter(project =>
      project.title.toLowerCase().includes(this.state.searchTerm)
    );
    if (this.state.fundingFilter) {
      filterResults = filterResults.filter(
        project => project.status === "deployed"
      );
    }

    if (this.state.fundedFilter) {
      filterResults = filterResults.filter(
        project => project.status === "funded"
      );
    }

    return filterResults;
  };

  handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase();
    this.setState({ searchTerm });
  };

  handleFilter = filterType => {
    this.setState({ [filterType]: !this.state[filterType] });
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
                  See only
                  <div className="menu">
                    <Checkbox
                      className="item"
                      label={{ children: "Awaiting funding" }}
                      onClick={e => this.handleFilter("fundingFilter")}
                    />
                    <Checkbox
                      className="item"
                      label={{ children: "Funded" }}
                      onClick={e => this.handleFilter("fundedFilter")}
                    />
                  </div>
                </div>
              </div>
            </Sticky>
          </Grid.Column>
          <Grid.Column stackable width={12}>
            <Card.Group itemsPerRow={3}>
              {this.filteredProjects().map((project, i) => (
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

import React, { Component } from "react";
import factory from "../../ethereum/factoryContract";
import Layout from "../../components/layouts";
import { Card } from "semantic-ui-react";
import { Link } from "../../routes";
import ProjectCard from "../../components/ProjectCard";

export default class ProjectIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allprojects: [],
      searchTerm: "",
      filteredProjects: []
    };
  }
  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    const projectsURL = "http://localhost:3000/projects";
    return fetch(projectsURL)
      .then(resp => resp.json())
      .then(resp => this.setProjects(resp));
  };

  setProjects = projects => {
    this.setState({ allprojects: projects });
  };

  // renderProjects = () => {
  //   if (this.state.searchTerm === "") {
  //     console.log("test");
  //     const items = this.state.allprojects.map(project => {
  //       return {
  //         image:
  //           "https://drive.google.com/uc?id=1l-c_jyMF1elbZKIeemM-vaFL-eRqd9xH",
  //         header: project.title,
  //         description: (
  //           <Link route={`/projects/${project.id}`}>
  //             <a>View Project</a>
  //           </Link>
  //         ),
  //         fluid: false
  //       };
  //     });
  //     return (
  //       <Card.Group selectProject={this.props.selectProject} items={items} />
  //     );
  //   } else {
  //     const items = this.state.filteredProjects.map(project => {
  //       return {
  //         image:
  //           "https://drive.google.com/uc?id=1l-c_jyMF1elbZKIeemM-vaFL-eRqd9xH",
  //         header: project.title,
  //         description: (
  //           <Link route={`/projects/${project.id}`}>
  //             <a>View Project</a>
  //           </Link>
  //         ),
  //         fluid: false
  //       };
  //     });
  //     return (
  //       <Card.Group selectProject={this.props.selectProject} items={items} />
  //     );
  //   }
  // };

  handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase();
    this.setState({ searchTerm: searchTerm });
    const newProjects = this.state.allprojects.filter(project =>
      project.title.toLowerCase().includes(this.state.searchTerm)
    );
    this.setState({ filteredProjects: newProjects });
  };

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <h3>
          These are addresses of all the projects deployed into smart contracts:
        </h3>
        <div className="ui vertical menu left floated">
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
        {this.state.searchTerm === ""
          ? this.state.allprojects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))
          : this.state.filteredProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
        <br />
      </div>
    );
  }
}

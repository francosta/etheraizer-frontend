import React, { Component } from "react";
import ProjectProgress from "../../components/ProjectProgress";
import AchieveProjectForm from "../../components/AchieveProjectForm";
import { Button } from "semantic-ui-react";
import ProjectDetails from "../../components/ProjectDetails";
import projectContract from "../../ethereum/projectContract";
import web3 from "../../ethereum/web3";
import ProjectStats from "../../components/ProjectStats";
import ProjectCreationProgressComponent from "../../components/ProjectCreationProgressComponent";
import ProjectHighLevelValues from "../../components/ProjectHighLevelValues";
import ContributeForm from "../../components/ContributeForm";

class ShowProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      minimumContribution: null,
      balance: null,
      requestsCount: null,
      supportersCount: null,
      managerAddress: "",
      selectedProject: null
    };
  }

  componentDidMount = function() {
    const projectsURL = "http://localhost:3000/projects";
    return fetch(projectsURL)
      .then(resp => resp.json())
      .then(projects => this.selectProject(projects));
  };

  selectProject = projects => {
    if (!this.props.selectedProject) {
      const id = parseInt(this.props.router.query.id);
      const selectedProject = projects.filter(project => project.id === id)[0];
      this.setState({ selectedProject: selectedProject });
      this.getContractWithState();
    } else {
      this.getContractWithProps();
    }
  };

  getContractWithProps = async function() {
    const project = projectContract(
      this.props.selectedProject.blockchain_address
    );
    const stats = await project.methods.getSummary().call();
    this.setState({
      minimumContribution: parseInt(stats[0]["_hex"]),
      balance: parseInt(stats[1]["_hex"]),
      requestsCount: parseInt(stats[2]["_hex"]),
      supportersCount: parseInt(stats[3]["_hex"]),
      managerAddress: stats[4]
    });
  };

  updateDataOnFrontend = contribution => {
    this.setState({
      supportersCount: this.state.supportersCount + 1,
      balance: this.state.balance + contribution
    });
  };

  getContractWithState = async function() {
    debugger;

    const project = projectContract(
      this.state.selectedProject.blockchain_address
    );
    const stats = await project.methods.getSummary().call();
    console.log(stats);
    this.setState({
      minimumContribution: parseInt(stats[0]["_hex"]),
      balance: parseInt(stats[1]["_hex"]),
      requestsCount: parseInt(stats[2]["_hex"]),
      supportersCount: parseInt(stats[3]["_hex"]),
      managerAddress: stats[4]
    });
  };

  handleClick = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    return (
      <div>
        <h1>{`Project Name: ${this.props.selectedProject.title}`}</h1>
        <br />
        {/* {this.props.selectedProject.user_id === this.props.userData.id ? ( */}
        <ProjectCreationProgressComponent
          selectedProject={this.props.selectedProject}
        />
        {/* ) : null} */}
        {/* <br /> */}
        <ContributeForm
          balance={this.state.balance}
          supportersCount={this.state.supportersCount}
          userData={this.props.userData}
          minimumContribution={this.state.minimumContribution}
          selectedProject={this.props.selectedProject}
          updateDataOnFrontend={this.updateDataOnFrontend}
          selectProject={this.props.selectProject}
        />
        <ProjectHighLevelValues
          balance={this.state.balance}
          goal={this.props.selectedProject.goal}
          noSupporters={this.state.supportersCount}
          selectedProject={this.props.selectedProject}
        />
        <br />
        <ProjectProgress
          goal={this.props.selectedProject.goal}
          progress={this.props.selectedProject.progress}
          balance={this.state.balance}
        />
        <br />
        <ProjectStats
          selectedProject={this.props.selectedProject}
          minimumContribution={this.state.minimumContribution}
          manager={this.state.managerAddress}
          balance={this.state.balance}
          requestsCount={this.state.requestsCount}
          approversCount={this.state.approversCount}
        />
        <br />
        {!this.state.edit ? (
          <div>
            <Button onClick={this.handleClick} type="submit">
              Edit Project
            </Button>{" "}
          </div>
        ) : (
          <div>
            <AchieveProjectForm
              active={this.state.edit}
              selectedProject={this.props.selectedProject}
              selectProject={this.props.selectProject}
              changeEdit={this.handleClick}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ShowProject;

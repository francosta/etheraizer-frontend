import React, { Component } from "react";
import ProjectProgress from "../../components/ProjectProgress";
import AchieveProjectForm from "../../components/AchieveProjectForm";
import { Button, Grid } from "semantic-ui-react";
import ProjectDetails from "../../components/ProjectDetails";
import projectContract from "../../ethereum/projectContract";
import web3 from "../../ethereum/web3";
import ProjectStats from "../../components/ProjectStats";
import ProjectCreationProgressComponent from "../../components/ProjectCreationProgressComponent";
import ProjectHighLevelValues from "../../components/ProjectHighLevelValues";
import ContributeForm from "../../components/ContributeForm";
import ProjectPresentation from "../../components/ProjectPresentation";

export default class ShowProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      minimumContribution: null,
      balance: null,
      requestsCount: null,
      supportersCount: null,
      managerAddress: ""
    };
  }

  componentDidMount = async function() {
    if (Object.keys(this.props.selectedProject).length !== 0) {
      const address = this.props.selectedProject.blockchain_address;
      const project = projectContract(address);
      const stats = await project.methods.getSummary().call();
      this.setState({
        minimumContribution: parseInt(stats[0]["_hex"]),
        balance: parseInt(stats[1]["_hex"]),
        requestsCount: parseInt(stats[2]["_hex"]),
        supportersCount: parseInt(stats[3]["_hex"]),
        managerAddress: stats[4]
      });
    } else {
      const projectId = parseInt(this.props.router.query.id);
      const projectToSelect = this.props.allProjects.filter(
        project => project.id === projectId
      )[0];
      this.props.selectProject(projectToSelect);
      const address = projectToSelect.blockchain_address;
      const project = projectContract(address);
      const stats = await project.methods.getSummary().call();
      this.setState({
        minimumContribution: parseInt(stats[0]["_hex"]),
        balance: parseInt(stats[1]["_hex"]),
        requestsCount: parseInt(stats[2]["_hex"]),
        supportersCount: parseInt(stats[3]["_hex"]),
        managerAddress: stats[4]
      });
    }
  };

  updateDataOnFrontend = contribution => {
    this.setState({
      supportersCount: this.state.supportersCount + 1,
      balance: this.state.balance + contribution
    });
  };

  getContractWithState = async function() {};

  handleClick = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column floated="left">
              <h1>{`Project Name: ${this.props.selectedProject.title}`}</h1>
            </Grid.Column>
            <Grid.Column floated="right">
              <ContributeForm
                balance={this.state.balance}
                supportersCount={this.state.supportersCount}
                userData={this.props.userData}
                minimumContribution={this.state.minimumContribution}
                selectedProject={this.props.selectedProject}
                updateDataOnFrontend={this.updateDataOnFrontend}
                selectProject={this.props.selectProject}
                addToUserSupportedProjects={
                  this.props.addToUserSupportedProjects
                }
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <ProjectCreationProgressComponent
          selectedProject={this.props.selectedProject}
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
        <br />
        <br />
        <ProjectPresentation selectedProject={this.props.selectedProject} />
        <br />
        {!this.state.edit ? (
          <div>
            {this.props.selectedProject.user_id === this.props.userData.id ? (
              <Button onClick={this.handleClick} type="submit">
                Edit Project
              </Button>
            ) : null}
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

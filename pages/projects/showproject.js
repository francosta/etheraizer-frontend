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

export default class ShowProject extends Component {
  // static async getInitialProps(props) {
  //   console.log(props);
  //   return {};
  // }

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
    const web3 = web3;
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
  };

  handleClick = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    return (
      <div>
        <h1>{`Project Name: ${this.props.selectedProject.title}`}</h1>
        <ProjectProgress
          goal={this.props.selectedProject.goal}
          progress={this.props.selectedProject.progress}
        />
        <br />
        <ProjectHighLevelValues
          balance={this.state.balance}
          goal={this.props.selectedProject.goal}
          noSupporters={this.state.supportersCount}
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
            <h2>{this.props.selectedProject.title}</h2>
            <ProjectDetails selectedProject={this.props.selectedProject} />
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

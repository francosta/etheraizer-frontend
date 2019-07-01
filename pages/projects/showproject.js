import React, { Component } from "react";
import ProjectProgress from "../../components/ProjectProgress";
import AchieveProjectForm from "../../components/AchieveProjectForm";
import { Button } from "semantic-ui-react";
import ProjectDetails from "../../components/ProjectDetails";
import projectContract from "../../ethereum/projectContract";
import web3 from "../../ethereum/web3";

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
      approversCount: null,
      managerAddress: "",
      loading: true
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
      approversCount: parseInt(stats[3]["_hex"]),
      managerAddress: stats[4]
    });
    console.log(stats);
  };

  //   then(function(balance) {
  //     console.log(web3.fromWei(balance.toNumber(), "ether" ) );
  // })
  // componentDidMount() {
  //   console.log(this.props.selectedProject);
  //   const data   = await loadData(this.props.selectedProject.blockchain_address)
  //   this.setState({
  //     data
  //   }, () => this.setState({loading: false}))
  // }

  handleClick = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    return (
      <div>
        {!this.state.edit ? (
          <div>
            <ProjectProgress />
            <h1>Project Title</h1>
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

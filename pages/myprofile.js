import React, { Component } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Grid, Header, Icon, Image, Item } from "semantic-ui-react";
=======
import {
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Container,
  Button,
  Card
} from "semantic-ui-react";
import { Link } from "../routes";
import Router from "next/router";
import UserProfile from "../components/UserProfile";
>>>>>>> development

export default class myprofile extends Component {
  createdProjects =
    this.props.userData.created_projects.length === 0
      ? null
      : this.props.userData.created_projects;

  deployedProjects =
    this.props.userData.deployed_projects.length === 0
      ? null
      : this.props.userData.deployed_projects;

  fundedProjects =
    this.props.userData.funded_projects.length === 0
      ? null
      : this.props.userData.funded_projects;
=======
import { Grid, Header, Item, Container, Button, Card } from "semantic-ui-react";
import { Link } from "../routes";
import Router from "next/router";
import UserProfile from "../components/UserProfile";
import ProjectCard from "../components/ProjectCard";

export default class myprofile extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     mySupport: []
  //   };
  // }

  // componentDidMount() {
  //   const myContracts = this.props.supportContracts.filter(
  //     contract => contract.user_id === this.props.userData.id
  //   );

  //   const myProjects = myContracts
  //     .map(contract => {
  //       return this.props.allProjects.filter(project => {
  //         return contract.project_id === project.id;
  //       });
  //     })
  //     .flat();

  //   this.setState({ mySupport: myProjects });
  // }
>>>>>>> development

  render() {
    return (
      <div>
        <div>
          <Header size="huge">My Profile</Header>
          <br />
          <UserProfile userData={this.props.userData} />
          <br />
          <Header size="large">My Projects</Header>
          <br />
          <Grid columns="three" divided>
            <Grid.Column>
              <Header as="h2" icon="road" content="Created Projects" />
              <br />
              {this.createdProjects ? (
                <Grid.Row>
                  <Item.Group link>
                    <Item>
                      <Item.Image
                        size="tiny"
                        src={
                          this.props.userData.created_projects[
                            this.props.userData.created_projects.length - 1
                          ].image
                        }
                      />

                      <Item.Content>
                        <Item.Header>
                          {
                            this.createdProjects[
                              this.createdProjects.length - 1
                            ].title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.createdProjects[
                              this.createdProjects.length - 1
                            ].description
                          }
                          }
                        </Item.Description>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Image
                        size="tiny"
                        src="https://react.semantic-ui.com/images/avatar/large/veronika.jpg"
                      />

                      <Item.Content>
                        <Item.Header>
                          {
                            this.createdProjects[
                              this.createdProjects.length - 2
                            ].title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.createdProjects[
                              this.createdProjects.length - 2
                            ].description
                          }
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Grid.Row>
              ) : null}
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" icon="plug" content="Deployed Projects" />
              <br />
              {this.deployedProjects ? (
                <Grid.Row>
                  <Item.Group link>
                    <Item>
                      <Item.Image
                        size="tiny"
                        src={
                          this.props.userData.deployed_projects[
                            this.props.userData.deployed_projects.length - 1
                          ].image
                        }
                      />

                      <Item.Content>
                        <Item.Header>
                          {
                            this.deployedProjects[
                              this.deployedProjects.length - 1
                            ].title
                          }
                        </Item.Header>
                        <Item.Description>
<<<<<<< HEAD
                          {
                            this.deployedProjects[
                              this.deployedProjects.length - 1
                            ].description
                          }
                          }
=======
                          {`${this.props.userData.deployed_projects[
                            this.props.userData.deployed_projects.length - 1
                          ].description.substring(0, 100)}` + "..."}
>>>>>>> development
                        </Item.Description>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Image
                        size="tiny"
                        src="https://react.semantic-ui.com/images/avatar/large/veronika.jpg"
                      />

                      <Item.Content>
                        <Item.Header>
                          {
                            this.deployedProjects[
                              this.deployedProjects.length - 2
                            ].title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.deployedProjects[
                              this.deployedProjects.length - 2
                            ].description
                          }
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Grid.Row>
              ) : null}
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" icon="star" content="Funded Projects" />
              <br />
              {this.fundedProjects ? (
                <Grid.Row>
                  <Item.Group link>
                    <Item>
                      <Item.Image
                        size="tiny"
                        src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
                      />

                      <Item.Content>
                        <Item.Header>
                          {
                            this.fundedProjects[this.fundedProjects.length - 1]
                              .title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.fundedProjects[this.fundedProjects.length - 1]
                              .description
                          }
                          }
                        </Item.Description>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Image
                        size="tiny"
                        src="https://react.semantic-ui.com/images/avatar/large/veronika.jpg"
                      />

                      <Item.Content>
                        <Item.Header>
                          {
                            this.fundedProjects[this.fundedProjects.length - 2]
                              .title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.fundedProjects[this.fundedProjects.length - 2]
                              .description
                          }
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Grid.Row>
              ) : null}
            </Grid.Column>
            <Header size="large">Projects I've supported</Header>
          </Grid>
<<<<<<< HEAD
=======
          <br />
          <br />
          <Header as="h2" icon="heart" content="Project's I've supported" />
          <br />
          <Card.Group itemsPerRow={5}>
            {this.props.userSupport.map((project, i) => (
              <ProjectCard
                key={i}
                project={project}
                selectProject={this.props.selectProject}
              />
            ))}
          </Card.Group>
>>>>>>> development
        </div>
      </div>
    );
  }
}

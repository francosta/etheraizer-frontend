import React, { Component } from "react";
import { Grid, Header, Item, Container, Button, Card } from "semantic-ui-react";
import { Link } from "../routes";
import Router from "next/router";
import UserProfile from "../components/UserProfile";
import ProjectCard from "../components/ProjectCard";
import UserProfileEditForm from "../components/UserProfileEditForm";

export default class myprofile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };
  }

  componentDidMount() {
    if (!this.props.userData) {
      const href = "/login";
      const as = href;
      Router.push(href, as, { shallow: true });
    }
  }

  editProfile = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <div>
          <Header style={{ marginTop: 20 }} size="huge">
            My Profile
          </Header>
          <UserProfile
            style={{ marginTop: 20 }}
            userData={this.props.userData}
            editProfile={this.editProfile}
            edit={this.state.edit}
          />
          {this.state.edit ? (
            <UserProfileEditForm
              userData={this.props.userData}
              updateUserData={this.props.updateUserData}
              editProfile={this.editProfile}
            />
          ) : (
            <div>
              <Header style={{ marginTop: 40 }} size="large">
                My Projects
              </Header>
              <Grid columns="three" divided>
                <Grid.Column>
                  <Header as="h2" icon="road" content="Created Projects" />
                  <br />
                  {this.props.userData.created_projects.length > 0 ? (
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
                                this.props.userData.created_projects[
                                  this.props.userData.created_projects.length -
                                    1
                                ].title
                              }
                            </Item.Header>
                            <Item.Description>
                              {
                                this.props.userData.created_projects[
                                  this.props.userData.created_projects.length -
                                    1
                                ].description
                              }
                              }
                            </Item.Description>
                          </Item.Content>
                        </Item>
                        {this.props.userData.created_projects.length > 1 ? (
                          <Button primary>See More</Button>
                        ) : null}
                      </Item.Group>
                    </Grid.Row>
                  ) : (
                    <Container fluid>
                      <Header as="h2">No created projects</Header>
                      <p>You don't have any created projects.</p>
                    </Container>
                  )}
                </Grid.Column>
                <Grid.Column>
                  <Header as="h2" icon="plug" content="Deployed Projects" />
                  <br />
                  {this.props.userData.deployed_projects.length > 0 ? (
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
                                this.props.userData.deployed_projects[
                                  this.props.userData.deployed_projects.length -
                                    1
                                ].title
                              }
                            </Item.Header>
                            <Item.Description>
                              {`${this.props.userData.deployed_projects[
                                this.props.userData.deployed_projects.length - 1
                              ].description.substring(0, 100)}` + "..."}
                            </Item.Description>
                          </Item.Content>
                        </Item>
                        {this.props.userData.deployed_projects.length > 1 ? (
                          <Button primary>See More</Button>
                        ) : null}
                      </Item.Group>
                    </Grid.Row>
                  ) : (
                    <Container fluid>
                      <Header as="h2">No funded projects</Header>
                      <p>You don't have any funded projects.</p>
                    </Container>
                  )}
                </Grid.Column>
              </Grid>
              <br />
              <br />
              <Header as="h2" icon="heart" content="Projects I've supported" />
              <br />
              <Card.Group itemsPerRow={4}>
                {this.props.userSupport.map((project, i) => (
                  <ProjectCard
                    key={i}
                    project={project}
                    selectProject={this.props.selectProject}
                  />
                ))}
              </Card.Group>
            </div>
          )}
        </div>
      </div>
    );
  }
}

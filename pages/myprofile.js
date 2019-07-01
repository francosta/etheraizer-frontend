import React, { Component } from "react";
import { Grid, Header, Icon, Image, Item } from "semantic-ui-react";

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

  render() {
    return (
      <div>
        <div>
          <Header size="huge">My Profile</Header>
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
                        src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
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
                        src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
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
                          {
                            this.deployedProjects[
                              this.deployedProjects.length - 1
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
        </div>
      </div>
    );
  }
}

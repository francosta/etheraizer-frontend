import React, { Component } from "react";
import { Grid, Header, Icon, Image, Item, Container } from "semantic-ui-react";

export default class myprofile extends Component {
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
              {this.props.userData.created_projects.length > 0 ? (
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
                            this.props.userData.created_projects[
                              this.props.userData.created_projects.length - 1
                            ].title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.props.userData.created_projects[
                              this.props.userData.created_projects.length - 1
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

                      {/* <Item.Content>
                        <Item.Header>
                          {
                            this.props.userData.created_projects[
                              this.props.userData.created_projects.length - 2
                            ].title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.props.userData.created_projects[
                              this.props.userData.created_projects.length - 2
                            ].description
                          }
                        </Item.Description>
                      </Item.Content> */}
                    </Item>
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
                        src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
                      />

                      <Item.Content>
                        <Item.Header>
                          {
                            this.props.userData.deployed_projects[
                              this.props.userData.deployed_projects.length - 1
                            ].title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.props.userData.deployed_projects[
                              this.props.userData.deployed_projects.length - 1
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

                      {/* <Item.Content>
                        <Item.Header>
                          {
                            this.props.userData.deployed_projects[
                              this.props.userData.deployed_projects.length - 2
                            ].title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.props.userData.deployed_projects[
                              this.props.userData.deployed_projects.length - 2
                            ].description
                          }
                        </Item.Description>
                      </Item.Content> */}
                    </Item>
                  </Item.Group>
                </Grid.Row>
              ) : (
                <Container fluid>
                  <Header as="h2">No deployed projects</Header>
                  <p>You don't have any deployed projects.</p>
                </Container>
              )}
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" icon="star" content="Funded Projects" />
              <br />
              {this.props.userData.funded_projects.length > 0 ? (
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
                            this.props.userData.funded_projects[
                              this.props.userData.funded_projects.length - 1
                            ].title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.props.userData.funded_projects[
                              this.props.userData.funded_projects.length - 1
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

                      {/* <Item.Content>
                        <Item.Header>
                          {
                            this.props.userData.funded_projects[
                              this.props.userData.funded_projects.length - 2
                            ].title
                          }
                        </Item.Header>
                        <Item.Description>
                          {
                            this.props.userData.funded_projects[
                              this.props.userData.funded_projects.length - 2
                            ].description
                          }
                        </Item.Description>
                      </Item.Content> */}
                    </Item>
                  </Item.Group>
                </Grid.Row>
              ) : (
                <Container fluid>
                  <Header as="h2">No funded projects</Header>
                  <p>You don't have any funded projects.</p>
                </Container>
              )}
            </Grid.Column>
            <Header size="large">Projects I've supported</Header>
          </Grid>
        </div>
      </div>
    );
  }
}

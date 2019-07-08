import React, { Component } from "react";
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

export default class myprofile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mySupport: []
    };
  }

  componentDidMount() {
    const myContracts = this.props.supportContracts.filter(
      contract => contract.user_id === this.props.userData.id
    );

    const myProjects = myContracts
      .map(contract => {
        return this.props.allProjects.filter(project => {
          return contract.project_id === project.id;
        });
      })
      .flat();

    this.setState({ mySupport: myProjects });
  }

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
          <Header as="h2" icon="heart" content="Project's I've supported" />
          <br />
          <Card.Group itemsPerRow={5}>
            {this.state.mySupport.map((project, i) => (
              <Card key={i} {...project}>
                {/* <Image
                  src="/images/avatar/large/matthew.png"
                  wrapped
                  ui={false}
                /> */}
                <Card.Content>
                  <Link route={`/projects/${project.id}`}>
                    <Card.Header
                      onClick={() => this.props.selectProject(project)}>
                      {project.title}
                    </Card.Header>
                  </Link>
                  <Card.Meta>
                    <span className="date">Goal: {project.goal}</span>
                  </Card.Meta>
                  <Card.Description>{project.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    {project.users.length} supporters
                  </a>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
      </div>
    );
  }
}

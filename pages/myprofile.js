import React, { Component } from "react";
import { Grid, Header, Icon, Image } from "semantic-ui-react";

export default class myprofile extends Component {
  render() {
    return (
      <div>
        <div>
          <Header size="huge">My Profile</Header>
          <br />
          <Header size="large">My Projects</Header>
          <Grid columns="three" divided>
            <Grid.Column>
              <Header as="h2" icon="road" content="Created Projects" />
              <br />
              <Grid.Row>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Row>
              <br />
              <Grid.Row>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" icon="plug" content="Deployed Projects" />
              <br />
              <Grid.Row>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Row>
              <br />
              <Grid.Row>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" icon="star" content="Funded Projects" />
              <br />
              <Grid.Row>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Row>
              <br />
              <Grid.Row>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Row>
            </Grid.Column>
            <Header size="large">Projects I've supported</Header>
          </Grid>
        </div>
      </div>
    );
  }
}

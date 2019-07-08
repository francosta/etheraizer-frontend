import React from "react";
import { Grid, Container, Header, Image } from "semantic-ui-react";

export default function ProjectPresentation(props) {
  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width={8}>
          <Image src={props.selectedProject.image} />
        </Grid.Column>
        <Grid.Column>
          <Container>
            <Header as="h2">Project's Description</Header>
            <p>{props.selectedProject.description}</p>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

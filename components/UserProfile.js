import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";

export default function UserProfile(props) {
  return (
    <Grid divided>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Image src={props.userData.profile_picture} size="small" circular />
        </Grid.Column>
        <Grid.Column>
          <Container>
            <p>First Name: {props.userData.first_name}</p>
            <p>Last Name: {props.userData.last_name}</p>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

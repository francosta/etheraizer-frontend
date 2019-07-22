import React from "react";
import { Grid, Image, Container, Button } from "semantic-ui-react";

export default function UserProfile(props) {
  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width={3}>
          <Image src={props.userData.profile_picture} size="small" circular />
        </Grid.Column>
        <Grid.Column width={8}>
          <Container>
            <h2>First Name: {props.userData.first_name}</h2>
            <h2>Last Name: {props.userData.last_name}</h2>
            <h2>Email: {props.userData.email}</h2>
            <br />
            {props.edit ? null : (
              <Button primary onClick={props.editProfile}>
                Edit Profile
              </Button>
            )}
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

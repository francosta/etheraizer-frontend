import React from "react";
import { Grid, Image } from "semantic-ui-react";

export default function UserProfile(props) {
  return (
    <Grid divided>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src={props.userData.profile_picture} size="small" circular />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

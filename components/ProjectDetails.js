import React from "react";
import { Item } from "semantic-ui-react";

export default function ProjectDetails(props) {
  return (
    <Item.Group>
      <Item>
        <Item.Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content>
          <Item.Header as="a">Description</Item.Header>
          <Item.Description>
            <p>{props.selectedProject.description}</p>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content>
          <Item.Header as="a">Blockchain Address</Item.Header>
          <Item.Description
            content={props.selectedProject.blockchain_address}
          />
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <Item.Content header="Goal" description={props.selectedProject.goal} />
      </Item>
    </Item.Group>
  );
}

import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    No. Supporters: 17
  </a>
);

const ProjectCard = props => (
  <Card
    image="https://drive.google.com/uc?id=1l-c_jyMF1elbZKIeemM-vaFL-eRqd9xH"
    header={props.title}
    meta={`Status: ${props.status}`}
    description={props.description}
    extra={extra}
  />
);

export default ProjectCard;

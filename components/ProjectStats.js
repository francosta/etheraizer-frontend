import React from "react";
import { Card } from "semantic-ui-react";

export default function ProjectStats(props) {
  const items = [
    {
      header: "Project Blockchain Address",
      description: "This is the person who created the project",
      meta: props.manager
    },
    {
      header: "Manager's Blockchain Address",
      description: "How much you need to donate to become a supporter",
      meta: props.manager
    },
    {
      header: "Minimum Contribution",
      description: "How much you need to donate to become a supporter",
      meta: props.minimumContribution
    }
  ];

  return <Card.Group centered items={items} />;
}

import React from "react";
import { Card } from "semantic-ui-react";

export default function ProjectStats(props) {
  const items = [
    {
      header: "Project Owner Blockchain Address",
      description: "This is the person who created the project",
      meta: props.manager
    },
    {
      header: "Goal",
      description: "How much this project needs to get funded.",
      meta: props.selectedProject.goal
    },
    {
      header: "Minimum Contribution",
      description: "How much you need to donate to become a supporter",
      meta: props.minimumContribution
    },
    {
      header: "Amount collected",
      description: "This is how much the project has received",
      meta: props.balance
    },
    {
      header: "No. Supporters",
      description:
        "This is the amuont of people who have contributed to this project"
      //   meta: props.selectedProject.users.length
    }
  ];

  return <Card.Group centered items={items} />;
}

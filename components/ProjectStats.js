import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "../routes";

export default function ProjectStats(props) {
  const items = [
    {
      header: (
        <a
          style={{ pointerEvents: "auto" }}
          href={`https://kovan.etherscan.io/address/${
            props.selectedProject.blockchain_address
          }`}>
          Project Blockchain Address
        </a>
      ),
      description: "This is the person who created the project"
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

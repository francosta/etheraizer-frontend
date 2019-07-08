import React from "react";
import { Card } from "semantic-ui-react";

export default function ProjectStats(props) {
  const items = [
    {
<<<<<<< HEAD
      header: "Project Blockchain Address",
      description: "This is the person who created the project",
      meta: props.selectedProject.blockchain_address
=======
      header: (
        <a
          target="_blank"
          style={{ pointerEvents: "auto" }}
          href={`https://kovan.etherscan.io/address/${
            props.selectedProject.blockchain_address
          }`}>
          <h3>Project Blockchain Address</h3>
        </a>
      ),
      description: "This is the address of the project."
>>>>>>> development
    },
    {
      header: (
        <a
          target="_blank"
          style={{ pointerEvents: "auto" }}
          href={`https://kovan.etherscan.io/address/${props.manager}`}>
          <h3>Owner's Blockchain Address</h3>
        </a>
      ),
      description: "This is the address of the user who created the project"
    },
    {
      header: "Minimum Contribution",
      description: "How much you need to donate to become a supporter",
      meta: <h4>{props.minimumContribution}</h4>
    }
  ];

  return <Card.Group centered items={items} />;
}

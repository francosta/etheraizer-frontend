import React from "react";
import { Step } from "semantic-ui-react";

export default function ProjectCreationProgressComponent(props) {
  return (
    <Step.Group ordered>
      <Step
        active={props.selectedProject}
        completed={
          props.selectedProject.status === "deploy" ||
          props.selectedProject.status === "achieve" ||
          props.selectedProject.status === "funded"
        }>
        <Step.Content>
          <Step.Title>Create</Step.Title>
          <Step.Description>Create and pitch your project</Step.Description>
        </Step.Content>
      </Step>
      <Step
        active={props.selectedProject.status === "deploy"}
        completed={
          props.selectedProject.status === "achieve" ||
          props.selectedProject.status === "funded"
        }>
        <Step.Content>
          <Step.Title>Deploy</Step.Title>
          <Step.Description>
            Deploy your project to the Blockchain
          </Step.Description>
        </Step.Content>
      </Step>

      <Step
        active={props.selectedProject.status === "achieve"}
        completed={props.selectedProject.status === "funded"}>
        <Step.Content>
          <Step.Title>Achieve</Step.Title>
          <Step.Description>Reach your funding goal</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  );
}

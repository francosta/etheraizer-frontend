import React from "react";
import { Step } from "semantic-ui-react";

export default function ProjectCreationProgressComponent(props) {
  return (
    <Step.Group ordered>
      {/* {props.projectStatus === "create" ? <Step active> : <Step complete> } */}
      <Step
        active={props.projectStatus === "create"}
        completed={
          props.projectStatus === "deploy" ||
          props.projectStatus === "achieve" ||
          props.projectStatus === "funded"
        }>
        <Step.Content>
          <Step.Title>Create</Step.Title>
          <Step.Description>Create and pitch your project</Step.Description>
        </Step.Content>
      </Step>
      <Step
        active={props.projectStatus === "deploy"}
        completed={
          props.projectStatus === "achieve" || props.projectStatus === "funded"
        }>
        <Step.Content>
          <Step.Title>Deploy</Step.Title>
          <Step.Description>
            Deploy your project to the Blockchain
          </Step.Description>
        </Step.Content>
      </Step>

      <Step
        active={props.projectStatus === "achieve"}
        completed={props.projectStatus === "funded"}>
        <Step.Content>
          <Step.Title>Achieve</Step.Title>
          <Step.Description>Reach your funding goal</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  );
}

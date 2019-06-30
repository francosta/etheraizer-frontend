import ProjectProgress from "../../components/ProjectProgress";
import React from "react";
import AchieveProjectForm from "../../components/AchieveProjectForm";
import { Button } from "semantic-ui-react";
import ProjectDetails from "../../components/ProjectDetails";

export default function ShowProject(props) {
  return (
    <div>
      <ProjectProgress />
      <h1>Project Title</h1>
      <h2>{props.selectedProject.title}</h2>
      <ProjectDetails selectedProject={props.selectedProject} />
      <Button type="submit">Edit Project</Button>
      <AchieveProjectForm
        selectedProject={props.selectedProject}
        selectProject={props.selectProject}
      />
    </div>
  );
}

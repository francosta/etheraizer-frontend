import React, { Component } from "react";
import { Button, Progress } from "semantic-ui-react";

export default class ProjectProgress extends Component {
  render() {
    let progress;
    if (this.props.progress === null) {
      progress = 0;
    } else {
      progress = this.props.progress;
    }

    return (
      <div>
        <Progress percent={progress} indicating />
      </div>
    );
  }
}

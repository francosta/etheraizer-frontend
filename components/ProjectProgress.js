import React, { Component } from "react";
import { Button, Progress } from "semantic-ui-react";

export default class ProjectProgress extends Component {
  state = { percent: 33 };

  render() {
    let progress;
    if (this.props.progress === null) {
      progress = 0;
    } else {
      progress = (this.props.progress / this.props.goal) * 100;
    }

    return (
      <div>
        <Progress percent={progress} indicating />
      </div>
    );
  }
}

import React from "react";
import { Icon, Image, Statistic } from "semantic-ui-react";

const ProjectHighLevelValues = props => (
  <Statistic.Group widths="three">
    <Statistic>
      <Statistic.Value>
        <Icon name="target" />
        {"  "}
        {props.goal}
      </Statistic.Value>
      <Statistic.Label>Goal in Wei</Statistic.Label>
    </Statistic>
    <Statistic>
      <Statistic.Value>
        <Icon name="ethereum" />
        {"  "}
        {props.balance}
      </Statistic.Value>
      <Statistic.Label>Amount Collected</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Image
          src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
          inline
          circular
        />
        {"  "}
        {props.noSupporters}
      </Statistic.Value>
      <Statistic.Label>No. Supporters</Statistic.Label>
    </Statistic>
  </Statistic.Group>
);

export default ProjectHighLevelValues;

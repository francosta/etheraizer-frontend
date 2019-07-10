import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import Layout from "../components/layouts";
import Router from "next/router";
import { validate } from "../services/authentication";
import Login from "./login";
import { Container, Image } from "semantic-ui-react";

export default class Index extends Component {
  render() {
    return (
      <div>
        <div className="team">
          <style>
            {`
            .team {
              width: 100%;
              // height: 344px;
              background-size: contain;
              // background-repeat: no-repeat
              background-image: url("https://github.com/francosta/etheraizer-frontend/raw/development/public/homepage.png");
            }
        `}
          </style>
          <h1 />
        </div>
      </div>
    );
  }
}

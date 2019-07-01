import React, { Component } from "react";
import factory from "../ethereum/factoryContract";
import Layout from "../components/layouts";
import Router from "next/router";
import { validate } from "../services/authentication";
import Login from "./login";

export default class Index extends Component {
  render() {
    return <h2>This will be the homepage</h2>;
  }
}

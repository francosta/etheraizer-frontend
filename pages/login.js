import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import Head from "next/head";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>
        <LoginForm login={this.props.login} />
      </div>
    );
  }
}

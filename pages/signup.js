import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import Head from "next/head";
// import Background from "../public/background.jpg";

// let sectionStyle = {
//   width: "100%",
//   height: "100vh",
//   backgroundImage: `url(${Background})`,
//   backgroundSize: "cover",
//   BackgroundRepeat: "no-repeat"
// };

export default class Login extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <SignUpForm login={this.props.login} />
      </div>
    );
  }
}

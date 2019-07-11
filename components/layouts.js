import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Image, Sticky } from "semantic-ui-react";
import Head from "next/head";
import Index from "../pages/index";

export default props => {
  if (props.router.route === "/") {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>
        {props.userData.id ? (
          <div>
            <Sticky>
              <Navbar
                userData={props.userData}
                logout={props.logout}
                selectProject={props.selectProject}
              />
            </Sticky>
          </div>
        ) : (
          <Sticky>
            <Navbar
              userData={props.userData}
              logout={props.logout}
              selectProject={props.selectProject}
            />
          </Sticky>
        )}
        <Index
          selectProject={props.selectProject}
          userData={props.userData}
          projects={props.allProjects}
        />
      </div>
    );
  } else {
    return (
      // We use container in order to limit the size of the elements in the window.
      // We will put the CSS stylesheet link within the head so that it stays in the head of the HTML file.
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>
        {props.userData.id ? (
          <Sticky>
            <Navbar
              userData={props.userData}
              logout={props.logout}
              selectProject={props.selectProject}
            />{" "}
          </Sticky>
        ) : (
          <Sticky>
            <Navbar
              userData={props.userData}
              logout={props.logout}
              selectProject={props.selectProject}
            />{" "}
          </Sticky>
        )}
        <Container>{props.children}</Container>
        <Footer />
      </div>
    );
  }
};

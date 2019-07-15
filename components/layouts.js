import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "semantic-ui-react";
import Head from "next/head";

export default props => {
<<<<<<< HEAD
  if (!props.userData.first_name) {
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
<<<<<<< HEAD
        <Container>{props.children}</Container>
=======
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
          login={props.login}
        />
>>>>>>> development
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
        <Navbar logout={props.logout} selectProject={props.selectProject} />
        <Container>{props.children}</Container>
        <Footer />
      </div>
    );
  }
=======
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
        <Navbar logout={props.logout} selectProject={props.selectProject} />
      ) : null}
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
>>>>>>> development
};

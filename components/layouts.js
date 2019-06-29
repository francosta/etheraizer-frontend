import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "semantic-ui-react";
import Head from "next/head";

export default props => {
  return (
    // We use container in order to limit the size of the elements in the window.
    // We will put the CSS stylesheet link within the head so that it stays in the head of the HTML file.
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </Container>
  );
};

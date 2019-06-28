import React from 'react';
import Navbar from './Navbar'
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

export default props => {

    return (
        // We use container in order to limit the size of the elements in the window.
        <Container>
            <Head>
            <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        </Head>
        <Navbar />
        {props.children}
        <h1>I'm a footer</h1>
        </Container>
    )
}
import React from "react";
import Layout from "../components/layouts";
import LoginForm from "../components/LoginForm";
import Head from "next/head";

export default function signup() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      </Head>
      <LoginForm
        style={{
          backgroundImage: `url(${"https://drive.google.com/uc?export=download&id=1g_CeGjcoMwCcOAYJzK0TCDyK-qg_ZZ46"})`
        }}
      />
    </div>
  );
}

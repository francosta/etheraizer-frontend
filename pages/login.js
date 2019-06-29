import React from "react";
import Layout from "../components/layouts";
import LoginForm from "../components/LoginForm";

export default function signup() {
  return (
    <Layout>
      <LoginForm
        style={{
          backgroundImage: `url(${"https://drive.google.com/uc?export=download&id=1g_CeGjcoMwCcOAYJzK0TCDyK-qg_ZZ46"})`
        }}
      />
    </Layout>
  );
}

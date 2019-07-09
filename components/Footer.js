import React from "react";
import { Header } from "semantic-ui-react";

export default function Footer() {
  return (
    <div style={{ marginTop: 50 }}>
      <br />
      <Header
        size="small"
        as="h6"
        block
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          left: 0
        }}>
        Etheraize | 2019 - Francisco Costa
      </Header>
    </div>
  );
}

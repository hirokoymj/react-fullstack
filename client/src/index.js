import ApolloBoost, { gql } from "apollo-boost";
import React, { Fragment, useState } from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "./Styles/ThemeProvier";

const client = new ApolloBoost({
  uri: "http://localhost:3000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));

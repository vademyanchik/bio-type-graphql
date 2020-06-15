import * as React from "react";
import * as ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { Hello } from "./components/Hello";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "same-origin",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Hello compiler="1" framework="Reactsaddsadas" />
  </ApolloProvider>,
  document.getElementById("container")
);

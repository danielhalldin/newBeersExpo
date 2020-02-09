import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import getEnvVars from "../environment";
const { untappedAccessToken } = getEnvVars();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://core-data-source.herokuapp.com/graphql",
    headers: {
      "x-untappd-access-token": untappedAccessToken
    }
  })
});

export default client;

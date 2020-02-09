import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://core-data-source.herokuapp.com/graphql",
    headers: {
      "x-untappd-access-token":
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjQxQjQ0OUQ0QTcwNkMxMTNCODlDRjMyMTYyNjY0RDM5QTMxNUMxQTYi.foRUzO_UqpmeQ24G6gxlosXQTbkoPF_naD06SUl3MGQ"
    }
  })
});

export default client;

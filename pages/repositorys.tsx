import React from "react";
import Repositorys from "../components/Repositorys";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

interface node {
  node: [];
  pinnedItems: any;
}

export default function repositorys(pinnedItems: node) {
  return (
    <div>
      <Repositorys {...pinnedItems} />
    </div>
  );
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql"
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "jimwhiteford") {
          pinnedItems(first: 4) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  description
                  openGraphImageUrl
                }
              }
            }
          }
        }
      }
    `
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(
    ({ node }: { node: any }) => node
  );

  return {
    props: {
      pinnedItems
    }
  };
}

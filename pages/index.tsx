import type { NextPage } from "next";
import Head from "next/head";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Repositorys from "../components/Repositorys";

const Home: NextPage = (pinnedItems: {}) => {
  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Repositorys {...pinnedItems} />
    </div>
  );
};

export default Home;

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
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);

  return {
    props: {
      pinnedItems
    }
  };
}

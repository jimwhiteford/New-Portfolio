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

const Home: NextPage = () => {
  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>My Portfolio</title>
      </Head>
    </div>
  );
};

export default Home;

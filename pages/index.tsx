import Drawer from "../components/Drawer";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <About />
    </div>
  );
};

export default Home;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { useState } from "react";
import { Drawer } from "@mui/material";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <div className="h-screen overflow-y-scroll bg-slate-200">
      <Header />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

"use client";
import React from "react";
import { store } from "../common/lib/redux/store";
import { Provider } from "react-redux";
import Layout from "./Layout";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <Layout>{children}</Layout>
      </Provider>
    </>
  );
};

export default Providers;

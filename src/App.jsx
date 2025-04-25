import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Home } from "./components/pages/Home";
import { Company } from "./components/pages/Company";
import { About } from "./components/pages/About";

export const App = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/company"
          element={
            <DefaultLayout>
              <Company />
            </DefaultLayout>
          }
        />
        <Route
          path="/about"
          element={
            <DefaultLayout>
              <About />
            </DefaultLayout>
          }
        />
      </Routes>
    </HelmetProvider>
  );
};

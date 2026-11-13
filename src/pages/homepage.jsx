
import React from "react";

import Header from "../components/header/header";
import Hero from "../components/hero/hero";

import "./homePage.css";

export default function HomePage() {
  return (
    <main className="kamshi-homepage">
      <Header />

      <Hero />

      {/* Next components will go here */}

      {/* <Benefits /> */}
      {/* <Collections /> */}
      {/* <Footer /> */}
    </main>
  );
}

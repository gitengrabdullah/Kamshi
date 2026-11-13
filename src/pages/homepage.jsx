
import React from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

import "./HomePage.css";

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

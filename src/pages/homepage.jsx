
import React from "react";

import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Benefits from "../components/Benefits/Benefit";
import Collections from "../components/collections/collection";
import Products from "../components/Products/Product";
import About from "../components/about/about";


import "./homepage.css";

export default function HomePage() {
  return (
    <main className="kamshi-homepage">
      <Header />

      <Hero />
      <Benefits />
      <Collections />
    <Products />
         <About />

      {/* <Footer /> */}
    </main>
  );
}

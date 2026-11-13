
import React from "react";

import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Benefits from "../components/benefits/benefit";
import Collections from "../components/collections/collection";
import Products from "../components/products/product";
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

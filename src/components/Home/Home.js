import React from "react";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import Team from "./Team";
import Contacts from "./Contacts";

function Home() {
  return (
    <>
      <div>
        <Services />
        {/* Portfolio Grid*/}
        <Projects />
        {/* About*/}
        <About />
        {/* Team*/}
        <Team />
        {/* Contact*/}
        <Contacts />
      </div>
    </>
  );
}

export default Home;

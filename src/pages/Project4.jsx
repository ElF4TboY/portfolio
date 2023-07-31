import React from "react";
import Mouse from "../component/Mouse";
import Navigation from "../component/Navigation";
import Logo from "../component/Logo";
import Buttons from "../component/Buttons";
import Project from "../component/Project";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <Buttons left={"/projet-3"} right={"/projet-5"} />
      </div>
    </main>
  );
};

export default Project4;

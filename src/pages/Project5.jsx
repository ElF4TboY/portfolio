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
        <Project projectNumber={4} />
        <Buttons left={"/projet-4"} right={"/"} />
      </div>
    </main>
  );
};

export default Project4;

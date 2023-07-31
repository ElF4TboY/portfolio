import React from "react";
import Mouse from "../component/Mouse";
import Navigation from "../component/Navigation";
import Logo from "../component/Logo";
import Buttons from "../component/Buttons";
import Project from "../component/Project";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <Buttons left={"/"} right={"/projet-2"} />
      </div>
    </main>
  );
};

export default Project1;

import React from "react";
import Buttons from "../component/Buttons";
import DynamicText from "../component/DynamicText";
import Mouse from "../component/Mouse";
import Navigation from "../component/Navigation";
import SocialNetwork from "../component/SocialNetwork";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <div>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="home-content">
            <motion.h1
              drag
              // onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              Thomas MARCHAND
            </motion.h1>
            <motion.h2
              drag
              // onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              <DynamicText />
            </motion.h2>
          </div>
        </div>
        <Buttons left={"/projet-5"} right={"/projet-1"} />
      </motion.div>
    </div>
  );
};

export default Home;

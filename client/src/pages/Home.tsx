import React from "react";
import Navbar from "./Navbar";
import Intro from "../components/Intro";
import { chats } from "../assets";
import styles from "../styles";

const Home = () => {
  return (
    <div className={`w-[100%] h-[100%] relative`}>
      <Navbar />
      <Intro />

      <div
        className={`chats ${styles.flexCenter} chats w-[100%] absolute top-[145%] left-[50%] lg:top-[125%] md:top-[130%] sm:hidden`}
      >
        <img
          src={chats}
          alt="chats"
          className="w-[75%] mb-[4rem] drop-shadow-2xl md:w-[85%]"
        />
      </div>
    </div>
  );
};

export default Home;

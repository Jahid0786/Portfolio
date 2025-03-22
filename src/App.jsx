import { Outlet } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSetion from "./components/homepage/hero-section/";
import Nav from "./components/navbar";
import ScrollToTop from "./components/helper/scroll-to-top";
import { Footer, About, Experience, Education, Skills } from "./components";
import Projects from "./components/homepage/projects";

export const metadata = {
  title: "Portfolio of Jahid Ansari - Software Developer",
  description:
    "This is the portfolio of Jahid Ansari. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

function App() {
  return (
    <>
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Nav />
        <hr />
        <Outlet />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}

export default App;

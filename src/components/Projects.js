import React from 'react'
import {
    AiOutlineGithub,
  } from "react-icons/ai";

const Projects = () => {
    return (
    <section className="bg-primary py-32" id="projects">
        <div className="text-center md:w-[60%] mx-auto text-white">
            <div className="about-info mb-5">
                <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
                    Projects
                </h2>

                <p className="pb-5">
                    If you would like to see some of the projects I have worked on, whether personal or for academic purposes, please click the button below
                    to be redirected to my GitHub. I am constantly adding to this, so please feel free to check it out and see what I have been working on recently!
                </p>
                <a
                    href="https://github.com/daviddevore"
                    className="pr-4 inline-block text-accent hover:text-white"
                >
                    {" "}
                    <AiOutlineGithub size={40} />{" "}
                </a>
            </div>

            <div className="hero-img"></div>
        </div>

        {/* <div className="projects container mx-auto grid md:grid-cols-3">
            Add personal project images here!
        </div> */}
    </section>
    );
}

export default Projects
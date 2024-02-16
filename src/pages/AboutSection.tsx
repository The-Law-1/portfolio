import CsharpSVG from "@/assets/tech-svg/Csharp.tsx";
import TypescriptSVG from "@/assets/tech-svg/Typescript.tsx";
import DockerSVG from "@/assets/tech-svg/Docker";
import TailwindSVG from "@/assets/tech-svg/Tailwind";
import GitSVG from "@/assets/tech-svg/Git";
import PythonSVG from "@/assets/tech-svg/Python";
import ReactSVG from "@/assets/tech-svg/React";
import NodeSVG from "@/assets/tech-svg/Node";
import NestSVG from "@/assets/tech-svg/Nest";
import VueSVG from "@/assets/tech-svg/Vue";
import LinuxSVG from "@/assets/tech-svg/Linux";
import getGithubStats from "@/scripts/github";
import { useEffect, useState } from "react";

export default function AboutSection() {

  const [githubStats, setGithubStats] = useState({ totalRepos: "", codeSize: "" });

  useEffect(() => {
    getGithubStats().then(stats => {
      setGithubStats(stats);
    });
  }, []);

  return (
    <div className=" text-white h-screen py-5">
      <div className=" text-3xl sm:text-4xl md:text-5xl text-center py-5">
        About me
      </div>

      <div className="h-full flex-none md:flex md:flex-col md:justify-evenly ">
        <div className="
            md:flex md:justify-center md:divide-x md:divide-gray-600 md:space-x-4">
          <div className="text-center sm:text-2xl md:text-left md:text-4xl">
            {githubStats.totalRepos} <span className="text-gray-500">Github repositories</span>
            <br/>
            {githubStats.codeSize} <span className="text-gray-500">of code commited</span>
          </div>

          <div className="text-center md:text-justify  md:w-1/3 text-sm md:text-lg  mb-5 pl-5">
            Hello! I'm Gabriel Griffin. I'm a developer from Ireland.<br/>
            I love playing around with satisfying web interfaces, and I'm always looking for new technologies to learn and use.<br/>
            Sometimes, projects choose the stack for me and I roll with it.
            Most of the time I'm writing code, or playing sports!
          </div>
        </div>

        {/* Languages  */}
        <div>
          <div className=" text-3xl text-center my-4">
            I often use
          </div>
          <div className=" flex justify-center space-x-2">
            <div className=" w-14 hover:scale-[102%]">
              <VueSVG  />
            </div>
            <div className=" w-14 hover:scale-[102%]">
              <TypescriptSVG  />
            </div>
            <div className=" w-14 hover:scale-[102%]">
              <ReactSVG  />
            </div>
            <div className=" w-14 hover:scale-[102%]">
              <TailwindSVG  />
            </div>
            <div className=" w-14 hover:scale-[102%]">
              <CsharpSVG  />
            </div>
            <div className=" w-14 hover:scale-[102%]">
              <DockerSVG  />
            </div>
            <div className=" w-14 hover:scale-[102%]">
              <GitSVG  />
            </div>
            <div className=" w-14 hover:scale-[102%]">
              <LinuxSVG  />
            </div>
            <div className=" w-14 hover:scale-[102%]">
              <NestSVG  />
            </div>
            <div className=" w-14 hover:scale-[102%]">
              <NodeSVG  />
            </div>
            <div className=" w-14 hover:scale-[102%]">
              <PythonSVG  />
            </div>


            <div className=" w-14 hover:scale-[102%]">
              <GitSVG  />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ReactTyped } from "react-typed";

import { EarthCanvas } from "./canvas";
import {  github1, linkedin, medium, twitter } from "../assets";


const Hero = () => {
  return (
  <section className="flex flex-col-reverse lg:flex-row xl:flex-row gap-0  w-full h-screen mx-auto">
  <div className="flex-[1.5] flex flex-col items-start gap-5 p-6 sm:p-10 lg:pl-10 lg:pr-1 lg:pt-40 xl:pl-15 xl:pr-5 xl:pt-40"> 
    <div className="max-w-7xl mx-auto">
      <h1 className={`${styles.sectionHeadText} bg-gradient-to-b from-white to-slate-900/10 bg-clip-text text-transparent`}>
        Hello, I'm <br />
        <span className={`${styles.heroHeadText} bg-gradient-to-r from-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent`}><ReactTyped strings={["Saurav Kumar"]} typeSpeed={100} /></span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-zinc-400`}>
        I build WebApps. <br/>
        From Designing to Deployment, <br className="sm:block hidden" />
        I got you covered!🚀
      </p>
      <div className="mt-8">
        <a href="https://drive.google.com/file/d/1sK_w8H4QNnyGGJxLuyelJo0VaVFMt7fu/view?usp=sharing" target="_blank"><button className="ring-4 ring-purple-700/50 text-lg bg-zinc-900 py-2 px-4 rounded-xl outline-none font-bold hover:shadow-xl hover:shadow-slate-800 hover:bg-slate-900">
          📄<span className="bg-gradient-to-r from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8] bg-clip-text text-transparent">Resume</span>
        </button></a>
      </div>
      <div className="mt-7 flex flex-row space-x-5">
        <a href="https://github.com/sauraverse" target="_blank"><img className="w-14 shadow-lg shadow-gray-300/40" src={github1} alt="github-link" /></a>
        <a href="https://www.linkedin.com/in/sauraverse" target="_blank"><img className="w-14 shadow-lg shadow-gray-300/40" src={linkedin} alt="linkedin-link" /></a>
        <a href="https://x.com/sauraversee" target="_blank"><img className="w-14 shadow-lg shadow-gray-300/40" src={twitter} alt="twitter-link" /></a>
        <a href="https://sauraverse.medium.com/" target="_blank"><img className="w-14 shadow-lg shadow-gray-300/40" src={medium} alt="medium-link" /></a>
      </div>
    </div>
  </div>

  <div className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-24 2xl:p-4"> 
    <motion.div className="w-full h-full flex justify-end items-center">
      <div className="w-full h-full max-w-3xl">
        <EarthCanvas />
      </div>
    </motion.div>
  </div>
</section>
  );
};

export default Hero;

import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-zinc-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        Hello! I'm a <span className="pink-text-gradient">Full Stack Web Developer</span> with expertise in building full-fledged WebApps using trending tech stacks. I specialize in <span className="font-bold">TypeScript</span> and <span className="font-bold">JavaScript</span>, and I'm proficient in frameworks like <span className="font-bold">Next.js</span>, <span className="font-bold">Node.js</span>, and <span className="font-bold">Express.js</span>. I develop robust web apps, creating seamless experiences from dynamic front-end interfaces to efficient back-end logic. I use <span className="green-text-gradient">Production grade techniques</span> to ensure top-notch quality with scalable database schemas and thorough form validation using tools like Zod are just a few examples of my attention to detail.
        <br />
        I’m eager to bring my skills and fresh ideas to your team. <span className="blue-text-gradient"><a href="#contact">Let’s connect</a></span> and see how we can achieve great things together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import sri from "../assets/sri.png";

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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-24 h-24 object-contain'
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
      <div className="flex flex-col-reverse sm:flex-row sm:items-start items-center justify-between gap-8">
        <motion.div variants={textVariant()} className="flex-1">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a skilled software developer with experience in building 
            scalable applications using Java, Python, Spring Boot, and React, 
            I focus on optimizing performance and ensuring reliability. 
            Certified in AWS and Azure, I've delivered projects in safety monitoring, healthcare,
            and product development, project management.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="sm:w-48 w-36 sm:ml-8 mb-8 sm:mb-0 flex-shrink-0"
        >
          <div className="relative p-[1px] rounded-full bg-gradient-to-r from-teal-700 via-purple-700 to-teal-700 shadow-lg">
            <img 
              src={sri}
              alt="Profile"
              className="rounded-full border-4 border-transparent w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

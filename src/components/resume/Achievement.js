import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Course by Meta"
            subTitle="Coursera"
           // result="Success"
            des="This React certification course provided me with a solid foundation in React, including JSX, components, state, and props management and much more. Through the course, I learned how to build interactive and dynamic user interfaces for web applications."
          />
          <ResumeCard
            title="Fundamentals of Agile Project Management"
            subTitle="PMI"
           // result="Success"
            des="This course honed my skills in adaptive project management strategies, enhancing my ability to deliver projects swiftly and efficiently. It emphasized collaborative approaches and iterative progress that ensure my clients receive high-quality, tailored outcomes to meet dynamic market demands."
          />
          <ResumeCard
            title="Fundamentals of Predictive Project Management"
            subTitle="PMI"
            //result="Success"
            des="This course equipped me with the skills to meticulously plan and execute projects with a high degree of foresight. This training has enabled me to better anticipate project challenges and deliver solutions that align precisely with client objectives, ensuring successful outcomes even for complex initiatives."
          />
        </div>
      </div>

      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;

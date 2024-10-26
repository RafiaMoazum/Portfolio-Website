import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Kinnaird College"
            //result="3.90/4"
            //des="Earned a Bachelor of Science in Computer Science, focusing on developing solid programming, software development, and analytical skills to solve real-world problems."
            des="Earned a Bachelor of Science in Computer Science, focusing on developing programming, software development, and analytical skills to solve real-world problems. This program emphasized modern computing technologies, systems architecture, and data structures, equipping me to create innovative software solutions across various industries."
          />
          <ResumeCard
            title="Intermediate in Computer Science"
            subTitle="Kinnaird College"
            //result="4.75/5"
            des="Completed an Intermediate degree in Computer Science, gaining foundational knowledge on core IT principles, programming, and networking for advanced studies in technology"
          />
          <ResumeCard
            title="Matriculation"
            subTitle="Iqra Huffaz Secondary School"
            //result="5.00/5"
            des="Completed my Matriculation focusing on Computer Science and Mathematics, building a solid foundation in analytical thinking and problem-solving essential for technological fields."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          {/* <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* <ResumeCard
            title="Full Stack Developer"
            subTitle="Streams Consultants (current)"
            //result="USA"
            des="As a Full Stack Developer, I handle both front-end and back-end development, creating responsive designs and robust server-side logic to deliver seamless, full-featured web applications."
          /> */}
          {/* <ResumeCard
            title="Frontend & WordPress Developer"
            subTitle="Software Pro"
            //result="MALAYSIA"
            des="As a Frontend and WordPress Developer, I crafted responsive websites, enhancing user engagement through intuitive design and efficient content management systems."
          /> */}
          {/* <ResumeCard
            title="SQA Engineer"
            subTitle="CureMd"
           // result="Oman"
            des="As an SQA Engineer, I maintained software quality through detailed test plans, bug identification, and advocating for optimal user experiences to meet client specifications."
          /> */}
        </div>
      </div>
    </motion.div>
    </>
  );
}

export default Education
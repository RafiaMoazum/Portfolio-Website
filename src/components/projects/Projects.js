import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          //title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Trading Simulation Game"
          des="Trade Arena, developed using the MERN Stack, is an engaging two-player trading simulation
           game spanning three rounds. In this interactive game, players do trading to generate the highest 
           profits, with the top earner declared the winner."
          src="./tradeArena.jpg"
          link="https://www.tradearena.co/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Comprehensive e-commerce platform, this project showcases a wide range of beauty products 
          from skincare to makeup. The store features an intuitive user interface designed for seamless 
          navigation and an enhanced shopping experience"
          src="./ecommerce.png"
          link="https://www.beautybakerie.com/"
        />
        <ProjectsCard
          title="Therapist Booking Site"
          des="This therapy booking website simplifies finding and scheduling sessions with professional therapists.  It includes a user-friendly interface, personalized recommendations,
           and an integrated blog offering mental health insights and tips. "
          src="./therapist.jpg"
          link="https://zencare.co/"

        />

        <ProjectsCard
          title="Charity Funding Platform"
          des="A dynamic full-stack web application enabling users to register causes requiring support and
           facilitating donations from those with resources, fostering a community-driven platform for 
           impactful assistance."
          src="./Community.png"
          link="https://github.com/RafiaMoazum/Community-Aid-Network"

        />
        <ProjectsCard
          title="Hostel Explorer"
          des="A full-stack hostel listing platform, empowering hostel managers to effectively showcase their properties. Customers can seamlessly explore and book rooms, access detailed property features, and manage reservations."
          src="./Hostel.png"
          link="https://github.com/RafiaMoazum/Fyp-collaborated"

        />
       
        <ProjectsCard
          title="Recipe Blog"
          des="React-based recipe app enabling users to browse and explore delicious recipes from an
           external API. Users can search for recipes, view detailed instructions, and easily access
            ingredient quantities via a convenient pop-up box."
          src="./recipe.png"
          link="https://magical-kringle-81874b.netlify.app/"

        />
      </div>
    </section>
  );
}

export default Projects
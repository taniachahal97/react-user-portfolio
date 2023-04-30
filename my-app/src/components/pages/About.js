import React from 'react';
import portfolioImage from '../images/picture.jpeg';
export default function About() {
  return (
    <div>
      <h1 className="portfolio-heading">About Me</h1>
      <img className="my-pic" src={portfolioImage} alt="Tania Chahal"/>
      <p className="portfolio-content">
      I am currently in my final semester of Master’s in Information Technology at Monash University. 
      I completed my bachelor’s in IT in 2019 from India and then started my master’s degree at Monash in 2020. 
      I have a keen interest in design thinking, Human-centred design, UX, and coding and aim at applying my skills that I have developed during my study to projects that have a powerful impact on communities across the world.
      I have also worked as a student intern at Project Everest Ventures in the summer of 2021 wherein I had the opportunity of studying some real-world problems impacting communities across the globe and how technology can be used to innovate solutions that have a meaningful impact on the lives of people across the globe. 
      Through participating in this program, I developed various skills such as problem solving, collaborative skills, leadership, and time management. 
      </p>
    </div>
  );
}

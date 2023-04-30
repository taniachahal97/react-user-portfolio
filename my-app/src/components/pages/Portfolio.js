import React from 'react';
import portfolioImage1 from '../images/portfolio-image-1.png';

//Reference the Project.js to pull each JS file.

import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Weather Dashboard",
    languages: "JS, HTML, CSS",
    image: "image-1.jpg",
    description: "The project generates the current and future weather conditions of a city searched by user",
    repo: "https://github.com/taniachahal97/Weather-Dashboard",
    live: "https://taniachahal97.github.io/Weather-Dashboard/",
  },
  {
    id: 1,
    title: "Team Profile Generator",
    languages: "JavaScript, Node",
    image: "image-2.jpg",
    description: "The project builds a Node.js command-line application that takes in information about employees on a software engineering team and then generates a HTML webpage that displays summaries for each person",
    repo: "https://github.com/taniachahal97/Team-Profile-Generator",
    live: "https://floating-thicket-72381.herokuapp.com/",
  },
  {
    id: 2,
    title: "Work Day Scheduler",
    languages: "JavaScript, HTML, CSS",
    image: "image-3.jpg",
    description: "The following project generates a color coded time scheduler which allows user to create and save events for working hours during a day.",
    live: "https://taniachahal97.github.io/Work-Day-Scheduler/",
    repo: "https://github.com/taniachahal97/Work-Day-Scheduler",
  },
  {
    id: 3,
    title: "Employee Tracker",
    languages: "JavaScript",
    image: "image-4.jpg",
    description: "This project creates an application called Employee Trcaker that enables employers to to view and manage the departments, roles, and employees in the company.",
    repo: "https://github.com/taniachahal97/employee-tracker",
    live: "https://drive.google.com/file/d/1NnkMCXKiAlqGr6TRb78Ij3_9iZkjPHKo/view",
  },
  {
    id: 4,
    title: "Note Taker",
    languages: "JavaScript, HTML, CSS",
    image: "image-5.jpg",
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "https://github.com/taniachahal97/Note-Taker",
    live: "https://pure-savannah-11011.herokuapp.com/",
  },
  {
    id: 5,
    title: "Walk With Me",
    languages: "HTML, JavaScript, CSS",
    image: "image-6.jpg",
    description: "A web-app that provides the local parks in a area based on your searched location.",
    repo: "https://github.com/taniachahal97/Walk-with-me",
    live: "https://lferg98.github.io/Walk-with-me/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;

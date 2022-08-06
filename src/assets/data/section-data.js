import about from '../images/about.jpg'
import mnemosyne from '../images/mnemosyne.png'

const aboutSection = {
  id: "about",
  title: "About",
  text: [
    "I am a frontend developer based in Vancouver, BC. I have various experiences designing and implementing interactive frontend UI elements and creating responsive websites.",
    "My interests lie in the entire frontend spectrum, creating an intuitive and dynamic user experience. I enjoy watching the work I do come to life.",
    "Each project is an opportunity for me to learn new concepts and grow to become a better developer."
  ],
  image: about
}

const skillsSection = {
  id: "skills",
  title: "Skills",
  text: [
    "I began my journey in web development two years ago. I’ve implmented the designs created by numerous people and created designs for my own websites.",
    "I create websites that are fast, responsive, and intuitive to use. My main area of expertise are HTML, CSS, and React JS.",
    "I’ve also had experience working server-side using Node JS, MongoDB, and testing using tools such as Jest, Github Actions for continous integration, and JMeter for performance testing."
  ]
}

const projectsSection = {
  id: "projects",
  title: "Projects",
  projects: [
    {
      id: "mnemosyne",
      title: "Project Mnemosyne",
      text: [
        "Project Mnemosyne is a 2D adventure platforming game created in UBC Game Dev 2021. You play as a crew member in a deserted spaceship.",
        "As an astronaut, you navigate through the dangerous surroundings with the use of grappling hooks, and travel through an unfamiliar planet, attempting to rebuild your spaceship and piece together your missing memories."
      ],
      image: mnemosyne
    }
  ]
}

export {aboutSection,skillsSection,projectsSection}
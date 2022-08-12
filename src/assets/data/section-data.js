import about from '../images/about.jpg'
import mnemosyne from '../images/mnemosyne.png'
import markdown from '../images/markdown.png'

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
      date: 'May 2022',
      text: [
        "Project Mnemosyne is a 2D adventure platforming game created in UBC Game Dev 2021/2022. You play as a crew member in an abandonned spaceship.",
        "As an astronaut, you navigate through the dangerous surroundings with the use of grappling hooks and travel through an unfamiliar planet. You must rebuild your spaceship and piece together your missing memories to uncover the mysteries behind your missing crewmates."
      ],
      image: mnemosyne,
      link: null
    },
    {
      id: "markdown",
      title: "Markdown Editor",
      date: 'Jun 2022',
      text: [
        "This is an in-browser markdown editor created with ReactMarkdown. It was done as a personal project using the design from Frontend Mentor to improve my control over JS."
      ],
      image: markdown,
      link: "https://nekopudding.github.io/in-browser-markdown-editor/"
    }
  ]
}

export {aboutSection,skillsSection,projectsSection}
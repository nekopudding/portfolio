import about from '../images/about.jpg'
import mnemosyne from '../images/mnemosyne.png'
import markdown from '../images/markdown.png'
import photosnap from '../images/photosnap.png'
import commentsSection from '../images/comments-section.png'
import accountability from '../images/accountability.png'
import lounge from '../images/nekos-lounge.png'
import twadder from '../images/twadder.png'
import headsUp from '../images/heads-up.gif'

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
    "I create websites that are fast, responsive, and intuitive to use. My main area of expertise are HTML, CSS, and ReactJS.",
    "I’ve also had experience working server-side using Node JS, MongoDB, and testing using tools such as Jest, Github Actions for continous integration, and JMeter for performance testing."
  ]
}

const projectsSection = {
  id: "projects",
  title: "Projects",
  projects: [
    {
      id: 'twadder',
      title: 'Twadder (Twitter Clone)',
      date: 'Aug 2022 - Jan 2023',
      tags: ['HTML/CSS','React','SASS','Redux','React Router', 'MongoDB','NodeJS', 'Firebase', 'Postman'],
      text: [
        "Twadder is a functional Twitter clone with simple features built as a personal project for exploring styling of large websites.",
        "It currently supports persistent storage of posts, images, and account registration. Real time messaging is currently being worked on.",
        "Similar styling to Twitter is achieved through analysing Twitter's CSS and establishing reusable themes using SASS.",
      ],
      image: twadder,
      demolink: 'https://twadder-b2796.firebaseapp.com/',
      codelink: 'https://github.com/nekopudding/twadder'
    },
    {
      id: 'heads-up',
      title: 'Heads Up!',
      date: 'Sept 2022 - Dec 2022',
      tags: ['Figma', 'UX Design', 'React Native'],
      text: [
        `"Heads Up!" was originally an app prototype developed as part of CPEN 441 which is an HCI design course.`,
        `It is a reminders app that hopes to eliminate the problem of cramming by providing students with automatic reminders of upcoming tasks
        at appropriate times before the deadline.`,
        `While the practical application of this concept was not proven, I implemented the app in React Native as part of my exploration in mobile development.`
      ],
      image: headsUp,
      codelink: 'https://github.com/nekopudding/heads-up'
    },
    {
      id: "photosnap",
      title: "Photosnap Multi-page Website",
      date: 'Jun 2022',
      tags: ['HTML/CSS','React','React Router', 'MUI'],
      text: [
        "Photosnap is a multi-page website created using the design from Frontend-Mentor's \"Photosnap Multi-Page Website\" Challenge.",
        "This website is fully responsive from mobile to desktop screen sizes. I chose to complete this challenge because it does not use material design (rounded borders, icons, \"mobile app\" look) which I was used to implementing. It uses simple yet elegant animations and helped me expand my knowledge of different modern website styles."
      ],
      image: photosnap,
      demolink: "https://nekopudding.github.io/photosnap-multi-page-website/",
    },
    {
      id: "accountability",
      title: "Accountability",
      date: 'May-Aug 2022',
      tags: ['MongoDB', 'NodeJS', 'SocketIO', 'Jest', 'Postman', 'Azure'],
      text: [
        "Accountability is a personal financing app created in the CPEN 321 project course. The app was created with a NodeJS backend and an Android Java frontend.",
        "The app supports real-time messaging using SocketIO, setting financial goals, transactions, and creating monthly reports based on the month's income/spendings. I was in charge of coding and testing the backend server. I used testing tools like Jest, Supertest, Codacy and implemented the CI/CD pipeline using Github Actions."
      ],
      image: accountability,
      codelink: "https://github.com/CPEN321-Group/accountability-core"
    },
    {
      id: "markdown",
      title: "Markdown Editor",
      date: 'Jun 2022',
      tags: ['HTML/CSS','React','MUI'],
      text: [
        "This is an in-browser markdown editor created as a personal project using the design from Frontend Mentor to practice JS and CSS. It uses ReactMarkdown to parse markdown into html.",
        "This markdown editor supports live preview of edits and uses localStorage to save documents locally in the browser. There is also an option to switch between light and dark theme."
      ],
      image: markdown,
      demolink: "https://nekopudding.github.io/in-browser-markdown-editor/"
    },
    {
      id: "comments-section",
      title: "Interactive Comments Section",
      date: 'Jun 2022',
      tags: ['HTML/CSS','React','MUI'],
      text: [
        "This is a component created as one of the Frontend Mentor Challenges.",
        "There are 4 preset users you can use (chosen in the appbar), each with their own upvotes/downvotes. Each user can reply to comments by other people and can only edit/delete their own comment."
      ],
      image: commentsSection,
      demolink: "https://nekopudding.github.io/interactive-comments-section/"
    },
    {
      id: "mnemosyne",
      title: "Project Mnemosyne",
      date: 'May 2022',
      tags: ['Unity','Game Dev','Aseprite'],
      text: [
        "Project Mnemosyne is a 2D adventure platforming game created in UBC Game Dev 2021/2022. My role in this project was a lead developer and artist. You play as a crew member in an abandonned spaceship.",
        "As an astronaut, you navigate through the dangerous surroundings with the use of grappling hooks and travel through an unfamiliar planet. You must rebuild your spaceship and piece together your missing memories to uncover the mysteries behind your missing crewmates."
      ],
      image: mnemosyne,
      codelink: "https://github.com/avalon-games/spacegame"
    },
    {
      id: "lounge",
      title: "Neko's Lounge",
      date: 'Apr 2022 - Jul 2022',
      tags: ['React','MUI','React Router','NodeJS'],
      text: [
        "Neko's Lounge is a personal project I started with the goal of creating a focused study space between friends.",
        "It has a built-in music player, a study timer, and a blog section. Some features are not implemented yet and music player isn't functional as I shut down the backend server to prevent further charges.",
        "In the future I plan to implement a log-in system, notifications, live chat, and a video calling service. I will also revise my design as I continue to improve my skills.",
      ],
      image: lounge,
      demolink: "https://nekopudding.github.io/nekos-lounge/",
      codelink: "https://github.com/nekopudding/nekos-lounge"
    }
  ]
}

const contactSection = {
  id: "contact"
}

export {aboutSection,skillsSection,projectsSection,contactSection}
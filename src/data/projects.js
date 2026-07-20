import portaLocatorImg from '../assets/projects/portaLocator.png';
import racePace3DImg from '../assets/projects/racePace3D.png';
import jayBotImg from '../assets/projects/jayBot.png';

import file from '../assets/icons/file.svg';

import javascript from '../assets/tech-icons/javascript.svg';
import react from '../assets/tech-icons/react.svg';
import php from '../assets/tech-icons/php.svg';
import nodejs from '../assets/tech-icons/nodejs.svg';
import express from '../assets/tech-icons/express.png';
import expogo from '../assets/tech-icons/expogo.svg';
import openai from '../assets/tech-icons/openai.svg';
import googleCloud from '../assets/tech-icons/google-cloud.svg';
import firebase from '../assets/tech-icons/firebase.svg';
import workos from '../assets/tech-icons/workos.svg';
import bootstrap from '../assets/tech-icons/bootstrap.svg';
import tailwind from '../assets/tech-icons/tailwind.svg';
import photoshop from '../assets/tech-icons/photoshop.svg';
import testflight from '../assets/tech-icons/testflight.webp';

export const PROJECTS = [
  {
    title: "PortaLocator",
    subtitle: "Spring 2026 Coding Challenge",
    description: "PortaLocator is a crowdsourced, community-verified map of porta potty locations built on the Google Maps JavaScript API.",
    url: "127.0.0.1:3000/",
    image: portaLocatorImg,
    techIcons: [
        {name: "JavaScript", src: javascript},
        {name: "Node.js", src: nodejs},
        {name: "Express", src: express},
        {name: "WorkOS", src: workos},
        {name: "Bootstrap", src: bootstrap}
    ],
    githubLink: "https://github.com/kaidenmiller06/portalocator",
    otherLink: "https://news.etown.edu/index.php/2026/04/30/elizabethtown-college-computer-science-club-hosts-spring-coding-challenge/",
    otherIcon: file,
    otherTitle: "Article",
  },
  {
    title: "RacePace3D",
    subtitle: "Application Development Project",
    description: "RacePace3D is a fast-paced endless runner built with React Native, where players dodge obstacles and time their jumps to survive.",
    image: racePace3DImg,
    techIcons: [
        {name: "React Native", src: react},
        {name: "JavaScript", src: javascript},
        {name: "Expo Go", src: expogo},
        {name: "Firebase", src: firebase},
        {name: "Photoshop", src: photoshop},
    ],
    githubLink: "https://github.com/Etown-CS310/racepace3D",
    otherLink: "https://testflight.apple.com/join/XrGEyqRJ",
    otherIcon: testflight,
    otherTitle: "TestFlight",
  },
  {
    title: "JayBot",
    subtitle: "SCARP 2025",
    description: "JayBot is a college-level AI Tutor that employs RAG to provide responses grounded in instructor-uploaded course materials.",
    url: "localhost/jaywingaitutor/frontend/",
    image: jayBotImg,
    techIcons: [
        {name: "JavaScript", src: javascript},
        {name: "PHP", src: php},
        {name: "OpenAI", src: openai},
        {name: "Google Cloud", src: googleCloud},
        {name: "Tailwind CSS", src: tailwind},
    ],
    githubLink: "https://github.com/Etown-CS/25_SCARP_JayWingAITutor",
    otherLink: "https://news.etown.edu/index.php/2025/06/03/elizabethtown-college-scarp-series-jaywing-academy-an-ai-powered-student-learning-system-leveraging-gpt-in-cloud-infrastructure/?doing_wp_cron=1784339354.2893540859222412109375",
    otherIcon: file,
    otherTitle: "Article",
  },
];
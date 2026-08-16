// PortaLocator Assets
import portaLocatorImg from '../assets/projects/portaLocator/portaLocator.png';
import portaLocatorLogo from '../assets/projects/portaLocator/portaLocator-logo.svg';
import portaLocatorImg2 from '../assets/projects/portaLocator/portaLocator2.png';
import portaLocatorImg3 from '../assets/projects/portaLocator/portaLocator3.png';
import portaLocatorImg4 from '../assets/projects/portaLocator/portaLocator4.png';
import portaLocatorImg5 from '../assets/projects/portaLocator/portaLocator5.png';
import portaLocatorERD from '../assets/projects/portaLocator/erd.png';
import workosImg from '../assets/projects/portaLocator/workos.png';
import codingChallengeImg from '../assets/images/codingChallenge.jpg';
import codingChallengeImg2 from '../assets/images/codingChallenge2.jpg';

// RacePace3D Assets
import racePace3DImg from '../assets/projects/racePace3D/racePace3D.png';
import racePace3DLogo from '../assets/projects/racePace3D/racePace3D-logo.png';
import backButton from '../assets/projects/racePace3D/LeftArrow.png';
import nextButton from '../assets/projects/racePace3D/RightArrow.png';
import forwardButton from '../assets/projects/racePace3D/NextArrow.png';
import newButton from '../assets/projects/racePace3D/New.png';
import editButton from '../assets/projects/racePace3D/Edit.png';
import refreshButton from '../assets/projects/racePace3D/Refresh.png';
import charactersButton from '../assets/projects/racePace3D/Characters.png';
import highscoresButton from '../assets/projects/racePace3D/Highscores.png';
import friendsButton from '../assets/projects/racePace3D/Friends.png';
import teamsButton from '../assets/projects/racePace3D/Teams.png';
import logoutButton from '../assets/projects/racePace3D/Logout.png';
import deleteButton from '../assets/projects/racePace3D/Delete.png';
import cole from '../assets/projects/racePace3D/Cole3D.gif';
import eliud from '../assets/projects/racePace3D/Eliud3D.gif';
import grant from '../assets/projects/racePace3D/Grant3D.gif';
import jakob from '../assets/projects/racePace3D/Jakob3D.gif';
import mo from '../assets/projects/racePace3D/Mo3D.gif';
import falk from '../assets/projects/racePace3D/Falk3D.gif';

// JayBot Assets
import jayBotImg from '../assets/projects/jayBot/jayBot.png';
import scarpLogo from '../assets/projects/jayBot/scarp-logo.png';
import jayBotImg2 from '../assets/projects/jayBot/jayBot2.png';
import jayBotImg3 from '../assets/projects/jayBot/jayBot3.png';
import jayBotERD from '../assets/projects/jayBot/erd.png';
import fewShotImg from '../assets/projects/jayBot/few-shot.png';
import pipelineImg from '../assets/projects/jayBot/pipeline.png';
import wordcloudImg from '../assets/projects/jayBot/wordcloud.png';
import scarpGroupImg from '../assets/images/scarpGroup.png';
import ncurImg from '../assets/images/ncur.jpg';
import ncurGroupImg from '../assets/images/ncurGroup.jpg';

import file from '../assets/icons/file.svg';

// Tech Icons
import javascript from '../assets/tech-icons/javascript.svg';
import react from '../assets/tech-icons/react.svg';
import php from '../assets/tech-icons/php.svg';
import html from '../assets/tech-icons/html.svg';
import css from '../assets/tech-icons/css.svg';
import python from '../assets/tech-icons/python.svg';
import nodejs from '../assets/tech-icons/nodejs.svg';
import express from '../assets/tech-icons/express.png';
import expogo from '../assets/tech-icons/expogo.svg';
import androidStudio from '../assets/tech-icons/android-studio.svg';
import openai from '../assets/tech-icons/openai.svg';
import langchain from '../assets/tech-icons/langchain.svg';
import googleMaps from '../assets/tech-icons/google-maps.svg';
import googleCloud from '../assets/tech-icons/google-cloud.svg';
import firebase from '../assets/tech-icons/firebase.svg';
import mysql from '../assets/tech-icons/mysql.png';
import xampp from '../assets/tech-icons/xampp.svg';
import workos from '../assets/tech-icons/workos.svg';
import bootstrap from '../assets/tech-icons/bootstrap.svg';
import tailwind from '../assets/tech-icons/tailwind.svg';
import photoshop from '../assets/tech-icons/photoshop.svg';
import illustrator from '../assets/tech-icons/illustrator.svg';
import testflight from '../assets/tech-icons/testflight.webp';

export const PROJECTS = [
  {
    title: "PortaLocator",
    subtitle: "Spring 2026 Coding Challenge",
    description: "PortaLocator is a crowdsourced, community-verified map of porta potty locations built on the Google Maps JavaScript API.",
    bullets: [
      "Integrated the Google Maps JavaScript API to create an interactive, global map for locating and submitting porta potty locations",
      "Implemented user-submitted map markers with community upvoting and flagging to verify location accuracy",
      "Built real-time map updates to display verified and pending locations as users interact with the application",
      "Designed a crowdsourced system allowing users to contribute and validate restroom locations worldwide",
    ],
    url: "127.0.0.1:3000/",
    image: portaLocatorImg,
    logo: portaLocatorLogo,
    columns: 2,
    images: [
      { src: portaLocatorImg, alt: "PortaLocator" },
      { src: codingChallengeImg, alt: "Coding Challenge" },
      { src: portaLocatorImg2, alt: "Create Porta Potty" },
      { src: workosImg, alt: "WorkOS" },
      { src: portaLocatorImg4, alt: "PortaLocator GitHub" },
      { src: portaLocatorERD, alt: "ERD" },
      { src: codingChallengeImg2, alt: "Coding Challenge 2" },
      { src: portaLocatorImg3, alt: "View Porta Potty" },
      { src: portaLocatorImg5, alt: "PortaLocator Dark Mode" },
    ],
    techIcons: [
      { name: "JavaScript", src: javascript },
      { name: "Node.js", src: nodejs },
      { name: "Express", src: express },
      { name: "WorkOS", src: workos },
      { name: "Bootstrap", src: bootstrap },
      { name: "MySQL", src: mysql },
      { name: "Photoshop", src: photoshop },
      { name: "Illustrator", src: illustrator },
      { name: "HTML", src: html },
      { name: "Google Maps API", src: googleMaps },
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
    bullets: [
      "Developed a multi-level endless runner with obstacle avoidance, timed jumping, level progression, and unlockable content",
      "Implemented character selection and customization using custom-designed sprites and animations",
      "Built team and friend systems with competitive leaderboards to support social gameplay",
      "Designed interactive UI components and custom pressable animations to create a responsive mobile gaming experience",
    ],
    image: racePace3DImg,
    logo: racePace3DLogo,
    columns: 6,
    images: [
      { src: backButton, alt: "Back Button" },
      { src: nextButton, alt: "Next Button" },
      { src: forwardButton, alt: "Forward Button" },
      { src: newButton, alt: "New Button" },
      { src: editButton, alt: "Edit Button" },
      { src: refreshButton, alt: "Refresh Button" },
      { src: charactersButton, alt: "Characters Button" },
      { src: highscoresButton, alt: "Highscores Button" },
      { src: friendsButton, alt: "Friends Button" },
      { src: teamsButton, alt: "Teams Button" },
      { src: logoutButton, alt: "Logout Button" },
      { src: deleteButton, alt: "Delete Button" },
      { src: cole, alt: "Cole" },
      { src: eliud, alt: "Eliud" },
      { src: grant, alt: "Grant" },
      { src: jakob, alt: "Jakob" },
      { src: mo, alt: "Mo" },
      { src: falk, alt: "Falk" },
    ],
    techIcons: [
      { name: "React Native", src: react },
      { name: "JavaScript", src: javascript },
      { name: "Expo Go", src: expogo },
      { name: "Firebase", src: firebase },
      { name: "Photoshop", src: photoshop },
      { name: "Node.js", src: nodejs },
      { name: "Android Studio", src: androidStudio },
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
    bullets: [
      "Developed an AI tutoring platform using Retrieval-Augmented Generation (RAG) to generate responses grounded in professor-uploaded course materials",
      "Designed and implemented a full-stack architecture with PHP, JavaScript, Python, MySQL, Pinecone, Google Cloud Storage, and the OpenAI API",
      "Built separate student and instructor interfaces featuring an LLM-inspired messaging system, course/material management, and cloud-based document processing",
      "Presented the project at the National Conference on Undergraduate Research (NCUR) 2026 after completing a 10-week undergraduate research program",
    ],
    url: "localhost/jaywingaitutor/frontend/",
    image: jayBotImg,
    logo: scarpLogo,
    columns: 2,
    images: [
      { src: jayBotImg, alt: "JayBot Student" },
      { src: ncurImg, alt: "NCUR Poster" },
      { src: pipelineImg, alt: "Pipeline" },
      { src: jayBotImg2, alt: "JayBot Proctor" },
      { src: scarpGroupImg, alt: "SCARP Group" },
      { src: wordcloudImg, alt: "Word Cloud" },
      { src: jayBotERD, alt: "ERD" },
      { src: fewShotImg, alt: "Few Shot Prompting" },      
      { src: ncurGroupImg, alt: "NCUR Group" },
      { src: jayBotImg3, alt: "JayBot Proctor 2" },
    ],
    techIcons: [
      { name: "JavaScript", src: javascript },
      { name: "PHP", src: php },
      { name: "OpenAI", src: openai },
      { name: "Google Cloud", src: googleCloud },
      { name: "Tailwind CSS", src: tailwind },
      { name: "MySQL", src: mysql },
      { name: "XAMPP", src: xampp },
      { name: "Python", src: python },
      { name: "HTML", src: html },
      { name: "CSS", src: css },
      { name: "Langchain", src: langchain },
    ],
    githubLink: "https://github.com/Etown-CS/25_SCARP_JayWingAITutor",
    otherLink: "https://news.etown.edu/index.php/2025/06/03/elizabethtown-college-scarp-series-jaywing-academy-an-ai-powered-student-learning-system-leveraging-gpt-in-cloud-infrastructure/?doing_wp_cron=1784339354.2893540859222412109375",
    otherIcon: file,
    otherTitle: "Article",
  },
];
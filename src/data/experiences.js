import coachImg from '../assets/images/scarpGroup2.jpg';
import taImg from '../assets/images/scarpGroup.png';
import csclubImg from '../assets/images/csclub.jpg';
import mcaImg from '../assets/images/mca.jpg';
import researchImg from '../assets/images/ncur.jpg';
import tutorImg from '../assets/images/tutor.jpg';

import adaptability from '../assets/icons/adaptability.svg';
import communication from '../assets/icons/communication.svg';
import customerService from '../assets/icons/customer-service.svg';
import leadership from '../assets/icons/leadership.svg';
import problemSolving from '../assets/icons/problem-solving.svg';
import publicSpeaking from '../assets/icons/public-speaking.svg';
import teamwork from '../assets/icons/teamwork.svg';

export const EXPERIENCES = [
  {
    title: "Coding Coach",
    subtitle: "Elizabethtown College · Aug 2026 - Present",
    bullets: [
      "Support walk-in students in the Coding Lounge by providing on-demand guidance across programming assignments, projects, and core computer science concepts",
      "Quickly diagnose programming challenges and adapt explanations to students with varying levels of experience, helping them develop independent debugging and problem-solving skills",
    ],
    image: coachImg,
    skills: [
      {skill: "Problem Solving", src: problemSolving},
      {skill: "Adaptability", src: adaptability},
    ],
  },
  {
    title: "Teaching Assistant",
    subtitle: "Elizabethtown College · Aug 2025 - Present",
    bullets: [
      "Assist the Computer Science I professor in mentoring 30+ students learning Python, providing individualized guidance on labs, projects, and core programming concepts",
      "Diagnose and resolve programming errors in student code, strengthening debugging, analytical thinking, and problem-solving while improving student understanding",
    ],
    image: taImg,
    skills: [
      {skill: "Communication", src: communication},
      {skill: "Adaptability", src: adaptability},
    ],
  },
  {
    title: "Social Media Chair",
    subtitle: "Computer Science Club · Aug 2026 - Present",
    bullets: [
      "Manage the Computer Science Club's social media presence by creating and scheduling weekly promotional content for events, workshops, and department activities",
      "Design graphics for social media, LinkedIn, campus digital signage, and print materials",
      "Coordinate event information with club members to ensure accurate and consistent communication across digital and print platforms",
      "Manage promotional content displayed on the CS Lounge TV and campus digital signage to increase visibility of club events",
    ],
    image: csclubImg,
    skills: [
      {skill: "Communication", src: communication},
      {skill: "Teamwork", src: teamwork},
    ],
  },
  {
    title: "Teaching Assistant",
    subtitle: "Momentum Coding Academy · Jun 2026 - Aug 2026",
    bullets: [
      "Mentored 25+ high school students in JavaScript, HTML, CSS, PHP, and SQL, providing hands-on guidance throughout an intensive full-stack web development curriculum",
      "Led workshops on debugging, error diagnosis, and Git/GitHub, teaching systematic troubleshooting and collaborative development practices",
      "Diagnosed and resolved full-stack issues in real time, enabling students to successfully complete final projects",
    ],
    image: mcaImg,
    skills: [
      {skill: "Leadership", src: leadership},
      {skill: "Problem-Solving", src: problemSolving},
    ],
  },
  {
    title: "Peer Tutor",
    subtitle: "Elizabethtown College · Aug 2025 - May 2026",
    bullets: [
      "Provided individualized computer science tutoring, adapting explanations to each student's learning style while strengthening their programming and debugging skills",
      "Guided students through programming assignments and debugging strategies, translating complex concepts into clear, actionable steps that improved coding confidence and academic performance",
    ],
    image: tutorImg,
    skills: [
      {skill: "Communication", src: communication},
      {skill: "Problem-Solving", src: problemSolving},
    ],
  },
  {
    title: "Researcher",
    subtitle: "Elizabethtown College · May 2025 - April 2026",
    bullets: [
      "Developed JayBot, an AI-powered tutor during a 10-week SCARP research program, using RAG to generate responses using professor-uploaded course materials",
      "Built a full-stack web application with PHP, JavaScript, Python, MySQL, Pinecone, Google Cloud Storage, and OpenAI API, implementing student messaging, instructor dashboards, and cloud-based data management",
      "Collaborated with faculty mentor Dr. Jessica Wang and fellow researcher Joey Wagner to design, develop, and present the project at the National Conference on Undergraduate Research 2026",
    ],
    image: researchImg,
    skills: [
      {skill: "Teamwork", src: teamwork},
      {skill: "Public Speaking", src: publicSpeaking},
    ],
  }
];
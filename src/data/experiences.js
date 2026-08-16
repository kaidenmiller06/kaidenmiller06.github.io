import mcaImg from '../assets/images/mca.jpg';
import taImg from '../assets/images/scarpGroup.png';
import researchImg from '../assets/images/ncur.jpg';
import tutorImg from '../assets/images/tutor.jpg';
import lifeguardImg from '../assets/images/lifeguard.png';
import walmartImg from '../assets/images/walmart.jpg';

import adaptability from '../assets/icons/adaptability.svg';
import communication from '../assets/icons/communication.svg';
import customerService from '../assets/icons/customer-service.svg';
import leadership from '../assets/icons/leadership.svg';
import problemSolving from '../assets/icons/problem-solving.svg';
import publicSpeaking from '../assets/icons/public-speaking.svg';
import teamwork from '../assets/icons/teamwork.svg';

export const EXPERIENCES = [
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
    title: "Teaching Assistant",
    subtitle: "Elizabethtown College · Aug 2025 - Dec 2025",
    bullets: [
      "Assisted the Computer Science I professor in mentoring 30+ students learning Python, providing individualized guidance on labs, projects, and core programming concepts",
      "Diagnosed and resolved programming errors in student code, strengthening debugging, analytical thinking, and problem-solving while improving student understanding",
    ],
    image: taImg,
    skills: [
      {skill: "Communication", src: communication},
      {skill: "Adaptability", src: adaptability},
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
  },
  {
    title: "Peer Tutor",
    subtitle: "Elizabethtown College · Aug 2025 - Present",
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
    title: "Lifeguard",
    subtitle: "YMCA · Sep 2022 - Present",
    bullets: [
      "Maintained a safe environment by monitoring patron activity, enforcing safety regulations, and responding proactively to potential hazards",
      "Monitored pool operations, including water chemistry and facility conditions, to ensure compliance with health and safety standards",
      "Applied American Red Cross Lifeguarding, First Aid, CPR, and AED certification to respond effectively to emergencies while providing excellent customer service to patrons",
    ],
    image: lifeguardImg,
    skills: [
      {skill: "Teamwork", src: teamwork},
      {skill: "Customer Service", src: customerService},
    ],
  },
  {
    title: "Digital Personal Shopper",
    subtitle: "Walmart · Jun 2024 - Aug 2024",
    bullets: [
      "Collaborated with fellow associates to accurately fulfill online orders in a fast-paced, team-oriented environment",
      "Assisted customers with questions and resolved concerns, providing friendly and efficient customer service during order pickup",
      "Maintained an organized staging and dispensing area while coordinating with team members to ensure timely and accurate order fulfillment",
    ],
    image: walmartImg,
    skills: [
      {skill: "Customer Service", src: customerService},
      {skill: "Communication", src: communication},
    ],
  },
];
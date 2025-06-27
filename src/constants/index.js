import { meta, shopify, starbucks, tesla } from "../assets/images";
import backgammonIcon from "../assets/images/backgammon.png";
import nineleapsIcon from "../assets/images/nineleaps.png";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const personalInfo = {
    name: "Aditya Bhadauria",
    location: "Karnataka, India",
    phone: "+916388342900",
    email: "adityabhadauria162002@gmail.com",
    title: "Full Stack Developer",
    education: {
        degree: "B.E, Computer Science",
        university: "Graphic Era University",
        location: "Dehradun",
        duration: "01/2019 - 01/2023",
        gpa: "8.00"
    }
};

export const skills = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Engineer",
        company_name: "Backgammon Galaxy",
        icon: backgammonIcon,
        iconBg: "#a2d2ff",
        date: "09/2023 - Present",
        location: "Remote(Spain)",
        points: [
            "Designed and built the version 2 web application for Backgammon Galaxy—a leading backgammon game in Europe with over 40,000+ daily active users—featuring customizable avatars, interactive boards, rating and coin-based matchmaking, leaderboards, and a real-time waiting room experience.",
            "Integrated the bot server with the XG Gammon engine via gRPC over TCP to fetch high-accuracy move suggestions and error rates, enabling post-game blunder analysis and skill improvement insights.",
            "Experienced in deploying and maintaining scalable microservices using Kubernetes, KIND, Helm, and Docker, with strong focus on performance optimization, resource management, and infrastructure reliability.",
            "Implemented seamless real-time movement synchronization using Elixir and WebSockets, drastically reducing latency and enhancing gameplay fluidity for all players.",
            "Built and launched the 'Play vs AI' feature, allowing players to challenge bots with varying difficulty levels, monetized the experience as a tutoring tool to help players improve through guided gameplay thus increasing the revenue of the company.",
            "Developed the 'Friends' feature using an XMPP client, enabling real-time presence detection, friend requests, and casual game invitations—making the game more social and community-driven.",
            "Used React Native WebView to create a responsive design, ensuring a smooth and consistent user experience across both mobile and desktop platforms.",
            "Used Anthropic's LLM to generate human-friendly blunder explanations, helping players better understand and learn from their mistakes."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Nineleaps",
        icon: nineleapsIcon,
        iconBg: "#accbe1",
        date: "12/2022 - 09/2023",
        location: "Bengaluru, Karnataka",
        points: [
            "Demonstrated technical prowess by designing and implementing a water management system aimed at calculating water loss at each node. Leveraged ReactJS, NodeJS, and SQL to ensure effective system development with Low Latency and High Throughput.",
            "Integrated RESTful API architecture to facilitate seamless communication between the frontend and backend, enhancing the system's overall efficiency and performance.",
            "Implemented CI/CD (Continuous Integration and Continuous Deployment) pipelines to automate the testing, building, and deployment processes, reducing manual intervention and enabling rapid feature delivery."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/adityabhadauria',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/adityabhadauria',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Backgammon Galaxy v2',
        description: 'A leading backgammon game in Europe with 40,000+ daily active users. Features include customizable avatars, interactive boards, rating-based matchmaking, leaderboards, real-time waiting room, AI integration with XG Gammon engine, and social features.',
        link: 'https://play.backgammongalaxy.com',
        technologies: ['React', 'Node.js', 'Elixir', 'WebSockets', 'Kubernetes', 'Docker', 'gRPC', 'XMPP']
    },
    {
        iconUrl: null,
        theme: 'btn-back-black',
        name: 'AI-Powered Game Analysis',
        description: 'Integrated Anthropic\'s LLM to generate human-friendly blunder explanations, helping players better understand and learn from their mistakes in backgammon games.',
        link: '#',
        technologies: ['AI/ML', 'LLM Integration', 'Game Analytics', 'User Experience'],
        customIcon: 'A'
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Real-time Multiplayer Gaming',
        description: 'Built scalable real-time multiplayer gaming infrastructure with WebSocket integration, presence detection, and social features for enhanced user engagement.',
        link: '#',
        technologies: ['WebSockets', 'Real-time Communication', 'Social Features', 'Scalability']
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Microservices Architecture',
        description: 'Designed and deployed scalable microservices using Kubernetes, KIND, Helm, and Docker with focus on performance optimization and infrastructure reliability.',
        link: '#',
        technologies: ['Kubernetes', 'Docker', 'Helm', 'Microservices', 'DevOps']
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Cross-Platform Mobile App',
        description: 'Developed responsive cross-platform application using React Native WebView ensuring consistent user experience across mobile and desktop platforms.',
        link: '#',
        technologies: ['React Native', 'WebView', 'Cross-platform', 'Responsive Design']
    }
];
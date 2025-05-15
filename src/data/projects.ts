export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Social Media Platform",
    description: "Built a full-stack social media platform using React and Django REST framework, enabling users to connect and share content.",
    technologies: ["React", "Python", "Django", "REST API"],
    category: "Web Development",
    image: "/images/social-media.png"
  },
  {
    title: "GM Scan App",
    description: "Developed an Android app to scan ID cards, business cards, documents, and ISBN barcodes, with user login, registration, and scanned history tracking.",
    technologies: ["Java", "Android Studio", "OCR", "Barcode Scanning", "xml" ],
    category: "Mobile Development",
    image: "/images/gmscan.png"
  },
  {
    title: "AR Educational App",
    description: "Created an augmented reality application for educational purposes, teaching alphabetical order through interactive animal visualizations.",
    technologies: ["AR", "Java", "xml", "Android Studio"],
    category: "AR Development",
    image: "/images/ARapp.png"
  },
  {
    title: "Chat Website",
    description: "Implemented a real-time chat application with a modern UI using Django backend and JavaScript frontend.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Python", "Django"],
    category: "Web Development",
    image: "/images/chat-website.png"
  },
  {
    title: "React Admin Dashboard",
    description: "Designed and developed a React-based dashboard using Material UI, Data Grid, Light and Dark Mode.",
    technologies: ["React", "Charts.js", "Tailwind CSS", "Material UI"],
    category: "Web Development",
    image: "/images/react-dashboard.png"
  }
];
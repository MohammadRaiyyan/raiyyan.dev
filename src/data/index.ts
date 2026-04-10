export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  link: string;
  colorTheme: string;
  tags: string[];
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: 'TrajectAI',
    description:
      'Full-stack AI career platform featuring ATS resume scoring, adaptive mock interviews, AI cover letter generation, and personalized career insights. Built monorepo architecture with shared TypeScript contracts and Gemini SDK integration for structured AI inference.',
    image: '/images/trajectai.png',
    githubLink: 'https://github.com/MohammadRaiyyan/personal-assistent',
    link: 'https://personal-assistent-five.vercel.app/',
    colorTheme: '#00f5c4',
    tags: ['react-19', 'typescript', 'python', 'fastapi', 'postgresql', 'gemini-api'],
    featured: true,
  },
  {
    title: 'Keeper',
    description:
      'Production-ready full-stack task management system built with SolidJS and Node.js/MongoDB. Features real-time synchronization using TanStack Query, advanced filtering by status and priority, RESTful API architecture, and optimistic updates.',
    image: '/images/keeper.png',
    githubLink: 'https://github.com/MohammadRaiyyan/keeper-solid',
    link: 'https://keeper-solid.netlify.app',
    colorTheme: '#4338ca',
    tags: ['solidjs', 'typescript', 'tanstack-query', 'nodejs', 'mongodb'],
    featured: true,
  },
  {
    title: 'Vue Jobsy',
    description:
      'Feature-rich job search platform built with Vue.js showcasing advanced filtering across large datasets. Implements Vuex for centralized state management with multi-criteria filtering and dynamic routing.',
    image: '/images/jobsy.png',
    githubLink: 'https://github.com/MohammadRaiyyan/jobsy',
    link: 'https://app-jobsy.netlify.app/',
    colorTheme: '#41b883',
    tags: ['vue', 'vuex', 'vue-router', 'tailwindcss'],
  },
  {
    title: 'Cryptoworld',
    description:
      'Comprehensive cryptocurrency tracking platform with real-time price updates, market statistics, and historical charts. Integrates Coinranking API for live data on 100+ cryptocurrencies.',
    image: '/images/crypto.png',
    githubLink: 'https://github.com/2raiyyan1khan/cryptoworld',
    link: 'https://world-crypto-app.netlify.app/',
    colorTheme: '#5b21b6',
    tags: ['react', 'redux', 'coinranking-api', 'tailwindcss'],
  },
  {
    title: 'Image Gallery',
    description:
      'Responsive image gallery with infinite scroll, lazy loading, and dynamic search — built entirely in vanilla JavaScript without framework dependencies, demonstrating strong core JS fundamentals.',
    image: '/images/gallery.png',
    githubLink: 'https://github.com/2raiyyan1khan/image-gallery-using-pexels-api',
    link: 'https://pixel-gallery.netlify.app/',
    colorTheme: '#537651',
    tags: ['javascript', 'html', 'css', 'pexels-api'],
  },
  {
    title: 'Music Mantra',
    description:
      'Fully-functional music streaming app integrating YouTube API for playback. Features genre-based organization, playlist management, queue management, and custom media controls.',
    image: '/images/musicmuntra.png',
    githubLink: '/',
    link: 'https://music-muntra.netlify.app/',
    colorTheme: '#d53175',
    tags: ['react', 'redux', 'youtube-api', 'tailwindcss'],
  },
];

export const skills: Skill[] = [
  // Core
  { name: 'React.js', category: 'Frontend', icon: 'https://cdn.simpleicons.org/react/00D8FF' },
  { name: 'TypeScript', category: 'Language', icon: 'https://cdn.simpleicons.org/typescript/3178c6' },
  { name: 'JavaScript', category: 'Language', icon: 'https://cdn.simpleicons.org/javascript/f0db4f' },
  { name: 'Next.js', category: 'Frontend', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  // Styling
  { name: 'Tailwind CSS', category: 'Styling', icon: 'https://cdn.simpleicons.org/tailwindcss/38b2ac' },
  { name: 'CSS', category: 'Styling', icon: 'https://cdn.simpleicons.org/css/2965f1' },

  // State
  { name: 'Redux', category: 'State', icon: 'https://cdn.simpleicons.org/redux/764abc' },
  { name: 'Zustand', category: 'State', icon: 'https://cdn.simpleicons.org/react/e2813a' },
  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Python', category: 'Language', icon: 'https://cdn.simpleicons.org/python' },
  { name: 'FastAPI', category: 'Backend', icon: 'https://cdn.simpleicons.org/fastapi' },
  { name: 'PostgreSQL', category: 'Backend', icon: 'https://cdn.simpleicons.org/postgresql/336791' },
  { name: 'GraphQL', category: 'Frontend', icon: 'https://cdn.simpleicons.org/graphql/e10098' },
  // Tools
  { name: 'Git', category: 'Tools', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'Docker', category: 'Tools', icon: 'https://cdn.simpleicons.org/docker/0db7ed' },
  { name: 'Vite', category: 'Tools', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
  { name: 'Jest', category: 'Testing', icon: 'https://cdn.simpleicons.org/jest/C21325' },
  { name: 'Vitest', category: 'Testing', icon: 'https://cdn.simpleicons.org/vitest/6E9F18' },

];

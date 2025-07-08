import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import ProjectCard from '../layouts/ProjectCard';
import underConstruction from '../assets/images/underConstruction.jpeg';
import bunnyPic from '../assets/images/artscript.png';
import newsPic from '../assets/images/News.png';
import bubblePic from '../assets/images/bubble.png';
import reciMe from '../assets/images/ReciMe.png';
import helpMeStudyPic from '../assets/images/helpmestudy.png';
import spotivibe from '../assets/images/SpotiVibe.png';
import conwayGIF from '../assets/gifs/conway.gif';
import personalWebGIF from '../assets/gifs/personal_web.gif';
import snakeGIF from '../assets/gifs/snake.gif';
import flipbookGIF from '../assets/gifs/flip_book.gif';
import ProjectDisplay from "../layouts/ProjectDisplay"
import TriePic from "../assets/images/trie.png"
import trivia from "../assets/images/trivia.png"
import bookstore from "../assets/images/bookstore.png"
import tictactoe from "../assets/images/tictactoe.png"
import weather from "../assets/images/weather&news.png"
import thomasjeff from "../assets/images/thomasjeff.png"
import emotion from "../assets/images/emotion.png"
import yolo from "../assets/images/yolo.png"
import movieChat from "../assets/images/movieChat.png"
import sift from "../assets/images/sift.png"
import encryption from "../assets/images/encryption.png"
import plana from "../assets/images/plana.png"
import minesweeper from "../assets/images/minesweeper.png"
import shop from "../assets/images/shop.png"
import cityWeather from "../assets/images/weather.png"
import website from "../assets/images/website.png"

const Projects = () => {
  const allProjects = [
    // Featured Projects
    {
      title: 'ArtScript',
      description: 'Designed and implemented a domain-specific language (DSL) in F# using functional programming principles and custom parser combinators to support commands for procedural drawing (e.g., lines, shapes, loops). The language enables users—especially children and beginner programmers—to express logic visually by drawing geometric art. Inspired by geometric artwork from the Williams College Museum of Art, ArtScript emphasizes mathematical elegance, accessibility, and creativity.',
      image: bunnyPic,
      techStack: ['F#', '.NET', 'SVG', 'Parser Combinators', 'Graphviz'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/ArtScript_complete',
      featured: true,
      skills: [
        'Designed and parsed a custom language syntax using parser combinators',
        'Built a multi-stage interpreter pipeline: lexing, parsing, AST creation, and recursive evaluation',
        'Implemented geometry-based logic for drawing lines, circles, rectangles, and polygons',
        'Developed colorized SVG output for real-time visual feedback',
        'Integrated Graphviz for intermediate visualization of AST and program flow'
      ]
    },
    {
      title: 'ReciME',
      description: 'ReciME is a full-stack recipe web application that allows users to explore, create, and manage recipes with features like commenting, rating, and assistant interaction. It integrates the Edamam Recipe API for external content and Firebase Firestore for real-time, user-generated data. The platform includes an admin panel for moderation, user authentication via Firebase, and a chatbot assistant for helping users during recipe creation. Designed with modular pages and responsive UI, ReciME prioritizes usability and scalability while following best practices in API consumption, database structuring, and interactive web design.',
      image: reciMe,
      techStack: [
        'React',
        'Node.js',
        'Express.js',
        'Firebase Firestore',
        'Firebase Authentication',
        'Edamam API',
        'CSS',
        'Chatbot Integration',
        'Figma (UI Design)'
      ],
      liveDemoLink: '', 
      repoLink: 'https://github.com/Henok-foslyk/Recipe-Project',
      featured: true,
      skills: [
        'Built a full-stack React + Express.js application',
        'Integrated third-party API (Edamam) for real-time recipe search and nutrition info',
        'Structured Firestore database for user recipes, comments, and ratings',
        'Developed role-based user authentication and authorization with Firebase',
        'Implemented recipe assistant chatbot using keyword matching logic',
        'Created modular frontend pages: Dashboard, Recipe View, Admin Panel',
        'Used Figma for UI design and planning',
        'Handled responsive styling for mobile and desktop views'
      ]
    },
    {
      title: 'News Copilot',
      description: 'News Copilot is a machine learning project developed as part of the Break Through Tech AI program. The goal was to build a robust model that categorizes news articles based on their headlines and descriptions to help reduce information overload for users. Using a labeled BBC News dataset from Kaggle, we conducted exploratory text analysis, built a logistic regression baseline, and compared it with Naive Bayes, KNN, and Random Forest classifiers. The final pipeline included text preprocessing, feature engineering, and hyperparameter optimization. This project was presented to and reviewed by a Microsoft AI Lead.',
      image: newsPic,
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook'],
      liveDemoLink: '', 
      repoLink: 'https://github.com/Henok-foslyk/news-copilot',
      featured: true,
      skills: [
        'Supervised learning for multi-class text classification',
        'Exploratory data analysis on text-based datasets',
        'Built feature pipelines using TF-IDF vectorization and count-based encodings',
        'Trained and evaluated multiple classifiers: Logistic Regression, Naive Bayes, KNN, Random Forest',
        'Performed hyperparameter tuning using GridSearchCV',
        'Presented findings and model evaluation to a Microsoft AI Lead as part of Break Through Tech AI'
      ]
    },    
    {
      title: 'Spotivibe',
      description: 'As part of a simulated internship at Spotify, we built a full-stack social music web application using React, Express, and Firebase. The app leverages the Spotify API to let users view their top songs and artists, customize their music profiles, discover other users, engage in forums, and exchange private messages. Designed to increase user engagement beyond listening, our platform transforms Spotify into a social experience. All API and database interactions are routed through an Express backend for security and scalability. Our team also implemented authentication via Spotify OAuth and prioritized responsive, professional UI/UX throughout development.',
      image: spotivibe,
      techStack: ['React', 'Express', 'Node.js', 'Firebase', 'Spotify API', 'OAuth 2.0', 'JavaScript'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/Spotify-Project.git',
      featured: true,
      skills: [
        "Full-stack development with React and Express",
        "Real-time database management with Firebase",
        "Spotify OAuth integration and secure API handling",
        "User authentication and profile privacy controls",
        "Forum and messaging system implementation",
        "Responsive and accessible UI design without Material UI"
      ]
    },    
    {
      title: 'Help Me Study Extension',
      description: 'HelpMeStudy is a productivity-focused Chrome browser extension engineered to promote responsible digital habits among students. Built using JavaScript and the Chrome Extension API, the extension tracks tab usage and domain activity, triggering time-based reminders and notifications that nudge users toward academic tasks. Originally conceptualized during a design sprint, the project evolved from a pop-up quiz prototype into a context-aware assistant focused on digital well-being. The tool incorporates logic for session monitoring, user-defined thresholds, and intelligent interruption handling—backed by iterative prototyping, Figma mockups, and user testing with real feedback cycles.',
      image: helpMeStudyPic,
      techStack: [
        'JavaScript',
        'Chrome Extension APIs',
        'HTML',
        'CSS',
        'Figma (Prototyping)',
        'User Testing Tools'
      ],
      liveDemoLink: '', // Optional if hosted on Chrome Web Store in future
      repoLink: 'https://github.com/Henok-foslyk/Help_Me_Study',
      featured: true,
      skills: [
        'Built Chrome extension with persistent background scripts and content scripts',
        'Tracked browser tab activity and analyzed domain usage patterns in real-time',
        'Implemented notification logic based on customizable focus intervals',
        'Developed logic for intelligent behavior-based reminders and nudges',
        'Designed wireframes and flows using Figma',
        'Conducted usability testing and refined UX based on feedback',
        'Worked within Chrome’s permission and sandbox model for secure extension behavior'
      ]
    }
    ,
    
    

    // All Projects
    { title: 'Henok\'s Website', description: '', image: website, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Henok\'s page', description: '', image: personalWebGIF, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'MineSweeper', description: '', image: minesweeper, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Shopoholic', description: '', image: shop, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Weather App', description: 'A mobile app demonstrating use of APIs and HTTP requests to fetch and display weather information.', image: cityWeather, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Plana', description: 'Focuses on upgrading and modernizing deprecated code for calendar functionalities.', image: plana, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Encrypting S1.0', description: '', image: sift, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Cryptography Puzzles', description: '', image: encryption, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'YOLO Object Detection', description: '', image: yolo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Emotion Detection', description: '', image: emotion, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false, animateImage: false },
    { title: 'Movie Chatbots', description: '', image: movieChat, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false, animateImage: false },
    { title: 'Bubble Shooter', description: '', image: bubblePic, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Snake Game', description: '', image: snakeGIF, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false, animateImage: false },
    { title: 'Flip Book', description: '', image: flipbookGIF, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false, animateImage: false },
    { title: 'Trie Implementation', description: '', image: TriePic, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: "Conway's Game of Life", description: '', image: conwayGIF, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false, animateImage: false },
    { title: 'Thomas Jefferson School Website', description: '', image: thomasjeff, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Weather & News App ', description: '', image: weather, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Tic Tac Toe Game ', description: '', image: tictactoe, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Book Store', description: '', image: bookstore, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Trivia Generator', description: '', image: trivia, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
  ];

  const featuredProjects = allProjects.filter(project => project.featured);
  const otherProjects = allProjects.filter(project => !project.featured);

  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Featured Projects</h2>
      <p className="text-gray-700 mb-6">
        These are some of my favorite and most impactful projects.
      </p>
      <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={4}>
        {featuredProjects.map((project, idx) => (
          <Box key={idx} sx={{ width: 320, cursor: 'pointer' }} onClick={() => handleOpen(project)}>
            <ProjectCard {...project} />
          </Box>
        ))}
      </Stack>

      <h2 className="text-3xl font-semibold mt-12 mb-4">All Projects</h2>
      <p className="text-gray-700 mb-6">
        A comprehensive list of my projects across courses, internships, and personal work.
      </p>
      <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={4}>
        {otherProjects.map((project, idx) => (
          <Box key={idx} sx={{ width: 320, cursor: 'pointer' }} onClick={() => handleOpen(project)}>
            <ProjectCard {...project} />
          </Box>
        ))}
      </Stack>
      <ProjectDisplay open={modalOpen} onClose={handleClose} project={selectedProject} />
    </section>
  );
};

export default Projects;

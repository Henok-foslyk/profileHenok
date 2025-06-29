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

const Projects = () => {
  const allProjects = [
    // Featured Projects
    {
      title: 'ArtScript',
      description: 'ArtScript is a custom-designed programming language that enables users—especially beginners and aspiring artists—to create geometric art using simple, intuitive commands. Built around core concepts such as drawing with a virtual pen, using coordinates, and repeating patterns, ArtScript allows users to generate lines, circles, rectangles, and complex polygons with precision. The language emphasizes accessibility, creativity, and mathematical elegance, making it an engaging educational tool for learning programming fundamentals through visual expression. Inspired by geometric artwork from the Williams College Museum of Art, ArtScript merges computational logic with artistic freedom.',
      image: bunnyPic,
      techStack: ['F#', '.NET', 'SVG', 'Parser Combinators'],
      liveDemoLink: 'https://your-artscript-demo-link.com',
      repoLink: 'https://github.com/Henok-foslyk/ArtScript_complete',
      featured: true,
      skills: [
        'Designed and parsed a custom language syntax',
        'Built and traversed an abstract syntax tree (AST)',
        'Implemented drawing logic based on geometric commands',
        'Applied functional programming concepts in F#',
        'Handled SVG output generation programmatically'
      ]
    },
    {
      title: 'ReciME',
      description: 'This Edamam Recipe Web App is a full-stack application that helps users discover and manage recipes. It integrates the Edamam Recipe API for official content and leverages Firebase Firestore for user-generated content. Users can search, filter, and save recipes, interact through comments and ratings, and even chat with a built-in assistant for help. Designed with modular pages including a dashboard, admin panel, and recipe creation interface, the app emphasizes usability and scalability. Developed in React with a Node/Express backend, it demonstrates best practices in API integration, real-time databases, and user interaction flows.',
      image: reciMe,
      techStack: [
        'React', 
        'Node.js', 
        'Express.js', 
        'Firebase Firestore', 
        'Firebase Authentication', 
        'Edamam Recipe API', 
        'CSS', 
        'Chatbot Integration', 
        'Figma (UI Design)'
      ],
      liveDemoLink: '',
      repoLink: '',
      featured: true,
      skills: [
        'Full-stack development using React and Express.js',
        'API integration with Edamam for recipe data',
        'Database design and CRUD operations with Firebase Firestore',
        'Commenting and rating systems with moderation and sorting',
        'Chatbot development for recipe assistance',
        'Admin workflows for content approval and publishing',
        'Authentication and role-based access control',
        'Responsive design and interactive user interface',
        'Image upload (optional stretch goal)',
        'Social sharing and user following (optional stretch goal)'
      ]
    },
    {
      title: 'News Copilot',
      description: 'A machine learning project developed after studying ML fundamentals at Cornell. The goal was to build a model that quickly and accurately categorizes news articles by analyzing their headlines and descriptions—enhancing user experience by reducing information overload. Using a Kaggle BBC news dataset, we explored text characteristics, built a logistic regression baseline, experimented with multiple classifiers, and performed hyperparameter optimization for improved accuracy.',
      image: newsPic,
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook'],
      liveDemoLink: '',
      repoLink: '',
      featured: true,
      skills: [
        "Supervised learning for text classification",
        "Model evaluation and hyperparameter tuning",
        "Experimentation with logistic regression, Naive Bayes, Random Forest, and KNN"
      ]
    },
    {
      title: 'Spotivibe',
      description: 'As part of a simulated internship at Spotify, we built a full-stack social music web application using React, Express, and Firebase. The app leverages the Spotify API to let users view their top songs and artists, customize their music profiles, discover other users, engage in forums, and exchange private messages. Designed to increase user engagement beyond listening, our platform transforms Spotify into a social experience. All API and database interactions are routed through an Express backend for security and scalability. Our team also implemented authentication via Spotify OAuth and prioritized responsive, professional UI/UX throughout development.',
      image: spotivibe,
      techStack: ['React', 'Express', 'Node.js', 'Firebase', 'Spotify API', 'OAuth 2.0', 'JavaScript'],
      liveDemoLink: '',
      repoLink: '',
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
      description: 'HelpMeStudy is a lightweight browser extension designed to promote responsible digital habits among students by tracking web activity and providing intentional, customizable reminders. Built during a design sprint focused on fostering responsibility, the tool evolved from a pop-up quiz idea into a productivity-focused extension with user-centered features. It unobtrusively encourages users to realign their browsing behavior with academic goals, using gentle nudges and time-based notifications. Our iterative development emphasized empathy-driven design, usability testing, and responsiveness to user feedback—making the final product both practical and impactful.',
      image: helpMeStudyPic,
      techStack: ['JavaScript', 'Chrome Extension APIs', 'HTML', 'CSS', 'Figma (Prototyping)', 'User Testing Tools'],
      liveDemoLink: '',
      repoLink: '',
      featured: true,
      skills: [
        "User-centered design and empathy mapping",
        "Browser extension development with Chrome APIs",
        "Iterative prototyping and usability testing",
        "Behavioral nudges for digital well-being",
        "Notification systems and time-tracking logic"
      ]
    },
    
    

    // All Projects
    { title: 'Personal Profile', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: underConstruction, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Personal Webpage', description: '', image: personalWebGIF, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'MineSweeper Game', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: underConstruction, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Shopping List App', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: underConstruction, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Weather App', description: 'A mobile app demonstrating use of APIs and HTTP requests to fetch and display weather information.', image: underConstruction, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Calendar App', description: 'Focuses on upgrading and modernizing deprecated code for calendar functionalities.', image: underConstruction, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Encrypting S1.0', description: 'A final cryptography project implementing encryption techniques covered in the course.', image: underConstruction, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Encryption Puzzle Solver', description: 'Solved various encryption challenges to deepen understanding of cryptographic techniques.', image: underConstruction, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'YOLO Object Detection', description: 'Deep learning project using YOLO to perform object detection, training and evaluating performance on multiple datasets.', image: underConstruction, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Emotion Detection', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: underConstruction, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Movie Chatbots', description: 'Built multiple chatbot models using NLP techniques including regex, Naive Bayes, Logistic Regression, word vectors, and transformers.', image: underConstruction, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Bubble Shooter', description: '', image: bubblePic, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Snake Game', description: '', image: snakeGIF, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Flip Book', description: '', image: flipbookGIF, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Trie Implementation', description: '', image: TriePic, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: "Conway's Game of Life", description: '', image: conwayGIF, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
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

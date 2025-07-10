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
    {
      title: "Henok's Website",
      description: "Personal portfolio website built with React and Material UI, featuring a modular, multi-page design that showcases projects, work experience, and campus activities. The site supports light and dark themes with smooth transitions, responsive layouts, and reusable card components to ensure consistency and scalability across pages.",
      image: website,
      techStack: ['React', 'Material UI (MUI)', 'JavaScript', 'CSS', 'React Router', 'Responsive Design', 'Theme Switching (Light/Dark)'],
      liveDemoLink: '', // Add link if deployed
      repoLink: 'https://github.com/Henok-foslyk/profileHenok.git', // Add repo if public
      featured: false,
      skills: [
        'Developed a 5-page SPA with React Router for smooth navigation',
        'Implemented light and dark theme toggling using MUI theming and React context',
        'Built modular, reusable card and display components for consistent UI',
        'Optimized responsive design for desktop and mobile viewports',
        'Structured site content to highlight technical projects, internships, and extracurriculars'
      ]
    },
    {
      title: "Henok's Page",
      description: "A static personal website built from scratch using HTML and CSS to explore foundational front-end development. Designed as a learning exercise, the site highlights coursework, including Human-Computer Interaction (CS376), and showcases project work through semantic HTML structure, responsive design techniques, and custom styling. It features custom navigation, internal routing with multiple HTML files, dropdown menus, and a project gallery—all without relying on external frameworks. This site helped reinforce core concepts in accessibility, layout design, and semantic markup.",
      image: personalWebGIF,
      techStack: ['HTML', 'CSS', 'Vanilla JavaScript', 'Responsive Design', 'GitHub Pages'],      liveDemoLink: '', // Add if hosted on GitHub Pages
      repoLink: 'https://github.com/Henok-sys/Henok-sys.github.io',
      featured: false,
      skills: [
        'Structured multi-page static site with semantic HTML elements',
        'Designed responsive layouts and grid-based project sections using CSS Flexbox',
        'Implemented dropdown navigation menu without external JavaScript libraries',
        'Organized HCI project portfolio with categorized sections and internal routing',
        'Practiced accessibility and semantic markup best practices',
        'Used GitHub Pages for static site deployment'
      ]
    },
    {
      title: 'MineSweeper',
      description: 'A fully interactive Android application built with Jetpack Compose and Kotlin, implementing core game mechanics using breadth-first search (BFS) for uncovering adjacent empty cells. The app features customizable board sizes, state-driven UI updates, and multi-mode gameplay including flagging and tapping. Incorporates dynamic rendering with Canvas, image assets for game elements, and background audio playback for immersive experience. Designed with modern mobile development practices, the game supports reactive state management via ViewModel and Compose, and robust user interaction handling through gesture recognition.',
      image: minesweeper,
      techStack: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Canvas API', 'BFS Algorithm', 'MVVM Architecture'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/Android-Studio-Projects/tree/main/MineSweeper',
      featured: false,
      skills: [
        'Mobile development with Jetpack Compose and Kotlin',
        'State management using ViewModel and Compose',
        'Canvas-based UI rendering and asset drawing',
        'Breadth-first search (BFS) for game logic',
        'Gesture detection and interactive gameplay handling',
        'MVVM architecture implementation for scalability',
        'MediaPlayer integration for background music playback',
        'Dynamic UI layout with adaptive board sizing'
      ]
    },
    {
      title: 'Shopoholic',
      description: 'A feature-rich Android shopping list app built using Kotlin and Jetpack Compose. It integrates Firebase for real-time data storage and uses `LazyColumn` to render only visible components, improving performance. The app supports item categorization, price tracking, and summary generation, offering a modern UI with gesture-based interactions and stateful dialogues for editing or adding new items.',
      image: shop,
      techStack: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase', 'LazyColumn', 'MVVM Architecture'],
      liveDemoLink: '', // Add if published to Play Store or demo
      repoLink: 'https://github.com/Henok-foslyk/Android-Studio-Projects/tree/main/ShoppingList',
      featured: false,
      skills: [
        'Integrated Firebase to store, retrieve, and update shopping list data in real-time',
        'Used `LazyColumn` to render visible composables efficiently, improving UI performance',
        'Implemented MVVM architecture using ViewModel for separation of concerns',
        'Designed dynamic shopping cards with expand/collapse behavior and interactive checkboxes',
        'Created modal dialogues for adding and editing items with validation and dropdown categories',
        'Supported item categorization (e.g., electronics, books) and visual summary insights'
      ]
    },
    {
      title: 'Weather App',
      description: 'A weather tracking Android app built with Kotlin and Jetpack Compose. It uses the OpenWeatherMap API to fetch current weather data and city-specific weather images. The app enables users to add, edit, and delete cities from a persistent list, and provides an interactive UI for managing locations with real-time weather queries.',
      image: cityWeather,
      techStack: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'OpenWeatherMap API', 'LazyColumn', 'MVVM Architecture'],
      liveDemoLink: '', // Add if published
      repoLink: 'https://github.com/Henok-foslyk/Android-Studio-Projects/tree/main/WeatherWiz',
      featured: false,
      skills: [
        'Fetched and parsed real-time weather data using OpenWeatherMap API',
        'Displayed location-based weather cards with image assets and added date info',
        'Built modal dialogues to add and edit cities using Jetpack Compose',
        'Managed UI state with ViewModel and Jetpack Compose’s `rememberSaveable`',
        'Utilized `LazyColumn` with key-based rendering for city cards',
        'Supported city-specific weather updates triggered via user interaction'
      ]
    },
    {
      title: 'Plana',
      description: 'A modern weekly planner and calendar Android app using Kotlin, Jetpack Compose, and an external calendar library. It supports Google authentication and integrates calendar event scheduling and note-taking features. Users can interact with a weekly view, select dates, view tasks, and take notes, all backed by MVVM architecture and reactive state management.',
      image: plana,
      techStack: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'SelectableWeekCalendar', 'MVVM Architecture', 'Google Authentication'],
      liveDemoLink: '', // Add if published
      repoLink: 'https://github.com/Henok-foslyk/Plana.git',
      featured: false,
      skills: [
        'Integrated external calendar library for a scrollable weekly planner view',
        'Implemented Gmail authentication for user login and session handling',
        'Used ViewModel for state management and reactive UI rendering',
        'Displayed calendar events using a dynamic `SelectableWeekCalendar` with custom day content',
        'Enabled task viewing, event sorting, and interactive date selection',
        'Built note-taking interface with stylized input and state persistence'
      ]
    },
    { title: 'Encrypting S1.0', description: '', image: sift, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Cryptography Puzzles', description: '', image: encryption, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'YOLO Object Detection', description: '', image: yolo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Emotion Detection', description: '', image: emotion, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false, animateImage: false },
    { title: 'Movie Chatbots', description: '', image: movieChat, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false, animateImage: false },
    {
      title: 'Bubble Shooter',
      description: 'A dynamic 3D Java game featuring a bubble-shooting protagonist facing off against intelligent adversaries. Enemies adapt their behavior—chasing the player and dodging attacks as their health depletes. The game includes combat mechanics, evasion logic, and a "pet" system that grants extra lives.',
      image: bubblePic,
      techStack: ['Java', '2D Graphics', 'Custom Game Engine', 'Collision Detection', 'OOP'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/Bubble-Shooter-Game',
      featured: false,
      skills: [
        'Implemented behavior for enemies including pursuit',
        'Developed shooting mechanics with cooldowns and health tracking',
        'Created a pet life system for extra lives and defensive strategies',
        'Used bounding box collision detection for projectile and player interactions',
        'Designed a responsive and engaging gameplay loop with visual effects'
      ]
    },
    {
      title: 'Snake Game',
      description: 'A classic pixel-based Snake game built in Java with collision detection, increasing difficulty, and a self-collision death mechanic. The snake grows as it consumes food and dies when it runs into itself or the boundaries.',
      image: snakeGIF,
      techStack: ['Java', 'Object-Oriented Design', 'Event Listeners', 'Pixel-Based Movement'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/SnakeGame',
      featured: false,
      animateImage: false,
      skills: [
        'Developed grid-based movement system with incremental speed increase',
        'Implemented food consumption and tail growth mechanics',
        'Handled game-over scenarios via self-collision and wall contact detection',
        'Designed intuitive controls for real-time player movement',
        'Built a modular structure to support future game extensions'
      ]
    },
    {
      title: 'Flip Book',
      description: 'A drawing and animation app implemented in Java using nested data structures. Users can draw with points and lines across multiple pages and auto-play their drawings in sequence like an animation.',
      image: flipbookGIF,
      techStack: ['Java', 'Nested Arrays', 'Event Handling', 'Animation Logic'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/FlipBook',
      featured: false,
      animateImage: false,
      skills: [
        'Built a custom drawing tool using nested arrays to represent points, lines, and pages',
        'Enabled multi-page sketching with intuitive controls',
        'Implemented a playback feature to animate drawings frame by frame',
        'Managed state persistence across drawing sessions',
        'Used layered rendering to support complex user interactions',
        'Organized data structures for efficient lookup and storage of strokes'
      ]
    },
    {
      title: 'Trie Implementation',
      description: 'A visual and interactive Java implementation of a Trie data structure. Users can add, delete, and query words through a REPL-style interface, with the Trie visually updating in real time.',
      image: TriePic,
      techStack: ['Java', 'Trie Data Structure', 'Interactive Console (REPL)', 'Custom Visualization'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/Trie',
      featured: false,
      skills: [
        'Implemented a Trie with insert, delete, and search operations',
        'Developed a REPL interface for live word manipulation',
        'Visualized the Trie structure dynamically as it updates',
        'Handled edge cases like prefix conflicts and redundant inserts',
        'Designed a recursive rendering system to display hierarchical data',
        'Used object-oriented principles to model Trie nodes and relationships'
      ]
    },
    {
      title: "Conway's Game of Life",
      description: 'A simulation of Conway\'s Game of Life in Java, visualizing cellular automata with real-time rule application. Users can toggle cells, step through iterations, and observe emergent behavior.',
      image: conwayGIF,
      techStack: ['Java', , '2D Grid Simulation', 'Game Loop', 'Mathematical Modeling'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/Conways-Game-of-Life',
      featured: false,
      animateImage: false,
      skills: [
        'Simulated cellular automata based on four core rules of Conway\'s Game of Life',
        'Implemented toggling and state transitions of live and dead cells',
        'Built an interactive interface for user input and pattern creation',
        'Created a step-through and auto-run mode for simulation control',
        'Applied mathematical reasoning to determine neighbor-based cell fate'
      ]
    },
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

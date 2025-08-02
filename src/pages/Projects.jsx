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
      featured: true,
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
    {
      title: 'Encrypting S1.0',
      description: 'Implemented the SiFT v1.0 protocol, a secure Simple File Transfer protocol that extends the previous v0.5 version with advanced security features. This includes session key establishment using RSA key-pair generation, cryptographic message transfer with replay protection, and a suite of seven file commands (pwd, lst, chd, mkd, del, upl, dnl) to manage remote file operations securely over TCP/IP. Modified key files (login.py, mtp.py, server.py, client.py) to integrate cryptographic protocols following the SiFT v1.0 specification, ensuring confidentiality, integrity, and authentication on an insecure network.',
      image: sift,
      techStack: ['Python', 'Network Security', 'RSA Cryptography', 'Symmetric Encryption'],
      skills: ['Protocol Design', 
               'Cryptographic Key Management', 
               'Secure Network Programming'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/SiFT1.0.git',
      featured: false
    },
    {
      title: 'Cryptography Puzzles',
      description: 'A repository of cryptography puzzles and exercises designed for Applied Cryptography coursework. Covers concepts and implementations including one-time pads, block encryption modes (CBC), Kerckhoffs’s principle, cryptographic hash functions, MACs, authenticated encryption, replay attack prevention, and RSA-related mathematical problems. Serves as a study resource and coding practice collection.',
      image: encryption,
      techStack: ['Python', 'Cryptographic Hashing', 'Message Authentication Codes (MAC)', 'RSA Encryption'],
      skills: ['Cryptographic Analysis', 
               'Hash Function Implementation', 
               'Authentication Mechanisms'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/Cryptography-Implementations.git',
      featured: false
    },
    {
      title: 'YOLO Object Detection Demo',
      description: 'Conducted an in-class demonstration of YOLO (You Only Look Once) object detection system using the COCO dataset. Activated the model to recognize people and various objects in real-time classroom settings. Delivered a presentation explaining the internal workings of YOLO, including its architecture, bounding box prediction, and real-time detection capabilities. The project highlights practical applications of deep learning for object detection.',
      image: yolo, // add the appropriate imported image variable
      techStack: ['Python', 'Deep Learning', 'Computer Vision', 'YOLO', 'COCO Dataset'],
      skills: ['Real-time Object Detection', 'Model Deployment', 'Deep Learning Explanation'],
      liveDemoLink: '',
      repoLink: 'https://github.com/Henok-foslyk/YOLO.git',
      featured: false
    },
    {
      title: "Movie Suggestions Bot",
      description: "A conversational movie‑recommendation chatbot written in Python. Users type up to five liked or disliked films, the bot classifies each sentiment (rule‑based + logistic‑regression models) and then suggests new titles via item‑based collaborative filtering. Features disambiguation for ambiguous titles, typo‑tolerant spell‑checking, multi‑movie sentence parsing, and an interactive REPL with greeting/clarification logic.",
      image: movieChat,          // keep the same imported image variable
      techStack: [
        "Python",
        "NumPy",
        "scikit‑learn",
        "NLTK",
        "Logistic Regression",
        "Collaborative Filtering",
        "Regular Expressions"
      ],
      liveDemoLink: "",          // add later if you deploy
      repoLink: "https://github.com/Henok-foslyk/Movie-Suggestions-Bot",
      featured: false,
      skills: [
        "Natural‑language sentiment analysis (rule‑based & statistical)",
        "Title disambiguation and spell‑checking",
        "Collaborative filtering for personalized recs",
        "State‑driven dialog management",
        "Regex‑driven entity extraction",
        "Command‑line REPL design"
      ]
    },
    {
      title: "Emotion Detection",
      description: "A comparative study and implementation of multi‑label emotion‑classification models that tag Anger, Fear, Joy, Sadness, and Surprise at the sentence level. Evaluates Binary Relevance, Classifier Chains, a simple neural network, and transformer models (DeBERTa, DistilBERT). DeBERTa achieved the highest micro‑F1 on the SemEval‑2025 Task 11 dataset; translation experiments on Amharic revealed cross‑lingual performance gaps.",
      image: emotion,
      techStack: [
        "Python",
        "scikit‑learn",
        "NumPy",
        "PyTorch",
        "Matplotlib",
        "Hugging Face Transformers (DeBERTa, DistilBERT)",
        "Google Translate API",
      ],
      liveDemoLink: "",
      repoLink: "https://github.com/Henok-foslyk/Emotion-Detection",
      featured: false,
      skills: [
        "Multi‑label text classification",
        "Transformer fine‑tuning & hyper‑parameter search",
        "Binary Relevance and Classifier Chains baselines",
        "Dataset imbalance handling & evaluation (micro‑/macro‑F1)",
        "Cross‑lingual experimentation (Amharic → English)",
        "Research‑paper writing & result visualization"
      ]
    },
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
    {
      title: 'Thomas Jefferson School Dashboard',
      description: 'A five-page administrative web application built in a team setting for a fictional client, Thomas Jefferson Elementary. The dashboard digitizes school operations such as class management, student enrollment, grade editing, and event scheduling. Built with React and Firebase, it supports full CRUD operations for students, teachers, classes, and events. The platform includes directories, class pages, a teacher dashboard, and a school calendar. Designed with real-world usability in mind, this project prioritized clean data models, polished UI/UX, and professional team collaboration using GitHub feature-based branching and pull requests.',
      image: thomasjeff,
      techStack: ['React', 'Firebase', 'JavaScript', 'HTML', 'CSS', 'React Router', 'GitHub Flow', 'Firestore'],
      liveDemoLink: '', // Add if deployed
      repoLink: 'https://github.com/Henok-foslyk/Thomas-Jefferson-Elementary-School-Dashboard',
      featured: false,
      skills: [
        'Built a multi-page dashboard using React Router for modular navigation',
        'Implemented full Create, Read, Update, and Delete (CRUD) operations with Firebase Firestore',
        'Created dedicated pages for student and teacher directories, class dashboards, and event calendars',
        'Enabled grade editing, roster assignment, and live updates across all pages',
        'Integrated a school-wide event calendar for real-time scheduling',
        'Designed intuitive admin workflows with clear navigation and consistent UI',
        'Used GitHub Flow with feature-based branching and pull requests for team collaboration',
        'Structured Firestore database to efficiently manage users, roles, and relationships between classes and people'
      ]
    },
    {
      title: 'Weather & News App',
      description: 'A responsive web application that combines real-time weather data with current news headlines. Built using React, the app allows users to search for weather by city name, address, or zip code, leveraging the OpenWeatherMap Geocoding and OneCall APIs. It displays current conditions, a 24-hour hourly forecast, and a 7-day outlook, all enhanced with official OpenWeather weather icons. Additionally, it fetches and displays the latest news stories from the New York Times API, showing article titles, authors, images, summaries, and external links. Designed with a user-friendly layout and styled using Material UI, the app also includes a dark/light mode toggle for personalized viewing.',
      image: weather, // Replace with your image import
      techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Material UI', 'OpenWeatherMap API', 'New York Times API',],
      liveDemoLink: '', // Add if deployed
      repoLink: 'https://github.com/Henok-foslyk/Forge_Countdown_3/tree/main/WeatherAndNewsApp',
      featured: false,
      skills: [
        'Integrated OpenWeatherMap APIs for geocoding and detailed weather forecasts',
        'Fetched and rendered top 5 news stories using the New York Times API',
        'Used React components to modularize weather and news display logic',
        'Implemented dynamic rendering of weather icons based on forecast data',
        'Styled UI using Material UI with responsive grids and typography',
        'Added light mode/dark mode toggle using React state and MUI theme customization',
        'Handled multiple user input formats (address, city, zip) with fallback error handling'
      ]
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'An interactive web-based Tic Tac Toe game developed by following the official React tutorial. This project reinforces key concepts such as state management, component design, event handling, and conditional rendering. Beyond the base tutorial, custom features were added, including a board rewrite using loops, highlighted winning squares, a draw message, and personalized styling through enhanced CSS. The game allows users to navigate move history, track positions, and toggle the order of moves for a more intuitive experience.',
      image: tictactoe,
      techStack: ['React', 'JavaScript', 'HTML', 'CSS'],
      liveDemoLink: '', // Add if hosted online
      repoLink: 'https://github.com/Henok-foslyk/TicTacToe.git',
      featured: false,
      skills: [
        'Followed the official React tutorial to build an interactive game board',
        'Used React hooks and component state to manage game flow and player turns',
        'Refactored board rendering using nested loops for scalability',
        'Added feature to highlight winning squares visually',
        'Displayed (col, row) move coordinates in the history panel',
        'Enabled sorting of move history in ascending or descending order',
        'Styled interface with custom fonts, colors, layout, and spacing for improved UX'
      ]
    },
    {
      title: 'Book Store',
      description: 'A genre-based bookstore web application built using React and Vite. Users can select between fiction, non-fiction, and children’s categories to browse curated book lists with details including title, author, and price. Built as a mini-project to reinforce foundational React concepts like state management, props, conditional rendering, and event handling. A dynamic “Add to Basket” feature allows users to build a shopping cart in real time, with live updates to the basket section for an interactive and responsive user experience.',
      image: bookstore,
      techStack: ['React', 'JavaScript', 'HTML', 'CSS','Vite',],
      liveDemoLink: '', // Add if deployed
      repoLink: 'https://github.com/Henok-foslyk/Forge_Countdown_2/tree/main/bookstore-app',
      featured: false,
      skills: [
        'Used React state and useState hook to manage genre selection and basket content',
        'Created reusable components for genre buttons, book cards, and shopping basket',
        'Implemented conditional rendering to toggle book displays by genre',
        'Mapped over static dataset to dynamically display book lists',
        'Organized project using Vite setup with clean component-based architecture'
      ]
    },    
    {
      title: 'Trivia Generator',
      description: 'A React-based quiz application that fetches trivia questions from The Trivia API. Users are presented with a series of multiple-choice questions, where the correct answer is randomized among incorrect options to prevent pattern recognition. Upon selecting an answer, users receive instant visual feedback indicating whether they were correct. The project uses Material UI components to enhance visual consistency and provide accessible UI interactions, all while practicing real-world API integration and state management in React.',
      image: trivia,
      techStack: ['React', 'JavaScript', 'Material UI', 'The Trivia API', 'HTML', 'CSS'],
      liveDemoLink: '', // Add if deployed
      repoLink: 'https://github.com/Henok-foslyk/Forge_Countdown_2/tree/main/trivia-app',
      featured: false,
      skills: [
        'Fetched and randomized trivia questions from The Trivia API',
        'Displayed multiple-choice questions with answers shuffled dynamically',
        'Provided immediate visual feedback (correct/incorrect) upon answer selection',
        'Used Material UI for consistent and accessible button and card design',
        'Handled asynchronous data loading and managed state using React hooks',
        'Implemented a clean, responsive layout for an interactive quiz experience'
      ]
    }
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

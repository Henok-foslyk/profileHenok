import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Box,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  Container,
  Tooltip,
} from '@mui/material';

import headshot from '../assets/images/henok.jpg';

import bunnyPic from '../assets/images/artscript.png';
import reciMe from '../assets/images/ReciMe.png';
import spotivibe from '../assets/images/SpotiVibe.png';
import minesweeper from "../assets/images/minesweeper.png"

import codepathLogo from '../assets/logos/codepath.png';
import breakthroughLogo from '../assets/logos/breakthroughtech.png';
import forgeLogo from '../assets/logos/forge.png';
import studyAwayLogo from '../assets/logos/ait.png';
import azureLogo from '../assets/logos/azure.png';
import awsLogo from '../assets/logos/aws.png';

import ProjectCard from '../layouts/ProjectCard';
import TechSlider from '../layouts/TechSlider'

const certifications = [
  { title: 'CodePath Advanced Algorithms Training', logo: codepathLogo },
  { title: 'Breakthrough Tech AI Foundations', logo: breakthroughLogo },
  { title: 'AWS Cloud (in progress)', logo: awsLogo },
  { title: 'Forge Software Engineering Launch', logo: forgeLogo },
  { title: 'Aquincium Institute of Technology', logo: studyAwayLogo },
  { title: 'Microsoft Azure (in progress)', logo: azureLogo },
];

const courseworkLeft = [
  'Data Structures and Algorithms',
  'Computer Organization',
  'Algorithm Design and Analysis',
  'Programming Languages',
  'Deep Learning',
];

const courseworkRight = [
  'Natural Language Processing',
  'Human-Computer Interaction',
  'Mobile Software Development',
  'Cryptography',
  'UX Design',
];

const projects = [
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
];

const technicalSkills = [
  'Languages: Python, JavaScript, Java, C++, Golang, F#',
  'Web Development: React, Node.js, HTML, CSS, Django, Flask',
  'Software Engineering: Agile, Git, Testing, .NET',
  'Machine Learning & AI: TensorFlow, Scikit-learn, PyTorch, Jupyter Notebook',
  'Databases: MySQL, MongoDB',
  'Cloud & DevOps: AWS, Firebase',
];

const languages = ['Python', 'JavaScript', 'Java', 'C++', 'Golang', 'F#'];
const mlSkills = ['TensorFlow', 'Scikit-learn', 'PyTorch', 'Jupyter Notebook'];

const About = () => {
  return (
    <Container maxWidth={false} sx={{ py: 3 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
        About Me
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center"
        gap={4}
        mb={6}
      >
        <Avatar
          alt="Henok Misgina Fisseha"
          src={headshot}
          sx={{
            width: 300,
            height: 300,
            borderRadius: 3,
            boxShadow: 4,
            border: '3px solid',
            borderColor: 'primary.main',
            flexShrink: 0,
          }}
        />
        <Typography variant="h6" color="textPrimary" sx={{ maxWidth: 600 }}>
          Hi, I'm <strong>Henok Misgina Fisseha</strong>, a Computer Science major at Williams College.
          I’m passionate about building software that makes a positive impact. I enjoy taking on technically challenging projects, collaborating with others, and using technology as a tool for innovation.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6 }} />

      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          Educational Background
        </Typography>

        <Typography variant="h6" gutterBottom>
          Bachelor’s in Computer Science, Williams College (<strong>Expected 2026</strong>)
        </Typography>

        <Typography variant="subtitle1" fontWeight="medium" gutterBottom mt={2}>
          Relevant Coursework:
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box component="ul" sx={{ pl: 3, m: 0 }}>
              {courseworkLeft.map((item, idx) => (
                <Typography
                  component="li"
                  key={idx}
                  variant="body1"
                  sx={{ fontSize: '18px', mb: 1, color: 'text.primary' }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box component="ul" sx={{ pl: 3, m: 0 }}>
              {courseworkRight.map((item, idx) => (
                <Typography
                  component="li"
                  key={idx}
                  variant="body1"
                  sx={{ fontSize: '18px', mb: 1, color: 'text.primary' }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ mb: 6 }} />

      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          Technical Skills
        </Typography>

        <Typography variant="h6" fontWeight="medium" gutterBottom>
          Languages:
        </Typography>
        <TechSlider stack={languages} />

        <Typography variant="h6" fontWeight="medium" gutterBottom mt={3}>
          Machine Learning & AI:
        </Typography>
        <TechSlider stack={mlSkills} />

        <Typography variant="h6" fontWeight="medium" gutterBottom mt={3}>
          Other Skills:
        </Typography>
        <List dense>
          {technicalSkills
            .filter(
              (skill) =>
                !skill.startsWith('Languages') &&
                !skill.startsWith('Machine Learning')
            )
            .map((skill, idx) => (
              <ListItem key={idx}>
                <ListItemText
                  primary={`• ${skill}`}
                  primaryTypographyProps={{ fontSize: '18px' }}
                />
              </ListItem>
            ))}
        </List>
      </Box>

      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          Certifications & Training
        </Typography>
        <Grid container spacing={3}>
          {certifications.map(({ title, logo }, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                sx={{
                  boxShadow: 2,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
                }}
              >
                <Avatar
                  src={logo}
                  alt={title}
                  variant="square"
                  sx={{ width: 50, height: 50, borderRadius: 1 }}
                />
                <Tooltip title={title}>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {title}
                  </Typography>
                </Tooltip>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ mb: 6 }} />

      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          What I'm Passionate About
        </Typography>
        <Stack spacing={2} maxWidth={700}>
          <Typography variant="h6" color="textPrimary">
            My focus lies at the intersection of AI, software engineering, and ethics. Whether I'm working on research, coding tools for others, or contributing to open-source projects, I strive to create solutions that are technically sound, socially responsible, and grounded in empathy.
          </Typography>
          <Typography variant="h6" color="textPrimary">
            Outside of tech, I enjoy playing soccer, watching movies, and diving into books about time management and habit formation. I'm also active in mentoring and teaching, and love sharing what I’ve learned with others in my community.
          </Typography>
        </Stack>
      </Box>

      <Divider sx={{ mb: 6 }} />

      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          My Favorite Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((proj, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Link to="/projects" style={{ textDecoration: 'none' }}>
                <ProjectCard {...proj} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;

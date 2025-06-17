import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import ProjectCard from '../layouts/ProjectCard';
import flaskLogo from '../assets/images/flask.png';
import bunny from '../assets/images/artscript.png';
import ProjectDisplay from "../layouts/ProjectDisplay"

const Projects = () => {
  const allProjects = [
    // Featured Projects
    {
      title: 'ArtScript',
      description: 'ArtScript is a custom-designed programming language that enables users—especially beginners and aspiring artists—to create geometric art using simple, intuitive commands. Built around core concepts such as drawing with a virtual pen, using coordinates, and repeating patterns, ArtScript allows users to generate lines, circles, rectangles, and complex polygons with precision. The language emphasizes accessibility, creativity, and mathematical elegance, making it an engaging educational tool for learning programming fundamentals through visual expression. Inspired by geometric artwork from the Williams College Museum of Art, ArtScript merges computational logic with artistic freedom.',
      image: bunny,
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
      title: 'News Classification Agent',
      description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.',
      image: flaskLogo,
      techStack: ['TECH-STACK-HERE'],
      liveDemoLink: '',
      repoLink: '',
      featured: true,
    },
    {
      title: 'Spotify Project',
      description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.',
      image: flaskLogo,
      techStack: ['Express', 'React', 'Node.js', 'Firebase', 'JavaScript'],
      liveDemoLink: '',
      repoLink: '',
      featured: true,
    },
    {
      title: 'Help Me Study Extension',
      description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.',
      image: flaskLogo,
      techStack: ['TECH-STACK-HERE'],
      liveDemoLink: '',
      repoLink: '',
      featured: true,
    },

    // All Projects
    { title: 'Personal Profile', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Personal Webpage', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'MineSweeper Game', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Shopping List App', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Weather App', description: 'A mobile app demonstrating use of APIs and HTTP requests to fetch and display weather information.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Calendar App', description: 'Focuses on upgrading and modernizing deprecated code for calendar functionalities.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Encrypting S1.0', description: 'A final cryptography project implementing encryption techniques covered in the course.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Encryption Puzzle Solver', description: 'Solved various encryption challenges to deepen understanding of cryptographic techniques.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'YOLO Object Detection', description: 'Deep learning project using YOLO to perform object detection, training and evaluating performance on multiple datasets.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Emotion Detection', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Movie Chatbots', description: 'Built multiple chatbot models using NLP techniques including regex, Naive Bayes, Logistic Regression, word vectors, and transformers.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Bubble Shooter', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Snake Game', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Trie Implementation', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: "Conway's Game of Life", description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Thomas Jefferson School Website', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'ReciMe AI Recipe Assistant', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Weather & News App (Countdown)', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Tic Tac Toe Game (Countdown)', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
    { title: 'Book List (Countdown)', description: 'The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project. The description that describes this project.', image: flaskLogo, techStack: ['TECH-STACK-HERE'], liveDemoLink: '', repoLink: '', featured: false },
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

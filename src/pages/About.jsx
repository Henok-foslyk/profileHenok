import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from '@mui/material';
import headshot from '../assets/images/henok.jpg';

const About = () => {
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
    'News categorization model using linear regression',
    'Causal inference chain graph model',
    'OCR image text search tool using Tesseract and Python',
    'Spotify-based chat web app (React, Express, Firebase)',
    'A domain-specific drawing language integrating Graphviz and a backend interpreter',
  ];

  const technicalSkills = [
    'Languages: Python, JavaScript, Java, C++, Golang, F#',
    'Web Development: React, Node.js, HTML, CSS, Django, Flask',
    'Software Engineering: Agile, Git, Testing, .NET',
    'Machine Learning & AI: TensorFlow, Scikit-learn, PyTorch, Jupyter Notebook',
    'Databases: MySQL, MongoDB',
    'Cloud & DevOps: AWS, Firebase',
  ];

  return (
    <Box p={4}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>

      {/* Side-by-side layout */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center"
        gap={4}
        mb={6}
      >
        {/* Profile Image */}
        <Avatar
          alt="Henok Misgina Fisseha"
          src={headshot}
          sx={{
            width: 300,
            height: 300,
            borderRadius: 2,
            boxShadow: 3,
            flexShrink: 0,
          }}
        />

        {/* Intro Paragraph */}
        <Typography variant="h6" color="textPrimary">
          Hi, I'm <strong>Henok Misgina Fisseha</strong>, a Computer Science major at Williams College (
          <strong>Expected 2026</strong>). I’m passionate about building software that makes a positive and ethical impact—especially in the realm of AI. I enjoy taking on technically challenging projects, collaborating with others, and using technology as a tool for community-driven change.
        </Typography>
      </Box>

      {/* Educational Background */}
      <Box mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
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
            <List dense>
              {courseworkLeft.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemText
                    primary={`• ${item}`}
                    primaryTypographyProps={{ fontSize: '18px' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List dense>
              {courseworkRight.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemText
                    primary={`• ${item}`}
                    primaryTypographyProps={{ fontSize: '18px' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* Where I'm From */}
      <Box mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Where I'm From
        </Typography>
        <Typography variant="h6" color="textPrimary">
          I’m originally from <strong>Addis Ababa, Ethiopia 🇪🇹</strong>, where my interest in technology first took root. Growing up in a city rich in culture and complexity, I developed a curiosity for solving real-world problems and a deep appreciation for diverse perspectives—values that continue to shape both my academic and personal journey.
        </Typography>
      </Box>

      {/* What I'm Passionate About */}
      <Box mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          What I'm Passionate About
        </Typography>
        <Stack spacing={2}>
          <Typography variant="h6" color="textPrimary">
            My focus lies at the intersection of AI, software engineering, and ethics. Whether I'm working on research, coding tools for others, or contributing to open-source projects, I strive to create solutions that are technically sound, socially responsible, and grounded in empathy.
          </Typography>
          <Typography variant="h6" color="textPrimary">
            Outside of tech, I enjoy playing soccer, watching movies, and diving into books about time management and habit formation. I'm also active in mentoring and teaching, and love sharing what I’ve learned with others in my community.
          </Typography>
        </Stack>
      </Box>

      {/* Projects */}
      <Box mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Projects I'm Proud Of
        </Typography>
        <List dense>
          {projects.map((proj, idx) => (
            <ListItem key={idx}>
              <ListItemText
                primary={`• ${proj}`}
                primaryTypographyProps={{ fontSize: '18px' }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Technical Skills */}
      <Box>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Technical Skills
        </Typography>
        <List dense>
          {technicalSkills.map((skill, idx) => (
            <ListItem key={idx}>
              <ListItemText
                primary={`• ${skill}`}
                primaryTypographyProps={{ fontSize: '18px' }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default About;

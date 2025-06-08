import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const About = () => {
  return (
    <Box p={4}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>

      {/* Introduction */}
      <Typography variant="body1" color="texty" paragraph>
        Hi, I'm <strong>Henok Misgina Fisseha</strong>, a Computer Science major at Williams College (
        <strong>Expected 2026</strong>). I’m passionate about building software that makes a positive and ethical impact—especially in the realm of AI. I enjoy taking on technically challenging projects, collaborating with others, and using technology as a tool for community-driven change.
      </Typography>

      {/* Educational Background */}
      <Box mb={4}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Educational Background
        </Typography>

        <Typography variant="body1" gutterBottom>
          Bachelor’s in Computer Science, Williams College (
          <strong>Expected 2026</strong>)
        </Typography>

        <Typography variant="subtitle1" fontWeight="medium" gutterBottom mt={2}>
          Relevant Coursework:
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem><ListItemText primary="• Data Structures and Algorithms" /></ListItem>
              <ListItem><ListItemText primary="• Computer Organization" /></ListItem>
              <ListItem><ListItemText primary="• Algorithm Design and Analysis" /></ListItem>
              <ListItem><ListItemText primary="• Programming Languages" /></ListItem>
              <ListItem><ListItemText primary="• Deep Learning" /></ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem><ListItemText primary="• Natural Language Processing" /></ListItem>
              <ListItem><ListItemText primary="• Human-Computer Interaction" /></ListItem>
              <ListItem><ListItemText primary="• Mobile Software Development" /></ListItem>
              <ListItem><ListItemText primary="• Cryptography" /></ListItem>
              <ListItem><ListItemText primary="• UX Design" /></ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* Where I'm From */}
      <Box mb={4}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Where I'm From
        </Typography>
        <Typography variant="body1" color="textPrimary">
          I’m originally from <strong>Addis Ababa, Ethiopia 🇪🇹</strong>, where my interest in technology first took root. Growing up in a city rich in culture and complexity, I developed a curiosity for solving real-world problems and a deep appreciation for diverse perspectives—values that continue to shape both my academic and personal journey.
        </Typography>
      </Box>

      {/* What I'm Passionate About */}
      <Box mb={4}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          What I'm Passionate About
        </Typography>
        <Stack spacing={2}>
          <Typography variant="body1" color="textPrimary">
            My focus lies at the intersection of AI, software engineering, and ethics. Whether I'm working on research, coding tools for others, or contributing to open-source projects, I strive to create solutions that are technically sound, socially responsible, and grounded in empathy.
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Outside of tech, I enjoy playing soccer, watching movies, and diving into books about time management and habit formation. I'm also active in mentoring and teaching, and love sharing what I’ve learned with others in my community.
          </Typography>
        </Stack>
      </Box>

      {/* Projects */}
      <Box mb={4}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Projects I'm Proud Of
        </Typography>
        <List dense>
          <ListItem><ListItemText primary="• News categorization model using linear regression" /></ListItem>
          <ListItem><ListItemText primary="• Causal inference chain graph model" /></ListItem>
          <ListItem><ListItemText primary="• OCR image text search tool using Tesseract and Python" /></ListItem>
          <ListItem><ListItemText primary="• Spotify-based chat web app (React, Express, Firebase)" /></ListItem>
          <ListItem><ListItemText primary="• A domain-specific drawing language integrating Graphviz and a backend interpreter" /></ListItem>
        </List>
      </Box>

      {/* Technical Skills */}
      <Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Technical Skills
        </Typography>
        <List dense>
          <ListItem><ListItemText primary="• Languages: Python, JavaScript, Java, C++, Golang, F#" /></ListItem>
          <ListItem><ListItemText primary="• Web Development: React, Node.js, HTML, CSS, Django, Flask" /></ListItem>
          <ListItem><ListItemText primary="• Software Engineering: Agile, Git, Testing, .NET" /></ListItem>
          <ListItem><ListItemText primary="• Machine Learning & AI: TensorFlow, Scikit-learn, PyTorch, Jupyter Notebook" /></ListItem>
          <ListItem><ListItemText primary="• Databases: MySQL, MongoDB" /></ListItem>
          <ListItem><ListItemText primary="• Cloud & DevOps: AWS, Firebase" /></ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default About;

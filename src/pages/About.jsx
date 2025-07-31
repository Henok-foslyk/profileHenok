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
  Divider,
  Container,
  Chip,
  Tooltip,
} from '@mui/material';
import headshot from '../assets/images/henok.jpg';

// Example logos (replace with actual imports or URLs)
import codepathLogo from '../assets/logos/codepath.png';
import breakthroughLogo from '../assets/logos/breakthroughtech.png';
import forgeLogo from '../assets/logos/forge.png';
import studyAwayLogo from '../assets/logos/ait.png';
import azureLogo from '../assets/logos/azure.png';
import awsLogo from '../assets/logos/aws.png';

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


const About = () => {
  // same coursework, projects, skills from your original code...

  return (
    <Container maxWidth={false} sx={{ py: 3 }}>
      {/* Header */}
      <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
        About Me
      </Typography>

      {/* Profile + Intro */}
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
          Hi, I'm <strong>Henok Misgina Fisseha</strong>, a Computer Science major at Williams College (
          <strong>Expected 2026</strong>). I’m passionate about building software that makes a positive impact. I enjoy taking on technically challenging projects, collaborating with others, and using technology as a tool for innovation.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* Educational Background */}
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

      {/* Certifications & Training */}
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

      {/* Where I'm From */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          Where I'm From
        </Typography>
        <Typography variant="h6" color="textPrimary" sx={{ maxWidth: 700 }}>
          I’m originally from <strong>Addis Ababa, Ethiopia 🇪🇹</strong>, where my interest in technology first took root. Growing up in a city rich in culture and complexity, I developed a curiosity for solving real-world problems and a deep appreciation for diverse perspectives—values that continue to shape both my academic and personal journey.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* What I'm Passionate About */}
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

      {/* Projects */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
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
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
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
    </Container>
  );
};

export default About;

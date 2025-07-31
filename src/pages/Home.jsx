import React from 'react';
import { Typography, Grid } from '@mui/material';
import PageCard from '../layouts/PageCard'; // Adjust the import path as needed
import campus from '../assets/images/williamsCampus.png';
import henok from '../assets/images/henok.jpg';
import projects from '../assets/images/projects.png';
import contact from '../assets/images/contact.png';
import experience from '../assets/images/experience.jpg';

const Home = () => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        👋 Hello and Welcome!
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        I'm a Software Engineer and a student at Williams College.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <PageCard
            title="About Me"
            description="Learn more about my education background, interests, and experiences."
            image={henok}
            linkTo="/about"
            width={400}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <PageCard
            title="Projects"
            description="Explore my software development projects and contributions."
            image={projects}
            linkTo="/projects"
            width={400}
            height={457}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <PageCard
            title="Experiences"
            description="Find out about my work experiences and internships."
            image={experience}
            linkTo="/experiences"
            width={345}
            height={390}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <PageCard
            title="On Campus"
            description="Learn about my on-campus activities and involvement at Williams College."
            image={campus}
            linkTo="/oncampus"
            width={345}
            height={390}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <PageCard
            title="Contact Me"
            description="Get in touch with me for collaborations or inquiries."
            image={contact}
            linkTo="/contact"
            width={320}
            height={390}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;

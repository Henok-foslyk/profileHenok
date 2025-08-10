import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import PageCard from '../layouts/PageCard'; // Adjust the import path
import campus from '../assets/images/williamsCampus.png';
import henok from '../assets/images/henok.jpg';
import projects from '../assets/images/projects.png';
import contact from '../assets/images/contact.png';
import experience from '../assets/images/experience.jpg';

const Home = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            pt: 0,
            pb: 4,
            px: { xs: 2, sm: 4 },
            flexGrow: 1,
            overflowX: 'hidden',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ mt: 0 }}>
            👋 Hello and Welcome!
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            I'm a Software Engineer and a student at Williams College.
          </Typography>

          <Grid container spacing={4} justifyContent="center" sx={{ overflowX: 'hidden' }}>
            {/* First row: two big cards */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PageCard
                title="About Me"
                description="Learn more about my education background, interests, and experiences."
                image={henok}
                linkTo="/about"
                width={400}
                height={457}
              />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PageCard
                title="Experiences"
                description="Find out about my work experiences and internships."
                image={experience}
                linkTo="/experiences"
                width={400}
                height={457}
              />
            </Grid>

            {/* Second row: three smaller cards */}
            <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PageCard
                title="Projects"
                description="Explore my software development projects and contributions."
                image={projects}
                linkTo="/projects"
                width={345}
                height={390}
              />
            </Grid>

            <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PageCard
                title="On Campus"
                description="Learn about my on-campus activities and involvement at Williams College."
                image={campus}
                linkTo="/oncampus"
                width={345}
                height={390}
              />
            </Grid>

            <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
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
        </Container>
      </Container>
    </>
  );
};

export default Home;

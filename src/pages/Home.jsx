import { Link } from 'react-router-dom';
import { Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import campus from '../assets/images/williamsCampus.png'
import henok from '../assets/images/henok.jpg'
import projects from '../assets/images/projects.png'
import contact from '../assets/images/contact.png'
import experience from '../assets/images/experience.png'
const cards = [
  {
    title: 'About Me',
    description: 'Learn more about my education background, interests, and experiences.',
    image: henok,
    link: '/about',
  },
  {
    title: 'Projects',
    description: 'Explore my software development projects and contributions.',
    image: projects,
    link: '/projects',
  },
  {
    title: 'Experiences',
    description: 'Find out about my work experiences and internships.',
    image: experience,
    link: '/experiences',
  },
  {
    title: 'On Campus',
    description: 'Learn about my on-campus activities and involvement at Williams College.',
    image: campus,
    link: '/oncampus',
  },
  {
    title: 'Contact Me',
    description: 'Get in touch with me for collaborations or inquiries.',
    image: contact,
    link: '/contact',
  },
];

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
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minHeight: 360, display: 'flex', flexDirection: 'column' }}>
              <CardActionArea component={Link} to={card.link} sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  height="290" // increased height
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Home;

import { Link } from 'react-router-dom';
import { Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

const cards = [
  {
    title: 'About Me',
    description: 'Learn more about my education background, interests, and experiences.',
    image: '/images/about.jpg', // Replace with your actual image path
    link: '/about',
  },
  {
    title: 'Projects',
    description: 'Explore my software development projects and contributions.',
    image: '/images/projects.jpg',
    link: '/projects',
  },
  {
    title: 'Experiences',
    description: 'Find out about my work experiences and internships.',
    image: '/images/experiences.jpg',
    link: '/experiences',
  },
  {
    title: 'On Campus',
    description: 'Learn about my on-campus activities and involvement at Williams College.',
    image: '/images/oncampus.jpg',
    link: '/oncampus',
  },
  {
    title: 'Contact',
    description: 'Get in touch with me for collaborations or inquiries.',
    image: '/images/contact.jpg',
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
            <Card>
              <CardActionArea component={Link} to={card.link}>
                <CardMedia
                  component="img"
                  height="180"
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

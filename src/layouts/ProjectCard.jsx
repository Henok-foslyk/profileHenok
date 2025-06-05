import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  techStack = [], 
  liveDemoLink, 
  repoLink 
}) => {
  return (
    <Card
      sx={{
        width: 320,
        height: 480, // fixed height for equal cards
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        borderRadius: 2,
        mb: 2,
        '&:hover': { boxShadow: 6 },
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={`${title} screenshot`}
          sx={{ objectFit: 'cover' }}
        />
      )}

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flexGrow: 1, // take remaining space so buttons stay at bottom
          }}
        >
          {description}
        </Typography>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {techStack.map((tech, idx) => (
              <Box
                key={idx}
                component="span"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: '0.75rem',
                  fontWeight: 'medium',
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        )}

        {/* Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {liveDemoLink && (
            <Button
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="small"
              color="primary"
            >
              Live Demo
            </Button>
          )}

          {repoLink && (
            <Button
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              color="primary"
            >
              GitHub Repo
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

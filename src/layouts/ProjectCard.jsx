import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import TechSlider from './TechSlider';
import { keyframes } from '@emotion/react';

const slideY = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-20%);
  }
`;

const ProjectCard = ({
  title,
  description,
  image,
  techStack = [],
  liveDemoLink,
  repoLink,
  animateImage = true,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        width: 320,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        borderRadius: 2,
        mb: 2,
        bgcolor: isDarkMode ? 'grey.900' : '#fff',
        '&:hover': { boxShadow: 6 },
      }}
    >
      {image && (
        <CardMedia
          component="div"
          sx={{
            height: 300,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src={image}
            alt={`${title} screenshot`}
            sx={{
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              ...(animateImage && {
                animation: `${slideY} 10s ease-in-out infinite alternate`,
              }),
            }}
          />
        </CardMedia>
      )}

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', mb: 1 }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flexGrow: 1,
          }}
        >
          {description}
        </Typography>

        <TechSlider stack={techStack} />

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          {liveDemoLink && (
            <Button
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="small"
              sx={{
                bgcolor: isDarkMode ? 'primary.light' : 'primary.main',
                color: isDarkMode ? 'grey.900' : '#fff',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: isDarkMode ? 'primary.main' : 'primary.dark',
                },
              }}
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
              sx={{
                borderColor: isDarkMode ? 'primary.light' : 'primary.main',
                color: isDarkMode ? 'primary.light' : 'primary.main',
                fontWeight: 600,
                '&:hover': {
                  borderColor: isDarkMode ? 'primary.main' : 'primary.dark',
                  backgroundColor: isDarkMode ? 'grey.800' : 'grey.100',
                },
              }}
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

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Stack,
  Chip,
  Box
} from '@mui/material';

const ProjectDisplay = ({ open, onClose, project }) => {
  if (!project) return null;

  const { title, description, image, techStack, liveDemoLink, repoLink } = project;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: '100%', maxHeight: 400, objectFit: 'contain', mb: 2 }}
        />
        <Typography variant="body1" paragraph>
          {description}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Tech Stack:
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {techStack.map((tech, idx) => (
            <Chip key={idx} label={tech} color="primary" variant="outlined" />
          ))}
        </Stack>
      </DialogContent>

      <DialogActions>
        {liveDemoLink && (
          <Button href={liveDemoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </Button>
        )}
        {repoLink && (
          <Button href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
        )}
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDisplay;

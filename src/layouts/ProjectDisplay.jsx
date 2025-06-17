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
  Box,
  Grid
} from '@mui/material';

const ProjectDisplay = ({ open, onClose, project }) => {
  if (!project) return null;

  const { title, description, image, techStack, liveDemoLink, repoLink, skills } = project;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        {/* Top Half: Image and Skills side by side */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{ width: '100%', maxHeight: 400, objectFit: 'contain' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Skills Learned:
            </Typography>
            <Stack spacing={1}>
              {skills?.map((skill, idx) => (
                <Typography key={idx} variant="body2">
                  • {skill}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Half: Description */}
        <Typography variant="body1" paragraph>
          {description}
        </Typography>

        {/* Tech Stack */}
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

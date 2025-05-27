import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';

const ExperienceCard = ({ title, company, logo, duration, place, responsibilities }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        borderRadius: 2,
        mb: 3,
        '&:hover': { boxShadow: 6 },
      }}
    >
      {/* Header: Logo, Job Title, Company Name, Duration & Place */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          {logo && (
            <CardMedia
              component="img"
              sx={{ width: 50, height: 50, objectFit: 'contain', mr: 2 }}
              image={logo}
              alt={`${company} logo`}
            />
          )}
          {/* Job Title and Company */}
          <div>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {company}
            </Typography>
          </div>
        </div>
        {/* Duration and Place */}
        <Typography variant="body2" color="text.secondary">
          {duration} • {place}
        </Typography>
      </CardContent>

      {/* Responsibilities */}
      <CardContent sx={{ pt: 0, pb: 2 }}>
        <Grid container direction="column" spacing={1}>
          <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
            {responsibilities.map((responsibility, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                <Typography variant="body2" component="span" color="text.primary">
                  {responsibility}
                </Typography>
              </li>
            ))}
          </ul>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;

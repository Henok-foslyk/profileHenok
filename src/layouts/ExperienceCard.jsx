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
      {/* Header: Title, Logo, Duration & Place */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          {/* Company Logo underneath the title */}
          {logo && (
            <CardMedia
              component="img"
              sx={{ width: 100, height: 100, objectFit: 'contain', mt: -3 }}
              image={logo}
              alt={`${company} logo`}
            />
          )}
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
            {responsibilities.map((responsibility, index) => {
              if (typeof responsibility === 'string') {
                return (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                    <Typography variant="body2" component="span" color="text.primary">
                      {responsibility}
                    </Typography>
                  </li>
                );
              } else if (typeof responsibility === 'object' && responsibility.text) {
                return (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                    <Typography variant="body2" component="span" color="text.primary">
                      {responsibility.text}
                    </Typography>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.3rem' }}>
                      {responsibility.subpoints.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Typography variant="body2" component="span" color="text.primary">
                            {sub}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;

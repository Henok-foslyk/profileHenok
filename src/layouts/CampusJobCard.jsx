import React from 'react';
import { Card, Typography, CardMedia, Box } from '@mui/material';

const CampusJobCard = ({ department, title, logo, description, achievements = [] }) => {
  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        mb: 2,
        '&:hover': { boxShadow: 6 },
        p: 2,
      }}
    >
      {/* Top Row: Logo + Department/Title */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        {logo && (
          <CardMedia
            component="img"
            image={logo}
            alt={`${department} logo`}
            sx={{ width: 60, objectFit: 'contain', mr: 2 }}
          />
        )}

        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {department}
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Box>
      </Box>

      {/* Description & Achievements below */}
      <Box>
        <Typography variant="body2" color="text.primary" paragraph>
          {description}
        </Typography>
        <Box component="ul" sx={{ pl: 2, m: 0 }}>
          {achievements.map((item, idx) => (
            <li key={idx}>
              <Typography variant="body2" color="text.primary">
                {item}
              </Typography>
            </li>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default CampusJobCard;

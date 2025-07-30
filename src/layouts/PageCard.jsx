import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const DESCRIPTION_HEIGHT = 140; // approximate height of description area in px

const PageCard = ({
  title,
  subtitle,
  image,
  description,
  linkTo,
  width,
  height,
}) => {
  return (
    <Card
      component={linkTo ? RouterLink : 'div'}
      to={linkTo || undefined}
      sx={{
        width: width || 345,
        height: height || 'auto',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        borderRadius: 2,
        mb: 3,
        cursor: linkTo ? 'pointer' : 'default',
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': {
          boxShadow: 6,
          textDecoration: 'none',
        },
        overflow: 'hidden',
      }}
    >
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={`${title} image`}
          sx={{
            flexGrow: 1,
            objectFit: 'cover',
            width: '100%',
            height: `calc(100% - ${DESCRIPTION_HEIGHT}px)`, // fill leftover height
          }}
        />
      )}

      <CardContent
        sx={{
          height: DESCRIPTION_HEIGHT,
          flexShrink: 0,
          paddingBottom: 2,
          paddingTop: 2,
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            {subtitle}
          </Typography>
        )}
        <Typography variant="body2" color="text.primary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PageCard;

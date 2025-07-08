// components/TechSlider.jsx
import { Box, Stack, Typography, Avatar, useTheme } from '@mui/material';
import techIcons from './TechIcons';
import techs from '../assets/logos/tech.png';

const TechSlider = ({ stack }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        py: 1,
        px: 0.5,
      }}
    >
      <Stack direction="row" spacing={2}>
        {stack.map((tech, index) => {
          const key = tech.toLowerCase().replace(/[^a-z0-9]/gi, '');
          const item = techIcons[key];

          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                bgcolor: isDarkMode ? 'grey.800' : '#f5f5f5',
                borderRadius: 2,
                boxShadow: 1,
                minWidth: 'fit-content',
                maxWidth: 300,
              }}
            >
              <Avatar
                src={item?.icon || techs}
                alt={item?.name}
                sx={{ width: 24, height: 24 }}
              />
              <Typography
                variant="body2"
                fontWeight={500}
                color={isDarkMode ? 'grey.100' : 'text.primary'}
              >
                {item?.name || tech}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default TechSlider;

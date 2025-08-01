import { AppBar, Toolbar, Typography, Button, Box, Switch, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const toggleMode = (event) => {
    setIsDarkMode(event.target.checked);
  };

  return (
    <AppBar
      position="static"
      elevation={4}
      sx={{
        background: 'linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)',
        color: '#fff',
        px: 3,
        py: 1,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          minHeight: 80,  // taller navbar
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              letterSpacing: 1.2,
              userSelect: 'none',
              cursor: 'default',
            }}
          >
            Henok's Portfolio
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            alignItems: 'center',
          }}
        >
          {['/', '/about', '/projects', '/experiences', '/oncampus', '/contact'].map((path, i) => {
            const label = path === '/' ? 'Home' :
                          path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
            return (
              <Button
                key={path}
                component={Link}
                to={path}
                color="inherit"
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                  },
                }}
              >
                {label === '' ? 'Home' : label}
              </Button>
            );
          })}

          <FormControlLabel
            control={
              <Switch
                checked={isDarkMode}
                onChange={toggleMode}
                color="secondary"
              />
            }
            label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
            labelPlacement="start"
            sx={{ color: '#fff', userSelect: 'none' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

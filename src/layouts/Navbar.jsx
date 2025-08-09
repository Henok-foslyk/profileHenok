import { AppBar, Toolbar, Typography, Button, Box, Switch, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../assets/logos/logo.png';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const toggleMode = (event) => {
    setIsDarkMode(event.target.checked);
  };

  // Nav links without home ('/')
  const navLinks = ['/about', '/projects', '/experiences', '/oncampus', '/contact'];

  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        background: isDarkMode
          ? 'linear-gradient(45deg, #1b3b2f 30%, #276749 80%)'
          : 'linear-gradient(45deg, #2e6a57 30%, #4a8c6f 80%)',
        color: isDarkMode ? '#33ffa8' : '#1b4332',
        px: 4,
        py: 2,  // taller navbar padding
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          minHeight: 100,  // increased height
        }}
      >
        {/* Logo on the left, clickable */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Link to="/">
            <Box
              component="img"
              src={logo} // replace with your actual logo path
              alt="Henok's Portfolio Logo"
              sx={{ height: 50, cursor: 'pointer' }} // bigger logo height and clickable cursor
            />
          </Link>
        </Box>

        {/* Nav buttons (no Home) + dark mode toggle */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            alignItems: 'center',
          }}
        >
          {navLinks.map((path) => {
            const label = path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
            return (
              <Button
              key={path}
              component={Link}
              to={path}
              color="inherit"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '1.15rem',           // bigger font size
                letterSpacing: '0.05em',       // subtle spacing
                transition: 'background-color 0.3s ease, transform 0.15s ease',
                cursor: 'pointer',             // explicit pointer cursor
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.25)',
                  transform: 'scale(1.05)',   // slight grow effect on hover
                },
              }}
            >
              {label}
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
            sx={{ color: 'inherit', userSelect: 'none' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

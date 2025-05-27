import { AppBar, Toolbar, Typography, Button, Box, Switch, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const toggleMode = (event) => {
    setIsDarkMode(event.target.checked);
  };

  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Henok's Portfolio
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/projects" color="inherit">Projects</Button>
          <Button component={Link} to="/experiences" color="inherit">Experiences</Button>
          <Button component={Link} to="/oncampus" color="inherit">OnCampus</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>

          <FormControlLabel
            control={
              <Switch
                checked={isDarkMode}
                onChange={toggleMode}
                color="primary"
              />
            }
            label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
            labelPlacement="start"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Switch,
  FormControlLabel,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo.png';
import resumePDF from '../assets/resume/Henok_Fisseha_Resume.pdf';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [openResume, setOpenResume] = useState(false);

  const toggleMode = (event) => {
    setIsDarkMode(event.target.checked);
  };

  const navLinks = ['/about', '/projects', '/experiences', '/oncampus', '/contact'];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          background: isDarkMode
            ? 'linear-gradient(45deg, #1b3b2f 30%, #276749 80%)'
            : 'linear-gradient(45deg, #2e6a57 30%, #4a8c6f 80%)',
          color: isDarkMode ? '#33ffa8' : '#1b4332',
          px: 4,
          py: 2,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            minHeight: 100,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Link to="/">
              <Box
                component="img"
                src={logo}
                alt="Henok's Portfolio Logo"
                sx={{ height: 50, cursor: 'pointer' }}
              />
            </Link>
          </Box>

          {/* Centered Nav */}
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
              gap: 1,
              alignItems: 'center',
            }}
          >
            {navLinks.map((path) => {
              const labelMap = {
                '/about': 'About',
                '/projects': 'Projects',
                '/experiences': 'Experiences',
                '/oncampus': 'On Campus',
                '/contact': 'Contact',
              };
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
                    fontSize: '1.15rem',
                    letterSpacing: '0.05em',
                    transition: 'background-color 0.3s ease, transform 0.15s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  {labelMap[path] || path}
                </Button>
              );
            })}
          </Box>

          {/* Right buttons */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setOpenResume(true)}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              Preview Resume
            </Button>

            <Button
              variant="contained"
              color="secondary"
              href={resumePDF}
              download
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              Download Resume
            </Button>

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

      {/* Minimal Resume Dialog */}
      <Dialog
        open={openResume}
        onClose={() => setOpenResume(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: 1,
          }}
        >
          Resume Preview
          <IconButton onClick={() => setOpenResume(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ height: '80vh', p: 0 }}>
          <embed
            src={resumePDF}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;

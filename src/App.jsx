import { Outlet } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...(isDarkMode
        ? {
            background: {
              default: '#24272e',    // --bg-color dark
              paper: '#2f323a',
            },
            text: {
              primary: '#ffffff',    // --text-color dark
            },
            primary: {
              main: '#33ffa8',       // --accent-color dark
            },
          }
        : {
            background: {
              default: '#fdfaf6', // soft cream background
              paper: '#ffffff',   // for cards/containers
            },
            text: {
              primary: '#2b2b2b', // deep gray for readability
              secondary: '#5f6368', // muted gray for less emphasis
            },
            primary: {
              main: '#5fb49c', // a gentle teal accent
            },
            secondary: {
              main: '#ffb26b', // soft orange for highlights
            },
          }),
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <Container
          component="main"
          sx={{
            flex: 1,
            py: 4,
            maxWidth: 'lg',
            mt: '80px',
            // You can add more styling here if you want
          }}
        >
          <Outlet />
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

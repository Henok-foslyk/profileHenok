import { Outlet } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...(isDarkMode
        ? {
            background: {
              default: '#24272e',    // --bg-color dark
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
              default: '#ffffff',    // --bg-color light
            },
            text: {
              primary: '#111111',    // --text-color light
            },
            primary: {
              main: '#29ab87',       // --accent-color light
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

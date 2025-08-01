import React from 'react';
import { Box, Typography, Link, Paper, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Paper
      component="footer"
      elevation={3}
      sx={{
        mt: 'auto',
        backgroundColor: '#2c2c2c',
        color: '#ccc',
        py: 4,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Stack spacing={1} alignItems="center">
        <Typography variant="body2">
          <EmailIcon fontSize="small" sx={{ mr: 1 }} />
          <Link href="mailto:henokmisginafisseha@gmail.com" underline="hover" color="inherit">
            henokmisginafisseha@gmail.com
          </Link>
        </Typography>

        <Typography variant="body2">
          <GitHubIcon fontSize="small" sx={{ mr: 1 }} />
          <Link href="https://github.com/Henok-foslyk" underline="hover" target="_blank" color="inherit">
            github.com/Henok-foslyk
          </Link>
        </Typography>

        <Typography variant="body2">
          <LinkedInIcon fontSize="small" sx={{ mr: 1 }} />
          <Link href="https://linkedin.com/in/henokmisginafisseha" underline="hover" target="_blank" color="inherit">
            linkedin.com/in/henokmisginafisseha
          </Link>
        </Typography>

        <Typography variant="caption" color="gray" mt={2}>
          © {new Date().getFullYear()} Henok Misgina Fisseha. All rights reserved.
        </Typography>
        
      </Stack>
    </Paper>
  );
};

export default Footer;

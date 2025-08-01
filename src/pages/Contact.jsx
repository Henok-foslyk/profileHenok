import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Link,
  Grid,
  Paper,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_service_id
const TEMPLATE_ID = import.meta.env.VITE_template_id
const PUBLIC_KEY = import.meta.env.VITE_public_key

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      //MOVE TO ENV
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setOpen(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <>
      <Paper elevation={3} sx={{ maxHeight: 1000, maxWidth: 1000, margin: '0 auto', p: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Contact Me
        </Typography>

        <Grid container spacing={4} alignItems="center" mb={4}>
          <Grid item xs={12} sm={6}>
            <EmailIcon color="primary" sx={{ verticalAlign: 'middle', mr: 1 }} />
            <Link href="mailto:henokmisginafisseha@gmail.com" underline="hover">
              henokmisginafisseha@gmail.com
            </Link>
          </Grid>

          <Grid item xs={12} sm={6}>
            <GitHubIcon color="action" sx={{ verticalAlign: 'middle', mr: 1 }} />
            <Link href="https://github.com/Henok-foslyk" target="_blank" underline="hover">
              github.com/Henok-foslyk
            </Link>
          </Grid>

          <Grid item xs={12} sm={6}>
            <LinkedInIcon color="primary" sx={{ verticalAlign: 'middle', mr: 1 }} />
            <Link href="https://linkedin.com/in/henokmisginafisseha" target="_blank" underline="hover">
              linkedin.com/in/henokmisginafisseha
            </Link>
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Send me a message:
        </Typography>

        <Box component="form" ref={form} onSubmit={sendEmail} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            required
            margin="normal"
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Send
          </Button>
        </Box>

        <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Message sent successfully!
          </Alert>
        </Snackbar>

        <Snackbar open={error} autoHideDuration={4000} onClose={() => setError(false)}>
          <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
            Failed to send message. Try again later.
          </Alert>
        </Snackbar>
      </Paper>
      <Box sx={{ mt: 4, textAlign: 'center', color: 'text.secondary' }}>
          <Typography variant="h4" fontStyle="italic" color="primary.main">
            Told my computer I needed a break… 
          </Typography>
          <Typography variant="h4" fontStyle="italic" color="primary.main">
            Now it won’t stop sending me Kit-Kat ads. 🍫
          </Typography>
        </Box>
    </>
  );
};

export default Contact;

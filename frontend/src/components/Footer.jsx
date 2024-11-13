import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 2,
        textAlign: 'center',
        mt: 4,
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Event Ticketing. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="/privacy" color="inherit" underline="hover">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link href="/terms" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorMessage }) => {
  return (
    <Container sx={{ padding: 3 }}>
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        <Typography variant="h3" gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          {errorMessage || 'We couldn’t find the page you were looking for.'}
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
};
ErrorPage.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorPage;

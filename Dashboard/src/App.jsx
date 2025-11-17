import React, { useState } from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Welcome } from './Welcome.jsx'; // Named import

export default function App() {
  const [clicks, setClicks] = useState(10);

  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Hello World from a Component!
      </Typography>

      <Welcome name="Bertin" />

      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 3 }}
        onClick={() => setClicks(clicks * 3)}
      >
        Click Me
      </Button>

      <Typography variant="h5" sx={{ mt: 2 }}>
        Button clicked {clicks} times
      </Typography>
    </Container>
  );
}

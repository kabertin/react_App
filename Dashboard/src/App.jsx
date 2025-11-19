import React, { useState } from 'react';
import { Typography, Card, CardContent, CardActions, Stack, Container, Button, Checkbox } from '@mui/material';
import { Welcome } from './Welcome.jsx'; // Named import

export default function App() {
  const [clicks, setClicks] = useState(10);

  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h2">Title</Typography>
          <Typography variant="body1">Description goes here.</Typography>
        </CardContent>
        <CardActions>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
      <Typography variant="h2" color="primary" gutterBottom>
        Hello World from a Component!
      </Typography>
      <Typography variant="h1">This is H1</Typography>
      <Typography variant="h4" color="primary">Primary Heading</Typography>
      <Typography variant="body1">This is normal body text.</Typography>

      <Welcome name="Bertin" />

      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 3 }}
        onClick={() => setClicks(clicks + 3)}
      >
        Click Me
      </Button>
      <Checkbox  defaultChecked size="small" />

      <Typography variant="h5" sx={{ mt: 2 }}>
        Button clicked {clicks} times
      </Typography>
      <Stack spacing={1} direction="row">
        <Button variant="outlined">One</Button>
        <Button variant="contained">Two</Button>
      </Stack>
    </Container>
  );
}

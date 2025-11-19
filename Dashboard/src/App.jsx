import React, { useState } from 'react';
import { Typography, Card, CardContent, CardActions, Stack, Container, Button, Checkbox, Grid } from '@mui/material';
import { Welcome } from './Welcome.jsx'; // Named import

export default function App() {
  const [clicks, setClicks] = useState(10);

  return (
    <Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={4}>Card</Grid>
  <Grid item xs={12} sm={6} md={4}>Card</Grid>
</Grid>

  );
}

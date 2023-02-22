import React from 'react'
import { Button, Grid, TextField } from '@mui/material'

export default function Login() {
 return (
  <Grid
   container
   direction="column"
   alignItems="center"
   justifyContent="center"
   sx={{ p: 5 }}
  >
   <TextField variant="outlined" label="E-mail" fullWidth sx={{ mb: 2 }} />
   <TextField
    variant="outlined"
    label="Password"
    type="password"
    fullWidth
    sx={{ mb: 2 }}
   />
   <Button variant="contained" color="success">
    LOGIN
   </Button>
  </Grid>
 )
}

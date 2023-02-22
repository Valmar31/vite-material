import { Grid, Typography, GlobalStyles } from '@mui/material'
import * as React from 'react'

import Login from './components/login'

export default function MyApp() {
 return (
  <>
   <GlobalStyles styles={{ body: { margin: 0 } }} />
   <Grid
    container
    justifyContent="center"
    alignItems="center"
    direction="column"
    sx={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#dbdbdb' }}
   >
    <Grid item>
     <Typography variant="h5" color="GrayText">
      MUI
     </Typography>
    </Grid>
    <Grid item sx={{ border: '1px solid gray', borderRadius: '4px' }}>
     <Login />
    </Grid>
   </Grid>
  </>
 )
}

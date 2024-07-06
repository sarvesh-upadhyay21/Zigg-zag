import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Navbar from '../component/Navbar';
const Dashboard = () => {
    return (
    <div>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Navbar/>
        <Typography paragraph>
         <h1>Dashboard</h1>
        </Typography>
     
      </Box>
    </div>
  )
}

export default Dashboard
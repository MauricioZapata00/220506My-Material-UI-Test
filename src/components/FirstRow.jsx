import React from 'react'
import { Box, Grid } from '@mui/material';

export const FirstRow = () => {
  return (
    <Box sx={{minWidth:"20%", minHeight:"12%", backgroundColor:"#FC2F03", color:"white", marginTop:9.5}}>
        <Grid sx={{mb:2, marginLeft:1}} container spacing={2}>
            <Grid item>
                Lorem ipsum dolor sit amet con et just e i fiddle    
            </Grid>
            <Grid item>
                Responsive ipsum dolor sit am for dummies. :)  
            </Grid>
        </Grid>
    </Box>
  )
}

export default FirstRow;

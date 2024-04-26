import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SourceIcon from '@mui/icons-material/Source';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import { Avatar, IconButton, Stack } from '@mui/material';
import "./sidebar.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF', 
      },
     
    },
  });



const Sidebar = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Stack className='stackstyle' spacing={2} >
      {/* Logo Avatar at the top */}
      <Avatar sizes='small'>lo</Avatar>

      {/* Middle Icons */}
      <Stack spacing={2} sx={{flexGrow:1}}>
        <IconButton color='primary'><SummarizeIcon /></IconButton>
        <IconButton color='primary'><TextSnippetIcon /></IconButton>
        <IconButton color='primary'><SourceIcon /></IconButton>
        <IconButton color='primary'><StackedBarChartIcon /></IconButton>
      </Stack>

      {/* Last Icon at the bottom */}
      <IconButton sx={{marginBottom:"50px"}} color='primary'>
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </Stack>
    </ThemeProvider>
    </>
  )
}

export default Sidebar
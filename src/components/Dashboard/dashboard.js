import * as React from 'react';
import TableComponent from '../TableComponent';
import { Button, Divider, Grid, IconButton, InputAdornment, MenuItem, Select, Stack, TextField, Typography, useScrollTrigger } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CloseIcon from '@mui/icons-material/Close';
import "./dashboard.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main: '#000000', 
      },
      secondary: {
        main: '#00FF00',
      },
      warning:{
        main:'#b26500',
      }
    },
  });





export default function Dashboard() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [team, setTeam] = React.useState('');

    const handleChangeTeam = (event) => {
        setAge(event.target.value);
    };

    const [filterOpen, setFilterOpen] = React.useState(false);

    const handleFilterChange = () => {
        setFilterOpen(!filterOpen);
    }

    return (
        <ThemeProvider theme={theme}>
        <Grid container sx={{ padding: "20px", backgroundColor: "#f5f5f5", height: "100%" }} xs={12} sm={12} md={12}>
            <Grid item xs={12} sm={12} md={filterOpen ? 9 : 12} sx={{ backgroundColor: "#f5f5f5", }}>
                <Stack direction="row" justifyContent="space-between"  >
                    <Button size={filterOpen ? "small" : "medium"}  variant='outlined'>Paris Olympic 2024-300</Button>
                    <Button size={filterOpen ? "small" : "medium"} className='buttoncolor' variant='outlined'>T20 World Cup 2024-200</Button>
                    <Button size={filterOpen ? "small" : "medium"} className='buttoncolor' variant='outlined'>Manchester United-200</Button>
                    <Button size={filterOpen ? "small" : "medium"} className='buttoncolor' variant='outlined'>Mumbai City FC -220</Button>
                    <Button size={filterOpen ? "small" : "medium"} className='buttoncolor' variant='outlined'>Motorsports -10</Button>
                </Stack>
                <Stack direction="row" justifyContent="space-between" sx={{ marginTop: "20px" }}>
                    <TextField size='small' sx={{ flexGrow: 1, maxWidth: "250px", maxHeight: "30px" }} placeholder='search' label="search" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" >
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}></TextField>
                    <Stack direction="row" spacing={1}>
                        <Button color='warning' startIcon={<AddIcon />} variant='contained'>Add Products</Button>
                        <Button className='filterbutton' onClick={handleFilterChange} startIcon={<FilterListIcon />} variant='outlined'>Filter</Button>
                        <Button className='buttoncolor' startIcon={<ExitToAppIcon />} variant='outlined'>Export</Button>
                    </Stack>
                </Stack>
                <TableComponent></TableComponent>
            </Grid>
            {filterOpen &&

                <Grid item xs={12} sm={12} md={3} sx={{ backgroundColor: "#f5f5f5", paddingLeft: '20px' }}>
                    <Stack sx={{ backgroundColor: "white", padding: "10px", height: "95%" }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography textAlign="left">Filters</Typography>
                            <IconButton sx={{ alignSelf: "right" }} onClick={handleFilterChange}><CloseIcon></CloseIcon></IconButton>
                        </Stack>
                        <Divider></Divider>
                        <Stack spacing={2} sx={{ padding: "10px", flexGrow: 1 }}>
                            <TextField size='small' label="Product Name" placeholder='product name'></TextField>
                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Category"
                                onChange={handleChange}
                                placeholder='category'
                                sx={{ color: "black" }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <TextField size='small' label="Event Name" placeholder='event name'></TextField>
                            <TextField size='small' label="Match Name" placeholder='match name'></TextField>
                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={team}
                                label="Team"
                                onChange={handleChangeTeam}
                                placeholder='team'
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Stack>
                        <Stack spacing={1} sx={{ padding: "10px" }}>
                            <Button color='warning' variant='contained'>Apply</Button>
                            <Button className='buttoncolorreset'>Reset</Button>
                        </Stack>
                    </Stack>

                </Grid>
            }
        </Grid>
    </ThemeProvider>
    );
}
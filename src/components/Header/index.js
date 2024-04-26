import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Button, Stack } from '@mui/material';

function Header() {
    return (
        <AppBar sx={{ backgroundColor: "white" }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, color: "#d78509", textAlign: "left" }}
                    >
                        Products
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <IconButton >
                            <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
                        </IconButton>
                        <Button size='small' variant="contained" sx={{ backgroundColor: "#f5f5f5", color: "black", '&:hover': { backgroundColor: 'transparent' } }} startIcon={<Avatar sx={{ height: "25px", width: "25px" }} alt="MG" />} endIcon={<KeyboardArrowDownIcon color='black' />}>
                            Matthews Gill
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
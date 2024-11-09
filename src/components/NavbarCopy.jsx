import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AppBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import Navbar from './Navbar';


const pages = ['ADD New hotel', 'New Rooms', 'Booking Status', 'Rooms'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavbarCopy = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handlePageNavigation = (page) => {
        if (page === 'ADD New hotel') {
            navigate('/AddHotel');
        } else if (page === 'Booking Status') {
            navigate('/BookList');
        } else if (page === 'New Rooms') {
            navigate('/AddRoom');
        } 
        
        else if (page === 'Rooms') {
            navigate('/RoomList');
        }
    };

    return (
        <div>
        <Navbar/>
        <div style={{ display:'flex'}}>
         
            <AppBar position="absolute" sx={{ backgroundColor: '#156C63', width: '150px', top:'72px', right:'1455px', height: '140vh', display: 'flex', flexDirection:'column' }}>
                <Container>
                    <Box sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
                        <AdbIcon sx={{ display: 'flex', mr: 1 }} />
                        <Typography variant="h6" noWrap component="a" sx={{ fontFamily: 'monospace', fontWeight: 1000, letterSpacing: '.500rem', color: 'inherit', textDecoration: 'none' }}>
                            
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handlePageNavigation(page)}
                                sx={{ my: 1, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, padding: 1 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        {/* User Menu */}
                        {/* <Box sx={{ mt: '45px' }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Box> */}
                    </Box>
                </Container>
            </AppBar>
            <Box component="main" sx={{ flexGrow: 1, padding: 0, marginRight: '200px' }}>
                {/* Main Content Area */}
            </Box>
        </div>
        </div>
    );
};

export default NavbarCopy;


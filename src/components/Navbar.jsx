import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from './newpic.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { IoMdHome } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { LiaSignInAltSolid } from "react-icons/lia";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    // Menu items for navigation
    const menuItems = [
        { text: 'Home', icon: <IoMdHome />, path: '/' },
        { text: 'Book Room', icon: <TbBrandBooking />, path: '/view' },
        { text: 'Sign', icon: <LiaSignInAltSolid />, path:'/plug' },
        { text: 'Admin', icon: <MdAdminPanelSettings />, path:'/loop' },
        { text: 'User Review', icon: <MdAdminPanelSettings />, path:'/review' },
        { text: 'Contact', icon: <LiaSignInAltSolid />, path:'/contact' },

    ];

    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.text} component={Link} to={item.path}>
                        {item.icon}
                        <ListItemText primary={item.text} sx={{ marginLeft: 3 }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor:'rgba(0,0,0)' }}>
                <Toolbar>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                            Hotel Booking
                        </Typography>
                    </Link>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {menuItems.map((item) => (
                            <Link to={item.path} key={item.text} style={{ textDecoration: 'none' }}>
                                <Button style={{ color: 'white', marginLeft: '110px', display: 'flex', alignItems: 'center' }}>
                                    {item.icon}
                                    <span style={{ marginLeft: '8px' }}>{item.text}</span>
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Navbar;
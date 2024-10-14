import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

function Navbar() {

    const [open, setOpen] = useState(false)

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });

    const Search = styled('div')(({theme}) => { return { 
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%"
    } } );
    //const Search = styled('div')(({th}) => ( { backgroundColor: "white" } ) );

    const Icons = styled(Box)( ({theme}) => ({
        display: "none",
        gap:"20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display:'flex'
        }
    }) );

    const UserBox = styled(Box)(({theme}) => ({
        display: 'flex',
        gap:"10px",
        alignItems: 'center',
    }))

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography 
                    variant='h6' 
                    sx={{display:{xs:"none", sm:"block"}}}
                >
                    DOTDEV
                </Typography>
                <Pets sx={{display:{xs:"block", sm:"none"}}}/>  
                <Search>
                    <InputBase placeholder='search' sx={{ input: { color: 'grey' } }}/>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color='error'>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={3} color='error'>
                        <Notifications/>
                    </Badge>
                    <Avatar 
                        src='/3.jpg' 
                        sx={{width: 30, height: 30}}
                        onClick={e => setOpen(true)}
                    />                    
                </Icons>
                <UserBox 
                    onClick={e => setOpen(true)}
                    sx={{display:{xs:"flex", sm:"none"}}}
                >
                    <Avatar 
                        src='/3.jpg' 
                        sx={{width: 30, height: 30}}
                    />
                    <Typography variant='span'>John</Typography>                
                </UserBox>              
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar
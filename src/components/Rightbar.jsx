import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { itemData } from '../itemData'

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
        <Box position="fixed">
            <Typography variant='h6' fontWeight={100}>
                Online Friends
            </Typography>
            <AvatarGroup max={6} sx={{justifyContent: 'center'}}>
                <Avatar alt="Remy Sharp" src="1.jpg" />
                <Avatar alt="Travis Howard" src="2.jpg" />
                <Avatar alt="Cindy Baker" src="3.jpg" />
                <Avatar alt="Agnes Walker" src="4.jpg" />
                <Avatar alt="Trevor Henderson" src="5.jpg" />
                <Avatar alt="Michael Hansen" src="6.jpg" />
                <Avatar alt="Tom Carret" src="7.jpg" />
            </AvatarGroup>
            <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
                Latest Photos                    
            </Typography>
            <ImageList sx={{ height: 300 }} cols={3} rowHeight={100}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    srcSet={`${item.img}?w=80&h=80&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=80&h=80&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
            <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
                Latest Conversations
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                            Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                            to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                            Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>
        </Box>
    </Box>
  )
}

export default Rightbar
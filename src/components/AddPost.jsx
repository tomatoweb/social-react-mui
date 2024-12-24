import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const AddPost = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip
                onClick={e => setOpen(true)}
                title="Add a post"
                sx={{ 
                    position:"fixed",
                    bottom: 20,
                    left: {xs: "calc(50% - 30px)", sm: 50}
                }}
            >
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                >
                <Box
                    bgcolor="background.default"
                    color="text.primary"
                    width={400}
                    height={280}
                    borderRadius={3}
                    padding={4}
                >
                    <Typography variant='h6' color="grey" textAlign="center">
                        Add a new Post
                    </Typography>
                    <UserBox>
                        <Avatar src="/1.jpg" sx={{ width:"30px", height:"30px"}}/>
                        <Typography variant='span'>
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{width: "100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary'/>
                        <Image color='secondary'/>
                        <VideoCameraBack color='success'/>
                        <PersonAdd color='error'/>
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                        <Button>Post</Button>
                        <Button sx={{width: "100px"}}>
                            <DateRange/>
                        </Button>
                    </ButtonGroup>
                </Box>
                </StyledModal>
        </>
    )
}

export default AddPost
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { useState } from "react";


function App() {

    const [mode, setMode] = useState("dark")

    const theme = createTheme({
        palette: {
            mode: mode
        }
    })
    
    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor="background.default" color="text.primary">
                <Navbar/>
                <Stack 
                    direction={"row"} 
                    spacing={2} 
                    justifyContent="space-between"
                >
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed/>
                    <Rightbar/>        
                </Stack>
                <AddPost></AddPost>
            </Box>
        </ThemeProvider>
    );
}

export default App;

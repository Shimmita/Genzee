import { Box, Stack } from "@mui/material";
import Feed from "./components/feed/Feed";
import Navbar from "./components/navbar/Navbar";
import Righbar from "./components/rightbar/Righbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Box>
     <Navbar/>
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}> 
        <Sidebar />
        <Feed />
        <Righbar />
      </Stack>
    </Box>
  );
}

export default App;

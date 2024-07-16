import { Box, Stack } from "@mui/material";
import Feed from "./components/feed/Feed";
import Navbar from "./components/navbar/Navbar";
import Righbar from "./components/rightbar/Righbar";
import Sidebar from "./components/sidebar/Sidebar";
import BottomNav from "./components/custom/BottomNav";

function App() {
  return (
    <Box>
      <Stack direction={"column"}>
        {/* nav+content */}
        <Stack direction={"column"} flex={3}>
          <Navbar />
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Sidebar />
            <Feed />
            <Righbar />
          </Stack>
        </Stack>
       <hr/>
        {/* bottom nav */}
        <Box flex={1}>
          <BottomNav />
        </Box>
      </Stack>
    </Box>
  );
}

export default App;

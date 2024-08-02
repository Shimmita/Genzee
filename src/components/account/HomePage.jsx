import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Feed from "../feed/Feed";
import Navbar from "../navbar/Navbar";
import Righbar from "../rightbar/Righbar";
import Sidebar from "../sidebar/Sidebar";
import BottomNav from "../custom/BottomNav";
import { useState } from "react";

function Homepage() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Stack direction={"column"}>
          {/* nav+content */}
          <Stack direction={"column"} flex={3}>
            <Navbar setMode={setMode} mode={mode} />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Sidebar setMode={setMode} mode={mode} />
              <Feed />

              <Righbar />
            </Stack>
          </Stack>

          {/* <hr />
          <hr /> */}
          
          {/* bottom nav */}
          <Box flex={1}>
            <BottomNav />
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default Homepage;

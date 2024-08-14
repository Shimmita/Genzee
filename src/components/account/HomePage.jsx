import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Feed from "../feed/Feed";
import Navbar from "../navbar/Navbar";
import Righbar from "../rightbar/Righbar";
import Sidebar from "../sidebar/Sidebar";
import BottomNav from "../custom/BottomNav";
import { useState } from "react";
import useScrolledDown from "../hooks/useScrolledDown";
import { useSelector } from "react-redux";

function Homepage() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // run the listening component hook
  useScrolledDown();
  // check scrolling behavior by tracking from redux state
  const { isScrolledDown } = useSelector((state) => state.appUI);
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

          {/* if scrolled down dont show bottom nav */}
          {!isScrolledDown && (
            <Box flex={1}>
              <BottomNav />
            </Box>
          )}
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default Homepage;

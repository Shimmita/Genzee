import { Box } from "@mui/material";
import React from "react";

const Righbar = () => {
  return (
    <Box  className='shadow' flex={2} p={2} sx={{ display: { xs: "none", sm: "none", md:'block'} }}>
      <Box position={"fixed"}>rightbar</Box>
    </Box>
  );
};

export default Righbar;

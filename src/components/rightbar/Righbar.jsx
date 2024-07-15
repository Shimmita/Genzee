import { Box } from "@mui/material";
import React from "react";

const Righbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      className='shadow '
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={'fixed'}>
        
        Righbar
        
        </Box>
    </Box>
  );
};

export default Righbar;

import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
export default function BottomMessage() {
  return (
    <Box   sx={{ display: "flex", justifyContent: "center" }} bgcolor={"background.default"}
    color={"text.primary"}>

      <Typography variant={"caption"} className="w-100 fw-light text-center">
        Viral Content Page
      </Typography>
    </Box>
  );
}

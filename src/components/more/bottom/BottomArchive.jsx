import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export default function BottomArchive() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} bgcolor={"background.default"}
    color={"text.primary"}>
      <Typography variant={"caption"} className="w-100 fw-light text-center">
        Archive Content Page
      </Typography>
    </Box>
  );
}

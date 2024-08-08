import { RefreshOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const RefreshBox = () => {
  return (
    <Box m={1}>
      <Button
        sx={{ rotate: "270deg" }}
        size="small"
        variant="contained"
        endIcon={<RefreshOutlined />}
      >
        <Typography
          sx={{ textTransform: "capitalize" }}
          className="w-100 text-center "
          variant="body2"
        >
          Latest
        </Typography>
      </Button>
    </Box>
  );
};

export default RefreshBox;

import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";

function StreamingSettings() {
  return (
    <Box p={2}>
      <Box>
        <Typography className="text-center mb-2" variant="body1">
          Video PlayBack Settings
        </Typography>

        <Divider variant="fullWidth" component={"div"} />
        <FormGroup className="mt-2">
          <FormControlLabel
            control={<Checkbox checked />}
            label={"Auto-play video"}
          />
        </FormGroup>
      </Box>
    </Box>
  );
}

export default StreamingSettings;

import React from "react";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { resetAll } from "../../../redux/AppUI";

export default function HelpAssistanceEmail() {
  const dispatch = useDispatch();

  const handleReturnHome = (event) => {
    // reset everything and default values
    dispatch(resetAll());
  };

  return (
    <Box>
      <div className="d-flex justify-align-content-between w-100 align-items-center border-bottom">
        {/* title */}
        <Typography variant={"caption"} className="w-100 fw-light text-center">
          Help Center Assistance Email
        </Typography>
        {/* close the window */}
        <IconButton onClick={handleReturnHome}>
          <Close color="primary" sx={{ width: 15, height: 15 }} />
        </IconButton>
      </div>

      <div>
        <p>send email</p>
      </div>
    </Box>
  );
}

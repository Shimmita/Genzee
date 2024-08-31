import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import PremiumData from "../../../data/PremiumData";

function PremiumFree() {
  return (
    <Box mt={2}>
      <ol>
        {PremiumData &&
          PremiumData.Free.map((data, index) => (
            <Box key={index}>
              <Box m={2}>
                <Typography gutterBottom component={"li"} variant="body2">
                  {data}
                </Typography>
              </Box>
              <Divider component={"div"} variant="fullWidth" />
            </Box>
          ))}
      </ol>
    </Box>
  );
}

export default PremiumFree;

import { Box, Divider, Typography, Button } from "@mui/material";
import React from "react";
import PremiumData from "../../../data/PremiumData";

function PremiumSilver() {
  return (
    <Box mt={2}>
      {PremiumData &&
        PremiumData.Silver.map((data, index) => (
          <Box key={index}>
            <Box m={2}>
              <Typography gutterBottom component={"li"} variant="body2">
                {data}
              </Typography>
            </Box>
            <Divider component={"div"} variant="fullWidth" />
          </Box>
        ))}
      <Box>
        <Button sx={{ borderRadius:1 }} className="w-100" size="small" variant="contained"> Subscribe @Ksh.100 monthly</Button>
      </Box>
    </Box>
  );
}

export default PremiumSilver;

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { IconButton } from "@mui/material";
import { Info } from "@mui/icons-material";
import DrawerAccountInfo from "./AccountInfoDrawer";

const steps = ["Medal", "Silver", "Gold"];

export default function AccountLevelStep() {
  const [showLevelInfo, setShowLevelInfo] = React.useState(false);

  return (
    <Box className='mt-2' sx={{ width: "100%" }}>
      <Stepper  activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
        <IconButton onClick={(e) => setShowLevelInfo(true)}>
          <Info />
        </IconButton>
      </Stepper>
      {/* a drawer with details when the info icon is clicked  */}
      {setShowLevelInfo && (
        <DrawerAccountInfo
          showLevelInfo={showLevelInfo}
          setShowLevelInfo={setShowLevelInfo}
        />
      )}
    </Box>
  );
}

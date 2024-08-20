import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { IconButton } from "@mui/material";
import { Info } from "@mui/icons-material";
import DrawerAccountInfo from "./AccountInfoDrawer";

const steps = ["Silver", "Gold"];

export default function AccountLevelStep() {
  const [showLevelInfo, setShowLevelInfo] = React.useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={0}>
        {steps.map((label) => (
          <Step className="p-2" key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
        <IconButton onClick={(e) => setShowLevelInfo(true)}>
          <Info />
        </IconButton>
      </Stepper>
      {/* a drawer with details when the info icon is clicked  */}
      {showLevelInfo && (
        <DrawerAccountInfo
          showLevelInfo={showLevelInfo}
          setShowLevelInfo={setShowLevelInfo}
        />
      )}
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Medal @Ksh.50 Monthly",
    description: `Lowest priority in both posts and job applications. 
    Posts totally depends on the number of likes from the users of the platform. 
    No following up of the job application suppose you have already completed one.
    Feedback from the recruiters is not guaranteed for it is scaled down to 50/50.
    `,
  },
  {
    label: "Silver @KSh.100 Monthly",
    description: `
    Posts are guaranteed to be published viral and slightly depends on the number of user likes.
    Job seekers are given a higher priority during job application process. Our officials will follow up the goings of your job application to ensure that
     at least you are guaranteed to receive a feedback from the recruters.
    `,
  },
  {
    label: "Gold @Ksh.300 Monthly",
    description: `
    Posts are given highest priority and guaranteed to be in the viral list and reaching many subscribers within the shortest time possible.
    Highest priority during job application for job seekers with a guaranteed feedback from recruiers, this is achieved by the help of our officials following up your application status.
    `,
  },
];

export default function AccountLevelInfo({ setShowLevelInfo }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setShowLevelInfo(false);
  };

  return (
    <Box
      className="w-100"
      bgcolor={"background.default"}
      color={"text.primary"}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">
                    best for social media influencers and artists
                  </Typography>
                ) : index === 1 ? (
                  <Typography variant="caption">
                    best for users looking for opportunities
                  </Typography>
                ) : (
                  <Typography variant="caption">best for beginners</Typography>
                )
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography variant="body2">{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div className="border-bottom">
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="body2">
            The cost is meant to cover the expenses involved in the running and
            management of the platform such as hiring and payment of our
            software developers and catering for the giantly related cloud
            hosting bills. <br />{" "}
            <span className="text-success">
              support kenyan developers and lets build the unreal{" "}
            </span>
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            close
          </Button>
        </Paper>
      )}
    </Box>
  );
}

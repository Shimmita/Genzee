import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Visibility, VisibilityOff } from "@mui/icons-material";
function DeleteAccount() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box m={2}>
      <Box mb={2}>
        <Typography variant="body1" gutterBottom>
          This account will be deleted from the database and the process is
          irreversible. A grace period of 15 days will be provided such that
          within the grace period you can recover your account back, after the
          elapse of grace period there will be no extension and you will be
          notified of permanent account deletion.
        </Typography>
      </Box>

      <Box mb={2}>
        <FormGroup>
          <FormControlLabel
            required
            control={<Checkbox />}
            label={"Yes delete my account !"}
          />
        </FormGroup>
      </Box>

      <Box mb={2}>
        <TextField
          className="w-100"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
      </Box>

      <Box mb={2}>
        <FormControl className="w-100" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>

      <Box mb={2}>
        <FormControl className="w-100" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
      </Box>

      <Box>
        <Button size="small" className="w-100" color="error">
          Delete Account
        </Button>
      </Box>
    </Box>
  );
}

export default DeleteAccount;

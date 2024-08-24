import { Edit, Photo } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  MenuItem,
  TextField
} from "@mui/material";
import React, { useState } from "react";
import devImage from "../../../../images/dev.jpeg";
import CountiesInKenya from "../../../data/Counties";

function GeneralSettings() {
  const [county, setCounty] = useState("");

  return (
    <Box>
      <Box className="ps-2">
        <Box display={"flex"} justifyContent={"center"}>
          <Avatar alt="icon" src={devImage} sx={{ width: 70, height: 70 }} />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            color="inherit"
            startIcon={<Photo />}
            style={{ textTransform: "lowercase" }}
          >
            change
          </Button>
        </Box>

        <Box
          className="w-100"
          display={"flex"}
          gap={2}
          justifyContent={"space-between"}
          mt={1}
        >
          <TextField
            id="outlined-basic"
            label="Shimian Leicher"
            disabled
            className="w-100"
            variant="outlined"
          />
          <IconButton>
            <Edit />
          </IconButton>
        </Box>

        <Box
          className="w-100"
          display={"flex"}
          gap={2}
          justifyContent={"space-between"}
          mt={1}
        >
          <TextField
            id="outlined-basic"
            label="@YoungML"
            disabled
            className="w-100"
            variant="outlined"
          />
          <IconButton>
            <Edit />
          </IconButton>
        </Box>

        <Box
          className="w-100"
          display={"flex"}
          gap={2}
          justifyContent={"space-between"}
          mt={1}
        >
          <TextField
            id="outlined-basic"
            label="shimian@gmailcom"
            disabled
            className="w-100"
            variant="outlined"
          />
          <IconButton>
            <Edit />
          </IconButton>
        </Box>

        <Box
          className="w-100"
          display={"flex"}
          gap={2}
          justifyContent={"space-between"}
          mt={1}
        >
          <TextField
            id="outlined-basic"
            label="+254012345678"
            disabled
            className="w-100"
            variant="outlined"
          />
          <IconButton>
            <Edit />
          </IconButton>
        </Box>

        <Box
          className="w-100"
          display={"flex"}
          gap={2}
          justifyContent={"space-between"}
          mt={1}
          mb={2}
        >
          <TextField
            select
            value={county}
            label="Nairobi"
            disabled
            className="w-100"
            fullWidth
            onChange={(e) => setCounty(e.target.value)}
          >
            {CountiesInKenya &&
              CountiesInKenya.map((county) => (
                <MenuItem key={county} value={county}>
                  {county}
                </MenuItem>
              ))}
          </TextField>
          <IconButton>
            <Edit />
          </IconButton>
        </Box>

        <Box>
          <Button
            className="w-100"
            size="small"
            type="submit"
          >
            update changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default GeneralSettings;

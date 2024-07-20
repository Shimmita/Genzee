import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Box, IconButton, InputBase, Stack, Tooltip } from "@mui/material";
import UserComment from "./UserComment";
import devImage from "../../images/dev.jpeg";
import { SendOutlined } from "@mui/icons-material";

export default function AccordionComment({ mode }) {
  const [expanded, setExpanded] = React.useState(false);
  const [showOuterComment, setShowOuterComment] = React.useState(true);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleComment = () => {
    setShowOuterComment((prev) => !prev);
  };

  return (
    <Box className="mb-2">
      <Accordion
        elevation={0}
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 500 } }}
        sx={{
          "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <small style={{ fontSize: "small" }}>
            replying to <span style={{ color: "steelblue" }}>@devshim</span>
          </small>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            maxHeight: 300,
            overflowY: "auto",
            // Hide scrollbar for Chrome, Safari and Opera
            "&::-webkit-scrollbar": {
              display: "none",
            },
            // Hide scrollbar for IE, Edge and Firefox
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <small style={{ fontSize: "small" }}>
            <UserComment image={devImage} handleComment={handleComment} />
            <UserComment image={devImage} handleComment={handleComment} />
            <UserComment image={devImage} handleComment={handleComment} />
            <UserComment image={devImage} handleComment={handleComment} />
            <UserComment image={devImage} handleComment={handleComment} />
            <UserComment image={devImage} handleComment={handleComment} />
            <UserComment image={devImage} handleComment={handleComment} />
            <UserComment image={devImage} handleComment={handleComment} />
          </small>
        </AccordionDetails>
        <Stack
          direction={"row"}
          className="mt-1"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {showOuterComment ? (
            <InputBase
              multiline
              className="w-100 mt-2 p-3"
              placeholder="write your comment here..."
              sx={{
                fontSize: "small",
              }}
            />
          ) : (
            <InputBase
              multiline
              className="w-100 mt-2 p-3"
              placeholder="reply to this comment here..."
              sx={{
                fontSize: "small",
              }}
            />
          )}

          <Box className="border-start border rounded" alignContent={"center"}>
            <Tooltip title={"post"}>
              <IconButton sx={{ color: "steelblue" }}>
                <SendOutlined sx={{ width: 18, height: 18 }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Stack>
      </Accordion>
    </Box>
  );
}

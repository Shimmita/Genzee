import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Box} from "@mui/material";
import UserComment from "./UserComment";
import devImage from "../../images/dev.jpeg";
export default function AccordionReply({ mode }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box>
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
            Replying to <span style={{ color: "steelblue" }}>@DevShim</span>
          </small>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            height:250,
            overflowX: "auto",
            // Hide scrollbar for Chrome, Safari and Opera
            "&::-webkit-scrollbar": {
              display: "none",
            },
            // Hide scrollbar for IE, Edge and Firefox
            msOverflowStyle:'none',
            scrollbarWidth:'none'
          }}
        >
          <small style={{ fontSize: "small" }}>
            <UserComment image={devImage} />
            <UserComment image={devImage} />
            <UserComment image={devImage} />
            <UserComment image={devImage} />
          </small>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

import {
    Block,
    CopyAll,
    DownloadOutlined,
    FlagOutlined,
    PersonAddOutlined
} from "@mui/icons-material";
import {
    Box,
    ListItemButton,
    ListItemText,
    MenuItem
} from "@mui/material";
import React from "react";
function CardFeedMore() {
  return (
    <>
      <Box borderRadius={5}>
        <MenuItem>
          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemText>
              <FlagOutlined className="mx-2" />
            </ListItemText>
            <ListItemText primary={<small>report this post</small>} />
          </ListItemButton>
        </MenuItem>

        <MenuItem>
          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemText>
              <CopyAll className="mx-2" />
            </ListItemText>
            <ListItemText primary={<small>copy this link</small>} />
          </ListItemButton>
        </MenuItem>

        <MenuItem>
          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemText>
              <DownloadOutlined className="mx-2" />
            </ListItemText>
            <ListItemText primary={<small>save this post</small>} />
          </ListItemButton>
        </MenuItem>

        <MenuItem>
          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemText>
              <PersonAddOutlined className="mx-2" />
            </ListItemText>
            <ListItemText primary={<small>follow devshim</small>} />
          </ListItemButton>
        </MenuItem>

        <MenuItem>
          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemText>
              <Block className="mx-2" />
            </ListItemText>
            <ListItemText primary={<small>block devshim</small>} />
          </ListItemButton>
        </MenuItem>
      </Box>
    </>
  );
}

export default CardFeedMore;

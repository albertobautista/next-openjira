import {
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import React, { useContext } from "react";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { UIContext } from "../../context/ui";
const menuItems: string[] = ["Inbox", "Starred", "Send email", "Drafts"];

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);
  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} button>
              <ListItemIcon>
                {index % 2 ? (
                  <InboxOutlinedIcon />
                ) : (
                  <MailOutlineOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} button>
              <ListItemIcon>
                {index % 2 ? (
                  <InboxOutlinedIcon />
                ) : (
                  <MailOutlineOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

import { MenuItem } from "@mui/material";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({
  children,
  to,
}: {
  children: ReactNode;
  to: string;
}) {
  return (
    <MenuItem
      component={NavLink}
      to={to}
      sx={{
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "inherit",
        textDecoration: "none",
        
        // Target React Router's active class string
        "&.active": {
          color: "yellow", 
        },
      }}
    >
      {children}
    </MenuItem>
  );
}
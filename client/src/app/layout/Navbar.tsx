import { AppBar, Container, MenuList, Toolbar } from "@mui/material";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage:
          "linear-gradient(135deg,#182a73 0%,#218a73 69%,#20a7ac 89%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: 72,
          }}
        >
          <MenuList sx={{ display: "flex", flexDirection: "row", p: 0 }}>
            <MenuItemLink to="/">Reactivities</MenuItemLink>
          </MenuList>

          <MenuList
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1.5,
              p: 0,
            }}
          >
            <MenuItemLink to="/activities">Activities</MenuItemLink>

            <MenuItemLink to="/activity-form">New Activity</MenuItemLink>
          </MenuList>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


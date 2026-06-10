import {
  AppBar,
  Container,
  LinearProgress,
  MenuList,
  Toolbar,
} from "@mui/material";
import MenuItemLink from "../shared/components/MenuItemLink";
import { userStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

export default function Navbar() {
  const { uiStore } = userStore();
  return (
    <AppBar
      position="relative"
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
      <Observer>
        {() =>
          uiStore.isLoading ? (
            <LinearProgress
              color="secondary"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 4,
              }}
            />
          ) : null
        }
      </Observer>
    </AppBar>
  );
}

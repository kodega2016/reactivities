import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Add } from "@mui/icons-material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg,#182a73 0%,#218a73 69%,#20a7ac 89%)",
          borderRadius: 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", letterSpacing: 0.5 }}
            >
              Reactivities
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              color="inherit"
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              Activities
            </Button>
            <Button
              color="inherit"
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              About
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Add />}
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              New Activity
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

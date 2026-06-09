import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <Paper
      sx={{
        display: "flex",
        height: "100vh",
        color: "white",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(135deg,#182a73 0%,#218a73 69%,#20a7ac 89%)",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", color: "white", gap: 3 }}
      >
        <Group sx={{ height: 82, width: 82 }} />
        <Typography variant="h2">Reactivities</Typography>
      </Box>
      <Typography variant="h4">Welcome to reactivities</Typography>
      <Button
        variant="contained"
        component={Link}
        to="/activities"
        size="medium"
        sx={{ height: 48, borderRadius: 3, fontSize: "1rem", px: 2.5 }}
      >
        Take me to activities!!
      </Button>
    </Paper>
  );
}

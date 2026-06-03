import { Box, Container, CssBaseline, Typography } from "@mui/material";

import "./index.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar openForm={() => {}} />
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;

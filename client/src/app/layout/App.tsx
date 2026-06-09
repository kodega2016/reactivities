import { Box, Container, CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router";

import "./index.css";
import "./styles.css";
import HomePage from "../../features/home/HomePage";

const theme = createTheme({
  typography: {
    fontFamily: '"Space Grotesk", "Roboto", sans-serif',
  },
});

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
        <CssBaseline />

        {location.pathname == "/" ? (
          <HomePage />
        ) : (
          <Container maxWidth={false} disableGutters sx={{ px: 3 }}>
            <Navbar />
            <Outlet />
          </Container>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;

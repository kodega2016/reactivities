import { Box, Container, CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./index.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, "BioRhyme", serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
        <CssBaseline />
        <GlobalStyles styles={{ body: { fontFamily: 'Roboto, "BioRhyme", serif' } }} />
        <Container maxWidth={false} disableGutters sx={{ px: 3 }}>
          <Navbar />
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

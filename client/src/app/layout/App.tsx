import { Box, Container, CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./index.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const theme = createTheme({
  typography: {
    fontFamily: '"BioRhyme", serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
        <CssBaseline />
        <GlobalStyles styles={{ body: { fontFamily: '"BioRhyme", serif' } }} />
        <Container maxWidth="lg">
          <Navbar />
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

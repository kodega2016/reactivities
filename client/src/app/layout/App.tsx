import { Box, CssBaseline } from "@mui/material";

import "./index.css";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => response.data)
      .then((data) => {
        setActivities(data);
      })
      .catch((error) => console.log(error));

    return () => {};
  }, []);

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <Navbar />
      <ActivityDashboard activities={activities} />
    </Box>
  );
}

export default App;

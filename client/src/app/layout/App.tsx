import { Box, Container, CssBaseline } from "@mui/material";

import "./index.css";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >();

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

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id) || undefined);
  };
  const handleCancelSelectAcitivity = () => {
    setSelectedActivity(undefined);
  };

  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          cancelSelectedActivity={handleCancelSelectAcitivity}
          selectedActivity={selectedActivity}
        />
      </Container>
    </Box>
  );
}

export default App;

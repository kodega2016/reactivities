import { Box, Container, CssBaseline, Typography } from "@mui/material";

import "./index.css";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard.tsx";
import { useState } from "react";
import { useActivities } from "../../lib/hooks/useActivities.ts";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >();

  const [editMode, setEditMode] = useState<boolean>(false);

  const { activities, isPending } = useActivities();
  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((x) => x.id === id) || undefined);
  };
  const handleCancelSelectAcitivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectAcitivity();
    setEditMode(true);
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };

  const handleDelete = (id: string) => {
    console.log(id);
    // setActivities(activities.filter((x) => x.id !== id));
  };

  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar openForm={handleOpenForm} />
        {!activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities ?? []}
            selectActivity={handleSelectActivity}
            cancelSelectedActivity={handleCancelSelectAcitivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleCloseForm}
            deleteActivity={handleDelete}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;

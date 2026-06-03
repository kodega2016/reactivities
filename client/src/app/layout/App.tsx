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

  const [editMode, setEditMode] = useState<boolean>(false);

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

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectAcitivity();
    setEditMode(true);
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(
        activities.map((x) => (x.id === activity.id ? activity : x)),
      );
    } else {
      const newActivity = { ...activity, id: activities.length.toString() };
      setActivities([...activities, { ...newActivity }]);
    }
    setEditMode(false);
  };

  const handleDelete = (id: string) => {
    setActivities(activities.filter((x) => x.id !== id));
  };

  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar openForm={handleOpenForm} />
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          cancelSelectedActivity={handleCancelSelectAcitivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        />
      </Container>
    </Box>
  );
}

export default App;

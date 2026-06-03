import Grid from "@mui/material/Grid";
import ActivitiesList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  selectedActivity?: Activity;
  openForm: (id?: string) => void;
  closeForm: () => void;
  editMode: boolean;
  submitForm: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
};

export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectedActivity,
  openForm,
  closeForm,
  editMode,
  submitForm,
  deleteActivity,
}: Props) {
  return (
    <>
      <Grid container sx={{ mt: 2 }} spacing={3}>
        <Grid size={7}>
          <ActivitiesList
            activities={activities}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
          />
        </Grid>
        <Grid size={5}>
          {editMode && (
            <ActivityForm
              closeForm={closeForm}
              activity={selectedActivity}
              submitForm={submitForm}
            />
          )}
          {selectedActivity && !editMode && (
            <ActivityDetail
              activity={selectedActivity}
              openForm={openForm}
              cancelSelectedActivity={cancelSelectedActivity}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

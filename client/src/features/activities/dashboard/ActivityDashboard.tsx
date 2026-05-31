import Grid from "@mui/material/Grid";
import ActivitiesList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  selectedActivity?: Activity;
};

export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectedActivity,
}: Props) {
  return (
    <>
      <Grid container sx={{ mt: 2 }} spacing={3}>
        <Grid size={7}>
          <ActivitiesList
            activities={activities}
            selectActivity={selectActivity}
          />
        </Grid>
        <Grid size={5}>
          <ActivityForm />
          {selectedActivity && (
            <ActivityDetail
              activity={selectedActivity}
              cancelSelectedActivity={cancelSelectedActivity}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

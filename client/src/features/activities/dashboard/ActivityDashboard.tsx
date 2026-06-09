import Grid from "@mui/material/Grid";
import ActivitiesList from "./ActivityList";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityFilters from "./ActivityFilters";

export default function ActivityDashboard() {
  const { activities } = useActivities();

  const selectActivity = (id: string) => {
    console.log(id);
  };

  return (
    <>
      <Grid container sx={{ mt: 2 }} spacing={3}>
        <Grid size={7}>
          <ActivitiesList
            activities={activities ?? []}
            selectActivity={selectActivity}
          />
        </Grid>
        <Grid size={5}>
          <ActivityFilters />
          </Grid>
      </Grid>
    </>
  );
}

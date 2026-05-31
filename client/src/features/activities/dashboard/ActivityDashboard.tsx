import Grid from "@mui/material/Grid";
import ActivitiesList from "./ActivityList";

type Props = {
  activities: Activity[];
};
export default function ActivityDashboard({ activities }: Props) {
  return (
    <>
      <Grid container sx={{ margin: 2 }}>
        <Grid size={9}>
          <ActivitiesList activities={activities} />
        </Grid>
        <Grid size={3}></Grid>
      </Grid>
    </>
  );
}

import Grid from "@mui/material/Grid";
import { List, ListItem, ListItemText } from "@mui/material";


type Props={
    activities:Activity[]
}
export default function ActivityDashboard({activities}:Props) {
  

  return (
    <>
      <Grid container>
        <Grid size={9}>
          <List>
            {activities.map((activity) => {
              return (
                <ListItem key={activity.id}>
                  <ListItemText>{activity.title}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid size={3}>This is sidebar</Grid>
      </Grid>
    </>
  );
}

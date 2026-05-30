import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/activities")
      .then(response => response.json())
      .then(data => {
        setActivities(data)
      }).catch(error => console.log(error))

    return () => {
      // console.log("clean up code goes here...")
    }


  }, [])

  return <>
    <Typography variant="h3">Reactivities</Typography>
    <List>

      {activities.map(activity => {
        return <ListItem key={activity.id}>
          <ListItemText>{activity.title}</ListItemText>
        </ListItem>
      })}

    </List>

  </>

}

export default App;

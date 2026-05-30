import { CssBaseline, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios"
import './index.css'
import Navbar from "./Navbar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5000/api/activities")
      .then(response => response.data)
      .then(data => {
        setActivities(data)
      }).catch(error => console.log(error))

    return () => {
      // console.log("clean up code goes here...")
    }


  }, [])

  return <>
  <CssBaseline />
    <Navbar/>
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

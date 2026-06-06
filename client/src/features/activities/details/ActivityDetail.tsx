import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <Typography>Loading...</Typography>;
  if(activity==null){
    return <Typography>{`Activity with the given id ${id} not found`}</Typography>
  }

  return (
    <Card>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />

      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1">{activity.date}</Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => navigate(`/manage/${id}`)}>
          Edit
        </Button>
        <Button color="inherit" onClick={() => navigate("/activities")}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}

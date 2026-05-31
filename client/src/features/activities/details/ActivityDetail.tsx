import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  cancelSelectedActivity: (id: string) => void;
};

export default function ActivityDetail({
  activity,
  cancelSelectedActivity,
}: Props) {
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
        <Button color="primary">Edit</Button>
        <Button
          color="inherit"
          onClick={() => cancelSelectedActivity(activity.id)}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}

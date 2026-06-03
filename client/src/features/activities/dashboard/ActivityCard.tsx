import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
};

export default function ActivityCard({
  activity,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {activity.date}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city}/{activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined" />
        <Box sx={{ gap: 1, display: "flex" }}>
          <Button
            size="medium"
            variant="outlined"
            onClick={() => selectActivity(activity.id)}
          >
            View
          </Button>
          <Button
            size="medium"
            variant="outlined"
            onClick={() => deleteActivity(activity.id)}
            color="error"
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

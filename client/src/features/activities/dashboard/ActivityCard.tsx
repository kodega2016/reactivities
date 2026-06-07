import { AccessTime, Place } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
};

export default function ActivityCard({ activity }: Props) {
  const isHost = true;
  const isGoing = false;
  const label = isHost
    ? "You are hosting this activity"
    : isGoing
      ? "You are going to this activity"
      : "";
  const isCancelled = true;
  const color = isCancelled
    ? "error"
    : isHost
      ? "primary"
      : isGoing
        ? "success"
        : "default";

  return (
    <Card sx={{ elevation: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardHeader
          avatar={<Avatar sx={{ height: 80, width: 80 }} />}
          title={activity.title}
          subheader={
            <>
              Hosted by:<Link to={`/profiles/bob`}>Bob</Link>
            </>
          }
        ></CardHeader>

        <Box sx={{ gap: 1, mr: 2, flexDirection: "column", display: "flex" }}>
          {(isHost || isGoing) && (
            <Chip label={label} sx={{ borderRadius: 2, color: color }} />
          )}

          {isCancelled && (
            <Chip
              label={"Cancelled"}
              sx={{ borderRadius: 2, color: "error" }}
            />
          )}
        </Box>
      </Box>
      <Divider sx={{ mb: 2 }} />

      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <AccessTime sx={{ mr: 1 }} />
          <Typography>{activity.date}</Typography>
          <Place sx={{ mr: 1 }} />
          <Typography>{activity.venue}</Typography>
        </Box>
        <Divider />
        <Box sx={{ backgroundColor: "grey.200", py: 3, pl: 3 }}>
          Attendees go here...
        </Box>
      </CardContent>

      <CardActions
        sx={{ pb: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="body2">{activity.description}</Typography>
        <Box sx={{ display: "flex", gap: 3, ml: "auto" }}>
          <Button
            component={Link}
            to={`/activities/${activity.id}`}
            variant="contained"
            sx={{ ml: "auto" }}
          >
            View
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

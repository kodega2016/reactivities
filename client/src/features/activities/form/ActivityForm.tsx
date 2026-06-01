import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
  closeForm: () => void;
  activity: Activity | undefined;
};

const formatLocalDate = (d?: string | Date) => {
  if (!d) return "";
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

export default function ActivityForm({ closeForm, activity }: Props) {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create new activity
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mb: "3", gap: 1 }}>
        <TextField label="Title" value={activity?.title} />
        <TextField
          label="Description"
          multiline
          rows={3}
          value={activity?.description}
        />
        <TextField label="Category" value={activity?.category} />
        <TextField
          label="Date"
          value={formatLocalDate(activity?.date)}
          type="date"
        />
        <TextField label="City" value={activity?.city} />
        <TextField label="Venue" value={activity?.venue} />
        <Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
          <Button color="inherit" onClick={closeForm}>
            Cancel
          </Button>
          <Button color="success" variant="contained">
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

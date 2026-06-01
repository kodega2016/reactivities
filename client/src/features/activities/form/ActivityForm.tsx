import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
  closeForm: () => void;
};

export default function ActivityForm({ closeForm }: Props) {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create new activity
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mb: "3", gap: 1 }}>
        <TextField label="Title" />
        <TextField label="Description" multiline rows={3} />
        <TextField label="Category" />
        <TextField label="Date" type="date" />
        <TextField label="City" />
        <TextField label="Venue" />
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
